import { Box, Grid } from "@mui/material";
import ScoreDisplay from "./ScoreDisplay";

function AbilityScores(props) {
    const originData = require("../../../data/origin.json");
    const abilities = originData.find((origin) => {
        return origin.name === props.character.origin;
    }).ability_scores;
    const abilityNames = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];
    return (
        <Box>
            <Grid container>
                {abilities.map((ability, index) => {
                    return (
                        <Grid item xs={2} key={index}>
                            <ScoreDisplay
                                ability={ability}
                                abilityName={abilityNames[index]}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}

export default AbilityScores;
