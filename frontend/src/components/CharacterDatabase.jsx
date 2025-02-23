import "../css/CharacterDatabase.css";
import CharacterCard from "./CharacterCard"; 

function CharacterDatabase () {
    return (
        <>
            <h2 className="navigate-text">Navigate using the arrows to view our collection:</h2>
            <div className="content-container">
                <div className="nav-arrow">
                    <a href="#"><i className="fi fi-br-angle-double-left"></i></a>
                </div>
                <div className="char-card-container">
                    <div className="char-card">
                        <CharacterCard />
                    </div>
                    <div className="char-card">
                        <CharacterCard />
                    </div>
                    <div className="char-card">
                        <CharacterCard />
                    </div>
                </div>
                <div className="nav-arrow">
                    <a href="#"><i className="fi fi-br-angle-double-right"></i></a>
                </div>
            </div>
        </>
    )
}

export default CharacterDatabase;
