import { TextField } from "@mui/material";

function ScoreDisplay(props) {
    const abilityMod = (props.ability - 10) / 2;
    return (
        <TextField
            name={props.abilityName}
            label={props.abilityName}
            helperText={props.ability}
            value={abilityMod >= 0 ? "+" + abilityMod : abilityMod}
            fullWidth
            margin="dense"
            variant="outlined"
            disabled
        />
    );
}

export default ScoreDisplay;
