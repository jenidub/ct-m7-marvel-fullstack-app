import "../css/NavBar.css";
import bpMask from "../assets/i8-bp-mask-white.png";
import capLogo from "../assets/i8-captain-america-white.png";
import marvelLogo from "../assets/marvel-character-logo.png";
import xmenLogo from "../assets/i8-x-men-white.png";
import spidermanMask from "../assets/i8-spiderman-white.png";
import thanosGlove from "../assets/i8-thanos-glove.png";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
            <div className="container-fluid navbarContent">
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
                            <a className="nav-link" href="/database">
                                <img src={bpMask} alt="Black Panther Mask" className="nav-icon" />
                            </a>
                            <a className="nav-link" href="/database">
                                Character Database
                            </a>
                        </li>
                        <li className="nav-item d-none d-md-flex align-items-center">
                            <a className="nav-link" href="/view">
                                <img src={thanosGlove} alt="Thanos Glove" className="nav-icon" />
                            </a>
                            <a className="nav-link" href="/view">
                                View Character
                            </a>
                        </li>
                        <li className="nav-item d-none d-md-flex align-items-center">
                            <a className="nav-link" href="/add">
                                <img src={capLogo} alt="Captain America Logo" className="nav-icon" />
                            </a>
                            <a className="nav-link" href="/add">
                                Add Character
                            </a>
                        </li>
                        <li className="nav-item d-none d-md-flex align-items-center">
                            <a className="nav-link" href="/edit">
                                <img src={xmenLogo} alt="X-Men Logo" className="nav-icon" />
                            </a>
                            <a className="nav-link" href="/edit">
                                Edit Character
                            </a>
                        </li>
                        <li className="nav-item d-none d-md-flex align-items-center">
                            <a className="nav-link" href="/delete">
                                <img src={spidermanMask} alt="Spiderman Mask" className="nav-icon" />
                            </a>
                            <a className="nav-link" href="/delete">
                                Delete Character
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
