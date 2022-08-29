import { FormControl, Grid, TextField } from "@mui/material";
import { Item } from "./styles";

function CombatStats(props) {

    const calcInitiative = () => {
        return(
            props.character.abilities.dexMod >= 0 ?
            "+" + props.character.abilities.dexMod :
            props.character.abilities.dexMod
        )
    }

    return (
        <Grid container direction="row" sx={{ border: "1px solid black" }}>
            <Grid item xs={4}>
                <Item>
                    <TextField name="armorClass" helperText={"Armor Class"} value={props.character.armorClass} fullWidth margin="dense" variant="standard" />
                </Item>
            </Grid>
            <Grid item xs={4}>
                <Item>
                    <TextField name="initiative" helperText={"Initiative"} value={calcInitiative()} fullWidth margin="dense" variant="standard" />
                </Item>
            </Grid>
            <Grid item xs={4}>
                <Item>
                    <TextField name="speed" helperText={"Speed"} value={props.character.speed} fullWidth margin="dense" type="number" variant="standard" />
                </Item>
            </Grid>
        </Grid>
    )
};

export default CombatStats;