import '../css/EditCharacter.css';
import CharacterCard from "./CharacterCard";

function EditCharacter () {
    return (
        <>
            <div className="form-container">
                <div className="">
                    <CharacterCard />
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
                                <input type="number" className="form-control" id="character-id" placeholder="Numerical values only" />
                                {/* Display the number of entries available in the database */}
                                <p>Entries Available: 1 - 10</p>
                            </div>
                            <div className="form-element">
                                <label htmlFor="character-name" className="form-label">Character Name</label>
                                <input type="text" className="form-control" id="character-name" placeholder="i.e. Black Panther" />
                            </div>
                            <div className="form-element">
                                <label htmlFor="character-alias" className="form-label">Character Alias</label>
                                <input type="text" className="form-control" id="character-alias" placeholder="i.e. King T'Challa" />
                            </div>
                            <div className="form-element">
                                <label htmlFor="character-align" className="form-label">Hero or Villain?</label>
                                <input type="dropdown" className="form-control" id="character-align" />
                            </div>
                            <div className="form-element">
                                <label htmlFor="character-powers" className="form-label">Please list your character&apos;s powers</label>
                                <input type="text" className="form-control" id="character-powers" />
                            </div>
                            <div className="form-element">
                                <label htmlFor="character-image-url" className="form-label">Copy and paste the image URL for your character&apos;s profile picture</label>
                                <input type="text" className="form-control" id="character-image-url" />
                            </div>
                            <div className="form-element">
                                <button type='submit'>Submit Changes to the Database</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default EditCharacter;
