import { SportsEsportsSharp } from "@material-ui/icons";
import {
    Box,
    Container,
    Grid,
    Switch,
    TextField,
    Typography,
}
    from "@mui/material";
import { Item } from "./styles";

function SavingThrows(props) {

    const calcSavingThrow = (proficiency, mod) => {
        return (
            proficiency ?
                (
                    mod + props.character.proficiencyBonus >= 0 ?
                        "+" + mod + props.character.proficiencyBonus :
                        mod + props.character.proficiencyBonus
                ) : (
                    mod >= 0 ?
                        "+" + mod :
                        mod
                )
        )
    }

    return (
        <>
            <Grid container direction={"column"}>
                {Object.entries(props.character.savingThrows).map((savingThrow) => {
                    return (
                        <Item key={savingThrow[0]} sx={{ maxHeight: "15px" }}>
                            <Grid container direction={"row"}>
                                <Grid item xs={4}>
                                    <Switch sx={{ marginY: -1 }} checked={props.character.proficiencies[savingThrow[0] + "SavingThrow"]} />
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography sx={{ fontSize: 15, borderBottom: "1px solid rgba(0, 0, 0, 0.42)" }}>{calcSavingThrow(props.character.proficiencies[savingThrow[0] + "SavingThrow"], props.character.abilities[savingThrow[0] + "Mod"])}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography sx={{ fontSize: 15 }}>{props.character.abilitiesNames[savingThrow[0]]}</Typography>
                                </Grid>
                            </Grid>
                        </Item>
                    )
                })}
            </Grid>
        </>
    );
}

export default SavingThrows;