import { useState } from 'react';
import '../css/ViewCharacter.css';
import CharacterCard from "./CharacterCard";

function ViewCharacter (props) {
    // Database import
    const { characterDatabase } = props;

    // Init search state variables
    const [ selectedCharacter, setSelectedCharacter ] = useState(null);
    const [ searchId, setSearchId ] = useState('');
    const [ searchError, setSearchError] = useState("");

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

    // Component JSX Render
    return (
        <>
            <div className="content-container">
                <div className="text-center">
                    <div>
                        <h2>View a Character Card</h2>
                        <p>Use the form below to view a character card in the database</p>
                    </div>
                    <div className='content-container text-center'>
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
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewCharacter;

ViewCharacter.propTypes = {
    characterDatabase: Object,
}
