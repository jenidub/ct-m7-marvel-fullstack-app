import { Link } from 'react-router-dom';
import '../css/App.css';

const HomePage = () => {
    return (
        <div className="d-flex justify-content-center align-items-start" style={{ height: '100vh' }}>
            <div>
                <h3 className="sub-title text-center">Use the buttons below to navigate our website</h3>
                <div className="row d-flex justify-content-center" style={{ marginTop: '2em' }}>
                    <div className="col-md-4 col-12 mb-4 d-flex justify-content-center">
                        <Link to="/database" className="btn w-75 option-button">
                            Character Database
                        </Link>
                    </div>
                    <div className="col-md-4 col-12 mb-4 d-flex justify-content-center">
                        <Link to="/view" className="btn w-75 option-button">
                            View Character
                        </Link>
                    </div>
                    <div className="col-md-4 col-12 mb-4 d-flex justify-content-center">
                        <Link to="/add" className="btn w-75 option-button">
                            Add Character
                        </Link>
                    </div>
                    <div className="col-md-4 col-12 mb-4 d-flex justify-content-center">
                        <Link to="/edit" className="btn w-75 option-button">
                            Edit Character
                        </Link>
                    </div>
                    <div className="col-md-4 col-12 mb-4 d-flex justify-content-center">
                        <Link to="/delete" className="btn w-75 option-button">
                            Delete Character
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;

HomePage.propTypes = {
    characterDatabase: Object,
};
