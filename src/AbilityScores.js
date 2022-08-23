import React from 'react';
import {
  Grid,
  TextField,
}
from "@mui/material";
import { Item } from './styles';

function AbilityScores(props) {

  const [helperTextState, setHelperTextState] = React.useState({
    strMod: props.character.strMod,
    dexMod: props.character.dexMod,
    conMod: props.character.conMod,
    intMod: props.character.intMod,
    wisMod: props.character.wisMod,
    chaMod: props.character.chaMod,
  })
  const handleScoreChange = (event) => {
    const ability = event.target.name;
    const score = event.target.value;
    props.character[ability + "Score"] = score;
    props.character[ability + "Mod"] = Math.floor((score - 10) / 2);
    setHelperTextState({
      ...helperTextState,
      [ability + "Mod"]: props.character[ability + "Mod"] >= 0 ? "+" + props.character[ability + "Mod"] : props.character[ability + "Mod"]
    })
    console.log(props.character);
  };
  return (
    <>
      <Grid container direction="column">
        <Item>
          <TextField name="str" label="STR" helperText={helperTextState.strMod} defaultValue={props.character.strMod} fullWidth margin="dense" type="number" variant="standard" onChange={handleScoreChange} />
          <TextField name="dex" label="DEX" helperText={helperTextState.dexMod} defaultValue={props.character.dexMod} fullWidth margin="dense" type="number" variant="standard" onChange={handleScoreChange} />
          <TextField name="con" label="CON" helperText={helperTextState.conMod} defaultValue={props.character.conMod} fullWidth margin="dense" type="number" variant="standard" onChange={handleScoreChange} />
          <TextField name="int" label="INT" helperText={helperTextState.intMod} defaultValue={props.character.intMod} fullWidth margin="dense" type="number" variant="standard" onChange={handleScoreChange} />
          <TextField name="wis" label="WIS" helperText={helperTextState.wisMod} defaultValue={props.character.wisMod} fullWidth margin="dense" type="number" variant="standard" onChange={handleScoreChange} />
          <TextField name="cha" label="CHA" helperText={helperTextState.chaMod} defaultValue={props.character.chaMod} fullWidth margin="dense" type="number" variant="standard" onChange={handleScoreChange} />
        </Item>
      </Grid>
    </>
  );
}

export default AbilityScores;