import {
    Grid,
    Switch,
    Typography,
}
    from "@mui/material";
import { ABILITY_NAMES } from "./constants";
import { Item } from "./styles";

function SavingThrows(props) {

    const calcSavingThrow = (proficiency, mod) => {
        let skillMod = mod;
        if (proficiency) {
            skillMod += props.character.proficiencyBonus;
        }
        return (
            skillMod >= 0 ?
            "+" + skillMod :
            skillMod
            );
    }

    return (
        <>
            <Grid container direction={"column"} sx={{ border: "1px solid black" }}>
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
                                    <Typography sx={{ fontSize: 15 }}>{ABILITY_NAMES[savingThrow[0]]}</Typography>
                                </Grid>
                            </Grid>
                        </Item>
                    )
                })}
                <Item sx={{ maxHeight: "15px" }}>
                    <Typography sx={{ fontSize: 15 }}>Saving Throws</Typography>
                </Item>
            </Grid>
        </>
    );
}

export default SavingThrows;