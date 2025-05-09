import { useState } from "react";
import "../css/CharacterDatabase.css";
import CharacterCard from "./CharacterCard";
import { Pagination } from "react-bootstrap";

// let heroes = [{id: 11, name: "Black Panther", alias: "King T'challa", alignment: "hero", powers: "vibranium equipment", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/FanimeCon_2018_347_%2840640219200%29.jpg/500px-FanimeCon_2018_347_%2840640219200%29.jpg"}];

function CharacterDatabase (props) {
    const { characterDatabase } = props;
    const [ currentPage, setCurrentPage ] = useState(1);

    const CARDS_PER_PAGE = 3;

    // Slice the data array into sets of 3 for pagination
    const totalPages = Math.ceil(characterDatabase.length/CARDS_PER_PAGE);
    const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
    const visibleCharacters = characterDatabase.slice(startIndex, startIndex + CARDS_PER_PAGE);

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
                    {visibleCharacters && visibleCharacters.map((character) => (
                        <div key={character.id} className="char-card">
                            <CharacterCard characterInfo={character} />
                        </div>
                    ))}
                </div>
            </div>

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
        </>
    )
}

export default CharacterDatabase;

CharacterDatabase.propTypes = {
    characterDatabase: Array,
}
