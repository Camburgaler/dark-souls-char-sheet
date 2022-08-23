import React from 'react';
import {
  Grid, 
  FormControlLabel, 
  Switch,
  FormControl,
  FormLabel,
  FormHelperText,
  TextField
}
from "@mui/material";
import { Item } from './styles';

function SecondaryInfo(props) {
    return(
        <Grid container direction="row">
            <Grid item xs={4}>
                <Item>
                    <FormControl fullWidth>
                        <Switch defaultChecked={props.character.inspiration} onChange={() => {props.character.inspiration = !props.character.inspiration}} />
                        <FormHelperText>Inspiration</FormHelperText>
                    </FormControl>
                </Item>
            </Grid>
            <Grid item xs={4}>
                <Item>
                    <TextField name="proficiencyBonus" helperText={"Proficiency Bonus"} value={"+" + props.character.proficiencyBonus} fullWidth margin="dense" variant="standard" />
                </Item>
            </Grid>
            <Grid item xs={4}>
                <Item>
                    <TextField name="passivePerception" helperText={"Passive Perception"} value={10 + props.character.abilities.wisMod + props.character.proficiencyBonus} fullWidth margin="dense" type="number" variant="standard" />
                </Item>
            </Grid>
        </Grid>
    );
}

export default SecondaryInfo;