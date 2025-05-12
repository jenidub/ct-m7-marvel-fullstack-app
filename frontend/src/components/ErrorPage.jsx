import { Link } from 'react-router-dom';
import '../css/ErrorPage.css';

const ErrorPage = () => {
    return (
        <div className="error-page">
            <div className="error-text-container">
                <h2 className='error-text'>Oops! The page you&apos;re looking for doesn&apos;t exist</h2>
            </div>
            <div className='error-link-container'>
                <Link to="/" className="home-link">
                    Click Here to Return to the Home Page
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
