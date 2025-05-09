import "../css/NavBar.css";
import bpMask from "../assets/i8-bp-mask-white.png";
import capLogo from "../assets/i8-captain-america-white.png";
import marvelLogo from "../assets/marvel-character-logo.png";
import xmenLogo from "../assets/i8-x-men-white.png";
import spidermanMask from "../assets/i8-spiderman-white.png";

function NavBar () {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-link-container">
                    <a href="/">
                        <img className="navbar-icon" src={bpMask} alt="Marvel Black Panther Mask from Icons8" />
                        <p className="navbar-text">View Directory</p>
                    </a>
                </div>
                <div className="navbar-link-container">
                    <a href="/add">
                        <img className="navbar-icon" src={xmenLogo} alt="Marvel Xmen Team Logo Icon from Icons8" />
                        <p className="navbar-text">Add A Character</p>
                    </a>
                </div>
                <div className="navbar-link-container">
                    <a href="/">
                        <img id="navbar-main-image" src={marvelLogo} alt="Marvel Character Inset Logo from Icons8" />
                    </a>  
                </div>
                <div className="navbar-link-container">
                    <a href="/edit">
                        <img className="navbar-icon" src={capLogo} alt="Marvel Captain America Shield Logo from Icons8" />
                        <p className="navbar-text">Edit A Character</p>
                    </a>
                </div>
                <div className="navbar-link-container">
                    <a href="/delete">
                        <img className="navbar-icon" src={spidermanMask} alt="Marvel Spiderman Mask Logo from Icons8" />
                        <p className="navbar-text">Delete A Character</p>
                    </a>
                </div>
            </nav>
        </>
    )
}

export default NavBar;

