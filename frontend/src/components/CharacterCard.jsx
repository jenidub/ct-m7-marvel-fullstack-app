import "../css/CharacterCard.css";
import { Table } from "react-bootstrap";
import { Card } from "react-bootstrap";

function CharacterCard() {
    return (
        <>
            <Card className="character-card hero">
                <Card.Img variant="top" src="https://placehold.co/300x200" />
                <Card.Body className="character-content hero">
                    <Card.Title className="character-name hero char-text-spacing">Spider-Man</Card.Title>
                    <Card.Header className="character-affil hero char-text-spacing">Affiliation: Hero</Card.Header>
                    <Table className="character-powers hero char-text-spacing " striped bordered>
                        <tbody className="hero">
                            <tr className="power-row">
                                <td className="power-cell hero">Super Strength</td>
                                <td className="power-cell hero">Agility</td>
                            </tr>
                            <tr className="power-row">
                                <td className="power-cell hero">Spider Sense</td>
                                <td className="power-cell hero">Power #4</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </>
    )
}

export default CharacterCard;
