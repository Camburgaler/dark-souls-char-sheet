import React from 'react';
import {
  Grid,
  TextField
}
from "@mui/material";
import { Item } from './styles';
import { 
  DEFAULT_MODIFIERS,
  DEFAULT_SCORES
}
from './constants';
import { characterContext } from './characterContext';

function AbilityScores() {
  const [abilityScores, setAbilityScores] = React.useState(DEFAULT_SCORES);
  const [helperText, setHelperText] = React.useState(DEFAULT_MODIFIERS);
  const handleScoreChange = (event) => {
    const ability = event.target.name;
    const score = event.target.value;
    setAbilityScores({
      ...abilityScores,
      [ability + "Score"]: score,
    });
    const modifier = Math.floor((score - 10) / 2);
    setHelperText({
      ...helperText,
      [ability + "Mod"]: modifier>=0 ? "+" + modifier : modifier
    });
    characterContext._currentValue[ability + "Score"] = score;
    characterContext._currentValue[ability + "Mod"] = Math.floor((score - 10) / 2);
    console.log(characterContext);
    };
  return (
    <>
      <Grid container direction="column">
        <Item>
          <TextField name="str" helperText={helperText.strMod} defaultValue={abilityScores.strMod} fullWidth margin="dense" type="number" variant="standard" onChange={handleScoreChange} />
          <TextField name="dex" helperText={helperText.dexMod} defaultValue={abilityScores.dexMod} fullWidth margin="dense" type="number" variant="standard" onChange={handleScoreChange} />
          <TextField name="con" helperText={helperText.conMod} defaultValue={abilityScores.conMod} fullWidth margin="dense" type="number" variant="standard" onChange={handleScoreChange} />
          <TextField name="int" helperText={helperText.intMod} defaultValue={abilityScores.intMod} fullWidth margin="dense" type="number" variant="standard" onChange={handleScoreChange} />
          <TextField name="wis" helperText={helperText.wisMod} defaultValue={abilityScores.wisMod} fullWidth margin="dense" type="number" variant="standard" onChange={handleScoreChange} />
          <TextField name="cha" helperText={helperText.chaMod} defaultValue={abilityScores.chaMod} fullWidth margin="dense" type="number" variant="standard" onChange={handleScoreChange} />
        </Item>
      </Grid>
    </>
  );
}

export default AbilityScores;