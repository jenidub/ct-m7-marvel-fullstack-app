import { useState } from 'react';
import '../css/DeleteCharacter.css';
import CharacterCard from "./CharacterCard";

function DeleteCharacter (props) {
    const DEFAULT_API_URL = "http://127.0.0.1:5000/characters";

    // database import from props
    const { characterDatabase } = props;

    // store deleted character name
    let deletedCharacter = "";
    let deletedId = 0;

    // Init search state variables
    const [ selectedCharacter, setSelectedCharacter ] = useState(null);
    const [ searchId, setSearchId ] = useState('');
    const [ searchError, setSearchError] = useState("");

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

    // handleSubmit() for updating the database
    const handleSubmit = async (e) => {
        e.preventDefault();
        deletedCharacter = selectedCharacter.name;
        deletedId = selectedCharacter.id;

        try {
            const response = await fetch(`${DEFAULT_API_URL}/${selectedCharacter.id}`, {
                method: "DELETE",
                body: {},
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })

            if(!response.ok) {
                throw new Error("Failed to add new character");
            }

            // Display success message
            // const data = await response.json();
            setSuccess(
                <div>
                    <p>{deletedCharacter} Deleted Successfully!</p>
                    <p>ID: {deletedId}</p>
                </div>
            )

        // reset state after submit
        setSelectedCharacter(null);
        setSearchId(null);
        deletedCharacter = "";
        deletedId = 0;

        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
            <div className="content-container">
                <div className='text-center'>
                    <h2>Delete a Marvel Character</h2>
                    <p className='mt-3'>
                        Use the form below to look up a character.
                        A preview of the card will appear if it is a valid ID.
                        You will then have the option to delete the card.
                    </p>
                </div>
                <div className="form-element text-center">
                    <label htmlFor="character-id" className="form-label">Enter the ID of the character you would like to delete: </label>
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
                    <div className="form-element text-center">
                        {selectedCharacter && <CharacterCard characterInfo={selectedCharacter} />}
                        <div className='mt-3'>
                            <h2>Are you sure you want to delete this character?</h2>
                            <button type='submit' onClick={handleSubmit}>Delete Character from Database</button>
                        </div>
                    </div>
                }
                {/* Display validation error or success message */}
                {error && <div style={{ color: 'red' }}>{error}</div>}
                {success && <div style={{ color: 'green' }}>{success}</div>}
            </div>
        </>
    )
}

export default DeleteCharacter;

DeleteCharacter.propTypes = {
    characterDatabase: Object,
}

