import { useState, useEffect } from 'react';
import '../css/EditCharacter.css';
import CharacterCard from "./CharacterCard";

function EditCharacter (props) {
    // Database import
    const { characterDatabase } = props;

    // Init state variables
    const [ selectedCharacter, setSelectedCharacter ] = useState(characterDatabase[0]);
    const [ characterId, setCharacterId ] = useState(0);
    
    // Init state for all form data
    const [ characterName, setCharacterName ] = useState("");
    // const [ characterAlias, setCharacterAlias ] = useState("");
    // const [ characterAlignment, setCharacterAlignment ] = useState("");
    // const [ characterPowers, setCharacterPowers ] = useState("");
    // const [ characterImgURL, setcharacterImgURL ] = useState("");

    // Init state to handle submit
    // const [ error, setError] = useState("");
    // const [ success, setSuccess ] = useState("");

    // Update displayed Card based on the ID field changes
    const handleIdChange = (event) => {
        let entry = parseInt(event.target.value);
        
        for (let i = 0; i < characterDatabase.length; i++) {
            if (entry === characterDatabase[i].id) {
                setCharacterId(entry - 1);
                setSelectedCharacter(characterDatabase[entry - 1]);
            }
        }
    }

    // Refresh form fields once the id changes
    useEffect(() => {
        // This effect will run whenever field1 or field2 changes
        setCharacterName(characterDatabase[characterId].name);
        }, [characterId, characterDatabase]
    );

    // Handlers for data changes
    // const handleNameChange = (event) => {
    //     setCharacterName(event.target.value);
    // };

    // const handleAliasChange = (event) => {
    //     setCharacterAlias(event.target.value);
    // };

    // const handlePowersChange = (event) => {
    //     setCharacterPowers(event.target.value);
    // };

    // const handleURLChange = (event) => {
    //     setcharacterImgURL(event.target.value);
    // };

    // const handleAlignmentChange = (event) => {
    //     setCharacterAlignment(event.target.value);
    // };

    // Component JSX Render
    return (
        <>
            <div className="form-container">
                <div className="">
                    {selectedCharacter && <CharacterCard characterInfo={characterDatabase[characterId]} />}
                </div>
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
                        <form>
                            <div className="form-element">
                                <label htmlFor="character-id" className="form-label">Enter the ID of the character you would like to edit: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="character-id"
                                    placeholder="Numerical values only"
                                    defaultValue={characterDatabase[characterId].id || ''}
                                    onChange={handleIdChange}
                                />
                                <p>Current IDs Available: 1 - {characterDatabase.length}</p>
                            </div>
                        </form>

                        <form>
                            <div className="form-element">
                                <label htmlFor="character-name" className="form-label">Character Name</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    id="character-name"
                                    placeholder="i.e. Black Panther"
                                    defaultValue={characterName || ''}
                                    // onChange={handleNameChange}
                                />
                            </div>
                            {/* <div className="form-element">
                                <label htmlFor="character-alias" className="form-label">Character Alias</label>
                                <input type="text" className="form-control" id="character-alias" placeholder="i.e. King T'Challa" value={characterDatabase[characterId].alias || ''} />
                            </div>
                            <div className="form-element">
                                <label htmlFor="character-align" className="form-label">Hero or Villain?</label>
                                <input type="dropdown" className="form-control" id="character-align" value={characterDatabase[characterId].alignment || ''}/>
                            </div>
                            <div className="form-element">
                                <label htmlFor="character-powers" className="form-label">Please list your character&apos;s powers</label>
                                <input type="text" className="form-control" id="character-powers" value={characterDatabase[characterId].powers || ''}/>
                            </div>
                            <div className="form-element">
                                <label htmlFor="character-image-url" className="form-label">Copy and paste the image URL for your character&apos;s profile picture</label>
                                <input type="text" className="form-control" id="character-image-url" value={characterDatabase[characterId].image_url || ''} />
                            </div>
                            <div className="form-element">
                                <button type='submit'>Submit Changes to the Database</button>
                            </div> */}
                        </form>
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
