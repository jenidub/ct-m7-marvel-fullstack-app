import { Link } from 'react-router-dom';
import '../css/App.css';

const HomePage = () => {
    return (
        <div className="d-flex justify-content-center align-items-start" style={{ height: '100vh' }}>
            <div>
                <h3 className="sub-title text-center">Use the buttons below to navigate our website</h3>
                <div className="row d-flex justify-content-center" style={{ marginTop: '2em' }}>
                    <div className="col-md-6 col-12 mb-3 d-flex justify-content-center">
                        <Link to="/database" className="btn btn-primary w-75">
                            Character Database
                        </Link>
                    </div>
                    <div className="col-md-6 col-12 mb-3 d-flex justify-content-center">
                        <Link to="/add" className="btn btn-primary w-75">
                            Add Character
                        </Link>
                    </div>
                    <div className="col-md-6 col-12 mb-3 d-flex justify-content-center">
                        <Link to="/edit" className="btn btn-primary w-75">
                            Edit Character
                        </Link>
                    </div>
                    <div className="col-md-6 col-12 mb-3 d-flex justify-content-center">
                        <Link to="/delete" className="btn btn-primary w-75">
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
