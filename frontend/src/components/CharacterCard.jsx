import "../css/CharacterCard.css";
import { Table } from "react-bootstrap";
import { Card } from "react-bootstrap";

function CharacterCard({ characterInfo }) {
    let powersList = characterInfo.powers.split(",");
    console.log(`${characterInfo.name}'s power list: ${powersList}`);
    let numberOfRows = Math.ceil(powersList.length/2);
    console.log("rows needed: " + numberOfRows);

    function createPowersList() {
        // Clean up powersList - remove the word 'and' and titleCase prior to table generation

        return (
            <Table className="character-powers hero char-text-spacing " bordered>
                <tbody className="hero">
                    {powersList.reduce((rows, item, index) => {
                        if (index % 2 === 0) {
                        rows.push([item]);
                        } else {
                        rows[rows.length - 1].push(item);
                        }
                        return rows;
                    }, []).map((row, index) => (
                        <tr key={index}>
                            {row.map((item, index) => (
                                <td key={index}>{item}</td>
                            ))}
                            {row.length === 1 && <td></td>}
                        </tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }

    return (
        <>
            <Card className="character-card hero">
                <Card.Img className="character-img" variant="top" src={characterInfo.image_url} />
                <Card.Body className="character-content hero">
                    <Card.Title className="character-name hero char-text-spacing">{characterInfo.name}</Card.Title>
                    <Card.Header className="character-affil hero char-text-spacing">Affiliation: {characterInfo.alignment}</Card.Header>
                    {createPowersList()}
                </Card.Body>
            </Card>
        </>
    )
}

export default CharacterCard;

CharacterCard.propTypes = {
    characterInfo: Object,
}
