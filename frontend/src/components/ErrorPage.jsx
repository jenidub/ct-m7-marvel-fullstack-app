import { Link } from 'react-router-dom';
// import './ErrorPage.css'; // Optional: Add custom styling

const ErrorPage = () => {
    return (
        <div className="error-page">
            <p>Oops! The page you&apos;re looking for doesn&apos;t exist</p>
            <Link to="/" className="home-link">
                Click Here to Return to the Home Page
            </Link>
        </div>
    );
};

export default ErrorPage;
