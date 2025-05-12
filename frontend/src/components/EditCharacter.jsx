import { useState, useEffect } from 'react';
import '../css/EditCharacter.css';
import CharacterCard from "./CharacterCard";

function EditCharacter (props) {
    const DEFAULT_API_URL = "http://127.0.0.1:5000/characters";

    // Database import
    const { characterDatabase } = props;

    // Init search state variables
    const [ selectedCharacter, setSelectedCharacter ] = useState(null);
    const [ searchId, setSearchId ] = useState('');
    const [ searchError, setSearchError] = useState("");

    // Init state variables for form data
    const [ characterName, setCharacterName ] = useState("");
    const [ characterAlias, setCharacterAlias ] = useState("");
    const [ characterAlignment, setCharacterAlignment ] = useState("");
    const [ characterPowers, setCharacterPowers ] = useState("");
    const [ characterImgURL, setcharacterImgURL ] = useState("");

    // Init state variables to handle submit
    const [ error, setError] = useState("");
    const [ success, setSuccess ] = useState("");

    // Update displayed Card based on the ID field changes
    const handleSearch = () => {
        const found = characterDatabase.find((item) => item.id.toString() === searchId.trim());

        if (found) {
            setSelectedCharacter(found);
            setSearchError('');
            console.log(found);
        } else {
            setSelectedCharacter(null);
            setSearchError('Character Not Found. Please try again!');
        }
    }

    // Ensure the data in the fields to be edited refreshes with each search
    useEffect(() => {
        if (selectedCharacter) {
            setCharacterName(selectedCharacter.name || "");
            setCharacterAlias(selectedCharacter.alias || "");
            setCharacterAlignment(selectedCharacter.alignment || "");
            setCharacterPowers(selectedCharacter.powers || "");
            setcharacterImgURL(selectedCharacter.image_url || "");
        }
    }, [selectedCharacter]);

    // // Handlers for data changes
    const handleNameChange = (event) => {
        setCharacterName(event.target.value);
    };

    const handleAliasChange = (event) => {
        setCharacterAlias(event.target.value);
    };

    const handlePowersChange = (event) => {
        setCharacterPowers(event.target.value);
    };

    const handleURLChange = (event) => {
        setcharacterImgURL(event.target.value);
    };

    const handleAlignmentChange = (event) => {
        setCharacterAlignment(event.target.value);
    };

    // Form Validation Method to check if any of the fields have been modified
    // Only block if no fields have been updated
    const validateForm = () => {
        if (!selectedCharacter) {
            setError('No character selected.');
            return false;
        }

        if (
            characterName === selectedCharacter.name &&
            characterAlias === selectedCharacter.alias &&
            characterAlignment === selectedCharacter.alignment &&
            characterPowers === selectedCharacter.powers &&
            characterImgURL === selectedCharacter.image_url
        ) {
            setError('No changes detected. Please modify at least one field.');
            return false;
        }

        setError('');
        return true;
    };

    // handleSubmit() for updating the database
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!validateForm()) {
            return; 
        }

        //
        const fullPayload = {
            name: characterName || selectedCharacter.name,
            alias: characterAlias || selectedCharacter.alias,
            alignment: characterAlignment || selectedCharacter.alignment,
            powers: characterPowers || selectedCharacter.powers,
            image_url: characterImgURL || selectedCharacter.image_url,
        };

        try {
            const response = await fetch(`${DEFAULT_API_URL}/${selectedCharacter.id}`, {
                method: "PUT",
                body: JSON.stringify(fullPayload),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })

            if(!response.ok) {
                throw new Error("Failed to update character");
            }

            // Display success message
            const data = await response.json();
            setSuccess(
                <div>
                    <p>Character Update Success!</p>
                    <p>ID: {data.id}</p>
                    <p>Character Name: {data.name} [{data.alignment}]</p>
                </div>
            )
            
            // Reset all fields
            setCharacterName("");
            setCharacterAlias("");
            setCharacterAlignment("");
            setCharacterPowers("");
            setcharacterImgURL("");
            setSearchId("");
            setSelectedCharacter(null);

            // setSearchError("");
            // setSuccess("");
            // setError("");
        } catch (error) {
            setError(error.message);
        }
    }

    // Component JSX Render
    return (
        <>
            <div className="form-container">
                <div className="text-center">
                    <div>
                        <h2>Edit an Existing Character</h2>
                        <p>
                            Use the form below to edit an existing character in the database.
                            You can update as many field as you want.</p>
                    </div>
                    <div className='content-container text-center'>
                        {/* Display validation error or success message */}
                        {error && <div style={{ color: 'red' }}>{error}</div>}
                        {success && <div style={{ color: 'green' }}>{success}</div>}

                        {/* Search by ID Section */}
                        <div className="form-element">
                            <label htmlFor="character-id" className="form-label">Enter the ID of the character you would like to edit: </label>
                            <input
                                type="text"
                                className="form-control"
                                id="character-id"
                                placeholder="Numerical values only"
                                onChange={(e) => setSearchId(e.target.value)}
                            />
                            {/* <p>Current IDs Available: 1 - {characterDatabase.length}</p> */}
                            <button onClick={handleSearch}>Click to Search by ID</button>
                        </div>

                        {searchError && <p className="text-red-500 mt-2">{searchError}</p>}

                        { selectedCharacter &&
                            <>
                                <div className="">
                                    {selectedCharacter && <CharacterCard characterInfo={selectedCharacter} />}
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-element">
                                        <label htmlFor="character-name" className="form-label">Character Name</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            id="character-name"
                                            placeholder="i.e. Black Panther"
                                            value={characterName}
                                            onChange={handleNameChange}
                                        />
                                    </div>
                                    <div className="form-element">
                                        <label htmlFor="character-alias" className="form-label">Character Alias</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            id="character-alias"
                                            placeholder="i.e. King T'Challa"
                                            value={characterAlias}
                                            onChange={handleAliasChange}
                                        />
                                    </div>
                                    <div className="form-element">
                                        <label htmlFor="character-align" className="form-label">Hero or Villain?</label>
                                        <input
                                            type="dropdown"
                                            className="form-control" 
                                            id="character-align"
                                            value={characterAlignment}
                                            onChange={handleAlignmentChange}
                                        />
                                    </div>
                                    <div className="form-element">
                                        <label htmlFor="character-powers" className="form-label">Please list your character&apos;s powers</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            id="character-powers"
                                            value={characterPowers}
                                            onChange={handlePowersChange}
                                        />
                                    </div>
                                    <div className="form-element">
                                        <label htmlFor="character-image-url" className="form-label">Copy and paste the image URL for your character&apos;s profile picture</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="character-image-url"
                                            value={characterImgURL}
                                            onChange={handleURLChange}
                                        />
                                    </div>
                                    <div className="form-element">
                                        <button type='submit'>Submit Changes to the Database</button>
                                    </div>
                                </form>
                            </>
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default EditCharacter;

EditCharacter.propTypes = {
    characterDatabase: Object,
}
