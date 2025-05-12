import "../css/NavBar.css";
import bpMask from "../assets/i8-bp-mask-white.png";
import capLogo from "../assets/i8-captain-america-white.png";
import marvelLogo from "../assets/marvel-character-logo.png";
import xmenLogo from "../assets/i8-x-men-white.png";
import spidermanMask from "../assets/i8-spiderman-white.png";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand d-none d-lg-block" href="/">
                    <img id="navbar-main-image" src={marvelLogo} alt="Marvel Character Inset Logo from Icons8" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item d-none d-md-flex align-items-center">
                            <img src={bpMask} alt="Black Panther Mask" className="nav-icon" />
                            <a className="nav-link" href="/database">
                                Character Database
                            </a>
                        </li>
                        <li className="nav-item d-none d-md-flex align-items-center">
                            <img src={capLogo} alt="Captain America Logo" className="nav-icon" />
                            <a className="nav-link" href="/add">
                                Add A Character
                            </a>
                        </li>
                        <li className="nav-item d-none d-md-flex align-items-center">
                            <img src={xmenLogo} alt="X-Men Logo" className="nav-icon" />
                            <a className="nav-link" href="/edit">
                                Edit A Character
                            </a>
                        </li>
                        <li className="nav-item d-none d-md-flex align-items-center">
                            <img src={spidermanMask} alt="Spiderman Mask" className="nav-icon" />
                            <a className="nav-link" href="/delete">
                                Delete A Character
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
