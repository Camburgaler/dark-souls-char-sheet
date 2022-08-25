import React from 'react';
import {
  Grid,
  TextField,
}
from "@mui/material";
import { Item } from './styles';

function AbilityScores(props) {

  return (
    <>
      <Grid container direction="column" sx={{ border: "1px solid black" }}>
        <Item>
          <TextField name="str" label="STR" helperText={props.character.abilities.strMod >= 0 ? "+" + props.character.abilities.strMod : props.character.abilities.strMod} value={props.character.abilities.strScore} fullWidth margin="dense" type="number" variant="standard" />
          <TextField name="dex" label="DEX" helperText={props.character.abilities.dexMod >= 0 ? "+" + props.character.abilities.dexMod : props.character.abilities.dexMod} value={props.character.abilities.dexScore} fullWidth margin="dense" type="number" variant="standard" />
          <TextField name="con" label="CON" helperText={props.character.abilities.conMod >= 0 ? "+" + props.character.abilities.conMod : props.character.abilities.conMod} value={props.character.abilities.conScore} fullWidth margin="dense" type="number" variant="standard" />
          <TextField name="int" label="INT" helperText={props.character.abilities.intMod >= 0 ? "+" + props.character.abilities.intMod : props.character.abilities.intMod} value={props.character.abilities.intScore} fullWidth margin="dense" type="number" variant="standard" />
          <TextField name="wis" label="WIS" helperText={props.character.abilities.wisMod >= 0 ? "+" + props.character.abilities.wisMod : props.character.abilities.wisMod} value={props.character.abilities.wisScore} fullWidth margin="dense" type="number" variant="standard" />
          <TextField name="cha" label="CHA" helperText={props.character.abilities.chaMod >= 0 ? "+" + props.character.abilities.chaMod : props.character.abilities.chaMod} value={props.character.abilities.chaScore} fullWidth margin="dense" type="number" variant="standard" />
        </Item>
      </Grid>
    </>
  );
}

export default AbilityScores;