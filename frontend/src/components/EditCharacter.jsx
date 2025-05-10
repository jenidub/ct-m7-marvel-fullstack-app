import { useState } from 'react';
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
    // const [ characterId, setCharacterId ] = useState(null);

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

    // Form Validation Method
    const validateForm = () => {
        if (characterName.trim() === '' 
            || characterAlias.trim() === ''
            || characterAlignment.trim() === '' 
            || characterImgURL.trim() === '' 
            || characterPowers.trim() === ''
        ) {
            setError('All fields in the form are required. Please try again');
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

        try {
            const response = await fetch(`${DEFAULT_API_URL}/${selectedCharacter.id}`, {
                method: "PUT",
                body: JSON.stringify({
                    name: characterName,
                    alias: characterAlias,
                    alignment: characterAlignment,
                    powers: characterPowers,
                    image_url: characterImgURL,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })

            if(!response.ok) {
                throw new Error("Failed to add new character");
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
        } catch (error) {
            setError(error.message);
        }
    }

    // Component JSX Render
    return (
        <>
            <div className="form-container">
                <div className="">
                    <div>
                        <h2>Edit an Existing Character</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi error non qui natus ullam 
                            pariatur debitis sit tempore aliquam. Architecto exercitationem repellat praesentium 
                            voluptas reiciendis deleniti nostrum doloremque debitis incidunt!
                        </p>
                    </div>
                    <div className='content-container'>
                        <div className="form-element">
                            <label htmlFor="character-id" className="form-label">Enter the ID of the character you would like to edit: </label>
                            <input
                                type="text"
                                className="form-control"
                                id="character-id"
                                placeholder="Numerical values only"
                                onChange={(e) => setSearchId(e.target.value)}
                            />
                            <p>Current IDs Available: 1 - {characterDatabase.length}</p>
                            <button onClick={handleSearch}>Click to Search for ID</button>
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
                                            defaultValue={selectedCharacter.name || ''}
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
                                            defaultValue={selectedCharacter.alias || ''}
                                            onChange={handleAliasChange}
                                        />
                                    </div>
                                    <div className="form-element">
                                        <label htmlFor="character-align" className="form-label">Hero or Villain?</label>
                                        <input
                                            type="dropdown"
                                            className="form-control" 
                                            id="character-align"
                                            defaultValue={selectedCharacter.alignment || ''}
                                            onChange={handleAlignmentChange}
                                        />
                                    </div>
                                    <div className="form-element">
                                        <label htmlFor="character-powers" className="form-label">Please list your character&apos;s powers</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            id="character-powers"
                                            defaultValue={selectedCharacter.powers || ''}
                                            onChange={handlePowersChange}
                                        />
                                    </div>
                                    <div className="form-element">
                                        <label htmlFor="character-image-url" className="form-label">Copy and paste the image URL for your character&apos;s profile picture</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="character-image-url"
                                            defaultValue={selectedCharacter.image_url || ''}
                                            onChange={handleURLChange}
                                        />
                                    </div>
                                    <div className="form-element">
                                        <button type='submit'>Submit Changes to the Database</button>
                                    </div>
                                </form>
                            </>
                        }

                        {/* Display validation error or success message */}
                        {error && <div style={{ color: 'red' }}>{error}</div>}
                        {success && <div style={{ color: 'green' }}>{success}</div>}
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
