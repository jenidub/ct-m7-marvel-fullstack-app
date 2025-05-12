import "../css/CharacterCard.css";
import { Card } from "react-bootstrap";

function CharacterCard({ characterInfo }) {
    // console.log(`${characterInfo.name}'s power list: ${characterInfo.powers}`);
    // let numberOfRows = Math.ceil(characterInfo.powers.split(',').length / 2);
    // console.log("rows needed: " + numberOfRows);

    // Create and display powers list as a 2x2 grid
    function formatPowersGrid() {
        // Utility function to title case a string
        const toTitleCase = (str) =>
            str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

        // Clean up powers string: split by ',' or 'and', remove extra spaces, and title case
        const cleanedPowers = characterInfo.powers
            .split(/,|\band\b/i)
            .map(p => toTitleCase(p.trim()))
            .filter(p => p !== '');

        // Split into 2-column rows
        const rows = [];
        for (let i = 0; i < cleanedPowers.length; i += 2) {
            rows.push(cleanedPowers.slice(i, i + 2));
        }

        return (
            <div className="container info-background px-0">
                {rows.map((row, rowIndex) => (
                    <div className="row text-center mb-2" key={rowIndex}>
                        {row.map((power, colIndex) => (
                            <div className="col-6 info-background" key={colIndex}>
                                <div className="card-background p-2 text-fit power-text">
                                    {power}
                                </div>
                            </div>
                        ))}
                        {row.length === 1 && (
                            <div className="col-6 info-background">
                                <div className="card-background p-2 text-fit">
                                    &nbsp;
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="container my-3">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-12">
                    <Card className="character-card hero w-100 mb-4" style={{ margin: 'auto', maxWidth: '100%' }}>
                        <Card.Img
                            className="character-img"
                            variant="top"
                            src={characterInfo.image_url ? characterInfo.image_url : "https://placehold.co/600x400"}
                            alt={`Image of ${characterInfo.name ? characterInfo.name : ""}`}
                        />
                        <Card.Body className="character-content hero">
                            <Card.Title className="character-name hero char-text-spacing">
                                {characterInfo.name ? characterInfo.name : ""}
                            </Card.Title>
                            <Card.Header className="hero character-alias char-text-spacing">
                                Alias: {characterInfo.alias ? characterInfo.alias : ""}
                            </Card.Header>
                            <Card.Header className="character-affil hero char-text-spacing">
                                Alignment: {characterInfo.alignment ? characterInfo.alignment[0].toUpperCase() + characterInfo.alignment.slice(1) : ""}
                            </Card.Header>
                            {characterInfo.powers && formatPowersGrid()}
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default CharacterCard;

CharacterCard.propTypes = {
    characterInfo: Object,
};
