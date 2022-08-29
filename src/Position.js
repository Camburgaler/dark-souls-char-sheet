import { 
    Button, 
    FormControl, 
    FormHelperText, 
    Grid, 
    TextField, 
    Typography 
} from "@mui/material";
import React from "react";
import { Item } from "./styles";

function Position(props) {

    const [positionChange, setPositionChange] = React.useState(0);
    const handlePositionChangeUpdate = (event) => {
        setPositionChange(event.target.value);
    }
    const handleClick = (event) => {
        let newPosition = props.character.position.current;
        let positionChangeNumber = Number.parseInt(positionChange);
        if (event.target.name === "heal") {
            if (props.character.position.current + positionChangeNumber > props.character.combatPool) {
                newPosition = props.character.position.combatPool;
            } else {
                newPosition += positionChangeNumber;
            }
        } else if (event.target.name === "damage") {
            if (props.character.position.current - positionChangeNumber < 0) {
                newPosition = 0;
            } else {
                newPosition -= positionChangeNumber;
            }
        }

        props.setCharacter({
            ...props.character,
            position: {
                ...props.character.position,
                current: newPosition
            }
        })
        console.log(props.character);
    }

    return (
        <Grid container direction="column" sx={{ border: "1px solid black" }}>
            <Grid container direction="row">
                <Grid item xs={6}>
                    <Item>
                        <Typography>Base Position: {props.character.position.base}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <Typography>Combat Position Pool: {props.character.position.combatPool}</Typography>
                    </Item>
                </Grid>
            </Grid>
            <Grid container direction="row">
                <Grid item xs={4}>
                    <Item>
                        <FormControl>
                            <Typography name="currentPosition">{props.character.position.current}</Typography>
                            <FormHelperText>Current Position</FormHelperText>
                        </FormControl>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                        <Button name="heal" onClick={handleClick}>Heal</Button>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                        <Button name="damage" onClick={handleClick}>Damage</Button>
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <TextField type="number" defaultValue={positionChange} onChange={handlePositionChangeUpdate} fullWidth margin="dense" variant="standard" />
                    </Item>
                </Grid>
            </Grid>
            <Item sx={{ maxHeight: "15px" }}>
                <Typography sx={{ fontSize: 15 }}>Position</Typography>
            </Item>
        </Grid>
    )};

export default Position;