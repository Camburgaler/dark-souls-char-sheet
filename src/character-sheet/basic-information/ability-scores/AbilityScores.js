import { Box, Grid } from "@mui/material";
import ScoreDisplay from "./ScoreDisplay";

function AbilityScores(props) {
    return (
        <Box>
            <Grid container>
                <Grid item xs={2}>
                    <ScoreDisplay
                        ability={props.character.abilities.strScore}
                        abilityName="STR"
                    />
                </Grid>
                <Grid item xs={2}>
                    <ScoreDisplay
                        ability={props.character.abilities.dexScore}
                        abilityName="DEX"
                    />
                </Grid>
                <Grid item xs={2}>
                    <ScoreDisplay
                        ability={props.character.abilities.conScore}
                        abilityName="CON"
                    />
                </Grid>
                <Grid item xs={2}>
                    <ScoreDisplay
                        ability={props.character.abilities.intScore}
                        abilityName="INT"
                    />
                </Grid>
                <Grid item xs={2}>
                    <ScoreDisplay
                        ability={props.character.abilities.wisScore}
                        abilityName="WIS"
                    />
                </Grid>
                <Grid item xs={2}>
                    <ScoreDisplay
                        ability={props.character.abilities.chaScore}
                        abilityName="CHA"
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

export default AbilityScores;
