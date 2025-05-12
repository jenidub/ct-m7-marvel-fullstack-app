import { useState } from "react";
import "../css/CharacterDatabase.css";
import CharacterCard from "./CharacterCard";
import { Pagination, Container, Row, Col } from "react-bootstrap";

function CharacterDatabase({ characterDatabase }) {
    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const CARDS_PER_PAGE = 3;
    const totalPages = Math.ceil(characterDatabase.length / CARDS_PER_PAGE);
    const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
    const visibleCharacters = characterDatabase.slice(startIndex, startIndex + CARDS_PER_PAGE);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <Container className="my-4">
            <h2 className="text-center mb-4 navigate-text">
                Navigate using the arrows to view our collection:
            </h2>

            <Pagination className="justify-content-center mt-4">
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

            <Row className="g-4 justify-content-center">
                {visibleCharacters.map((character) => (
                    <Col key={character.id} xs={12} lg={4}>
                        <CharacterCard characterInfo={character} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default CharacterDatabase;

CharacterDatabase.propTypes = {
    characterDatabase: Array,
};
