import '../css/DeleteCharacter.css';
import CharacterCard from "./CharacterCard";

function DeleteCharacter () {
    return (
        <>
            <div className="form-container">
                <div className="">
                    <CharacterCard />
                </div>
                <div className="content-container">
                    <div>
                        <h2>Delete a Marvel Character</h2>
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
                                <input type="number" className="form-control" id="character-id" placeholder="Numerical values only" />
                                {/* Display the number of entries available in the database */}
                                <p>Entries Available: 1 - 10</p>
                            </div>
                            <div className="form-element">
                                <button type='submit'>Delete Character from Database</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteCharacter;
