import { useState } from 'react';
import '../css/AddCharacter.css';
import CharacterCard from "./CharacterCard";

function AddCharacter (props) {
    const DEFAULT_API_URL = "http://127.0.0.1:5000/characters";

    // import Character Card object from App.jsx
    const { sampleCharacterCard } = props;
    console.log(sampleCharacterCard);

    // Init state for all form data
    const [ characterName, setCharacterName ] = useState("");
    const [ characterAlias, setCharacterAlias ] = useState("");
    const [ characterAlignment, setCharacterAlignment ] = useState("");
    const [ characterPowers, setCharacterPowers ] = useState("");
    const [ characterImgURL, setcharacterImgURL ] = useState("");

    // Init state to handle submit
    const [ error, setError] = useState("");
    const [ success, setSuccess ] = useState("");

    // Handlers for data changes
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
            setError('Both title and body are required');
            return false;
        }
        setError('');
        return true;
    };

    // Handler for submit button click
    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!validateForm()) {
            return; 
        }

        try {
            const response = await fetch(DEFAULT_API_URL, {
                method: "POST",
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
                    <p>New Character Added Successfully!</p>
                    <p>ID: {data.id}</p>
                    <p>Character Added: {data.name} aka {data.alignment}</p>
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

    // Component JSX
    return (
        <>
            <div className="form-container">
                <div className="">
                    <CharacterCard characterInfo={sampleCharacterCard} />
                </div>
                <div className="content-container">
                    <div>
                        <h2>Add a Marvel Character</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi error non qui natus ullam 
                            pariatur debitis sit tempore aliquam. Architecto exercitationem repellat praesentium 
                            voluptas reiciendis deleniti nostrum doloremque debitis incidunt!
                        </p>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-element">
                                <label htmlFor="character-name" className="form-label">Character Name</label>
                                <input type="text" className="form-control" id="character-name" placeholder="i.e. Black Panther" onChange={handleNameChange} />
                            </div>
                            <div className="form-element">
                                <label htmlFor="character-alias" className="form-label">Character Alias</label>
                                <input type="text" className="form-control" id="character-alias" placeholder="i.e. King T'Challa" onChange={handleAliasChange}/>
                            </div>
                            <div className="form-element">
                                <label htmlFor="character-align" className="form-label">Hero or Villain?</label>
                                <input type="dropdown" className="form-control" id="character-align"onChange={handleAlignmentChange} />
                            </div>
                            <div className="form-element">
                                <label htmlFor="character-powers" className="form-label">Please list your character&apos;s powers</label>
                                <input type="text" className="form-control" id="character-powers" onChange={handlePowersChange} />
                            </div>
                            <div className="form-element">
                                <label htmlFor="character-image-url" className="form-label">Copy and paste the image URL for your character&apos;s profile picture</label>
                                <input type="text" className="form-control" id="character-image-url" onChange={handleURLChange}/>
                            </div>
                            <div className="form-element">
                                <button type='submit'>Add Character to the Database</button>
                            </div>
                        </form>

                        {/* Display validation error or success message */}
                        {error && <div style={{ color: 'red' }}>{error}</div>}
                        {success && <div style={{ color: 'green' }}>{success}</div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddCharacter;

AddCharacter.propTypes = {
    sampleCharacterCard: Object,
}
