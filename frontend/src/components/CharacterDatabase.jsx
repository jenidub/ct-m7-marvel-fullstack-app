import { useEffect, useState } from "react";
import "../css/CharacterDatabase.css";
import CharacterCard from "./CharacterCard";
import { Pagination } from "react-bootstrap";

// let heroes = [{id: 11, name: "Black Panther", alias: "King T'challa", alignment: "hero", powers: "vibranium equipment", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/FanimeCon_2018_347_%2840640219200%29.jpg/500px-FanimeCon_2018_347_%2840640219200%29.jpg"}];

function CharacterDatabase () {
    // State management declarations
    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ errorType, setErrorType ] = useState(null);
    const [ currentPage, setCurrentPage ] = useState(1);

    const CARDS_PER_PAGE = 3;

    // Retrieve the superhero data from database
    const DEFAULT_API_URL = "http://127.0.0.1:5000/characters";
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(DEFAULT_API_URL);
                if (!response.ok) {
                    throw new Error(`HTML error! Status code ${response.statusText}`)
                }
                const json = await response.json();
                setData(json);
                setLoading(false);
            } catch (error) {
                setErrorType(error);
                setLoading(false);
                throw new Error(`${errorType}`);
            }
        }

        fetchData();
    }, []);

    // Slice the data array into sets of 3 for pagination
    const totalPages = !loading && Math.ceil(data.length/CARDS_PER_PAGE);
    const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
    const visibleCharacters = !loading && data.slice(startIndex, startIndex + CARDS_PER_PAGE);

    // Handler for the page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // use the API data to 
    return (
        <>
            <h2 className="navigate-text">Navigate using the arrows to view our collection:</h2>
            <div className="content-container">
                <div className="char-card-container">
                    {!loading && visibleCharacters && visibleCharacters.map((character) => (
                        <div key={character.id} className="char-card">
                            <CharacterCard characterInfo={character} />
                        </div>
                    ))}
                </div>
            </div>

            {!loading && (
                <Pagination className="justify-content-center mt-3">
                    <Pagination.Prev
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                    />
                    {[...Array(totalPages)].map((_, index) => (
                        <Pagination.Item
                            key={index + 1}
                            active={index + 1 === currentPage}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                    />
                </Pagination>
            )}
        </>
    )
}

export default CharacterDatabase;
