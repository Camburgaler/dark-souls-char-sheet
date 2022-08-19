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

function AbilityScores() {
  const [abilityScores, setAbilityScores] = React.useState(DEFAULT_SCORES);
  const [helperText, setHelperText] = React.useState(DEFAULT_MODIFIERS);
  const handleScoreChange = (event) => {
    const ability = event.target.labels[0].innerText;
    const score = event.target.value;
    setAbilityScores({
      ...abilityScores,
      [ability]: score,
    });
    const modifier = Math.floor((score - 10) / 2);
    setHelperText({
      ...helperText,
      [ability]: modifier>=0 ? "+" + modifier : modifier
    });
  };
  return (
    <>
      <Grid container direction="column">
        <Item>
          <TextField label="STR" helperText={helperText.STR} defaultValue={abilityScores.STR} fullWidth margin="dense" type="number" variant="standard" onChange={handleScoreChange} />
          <TextField label="DEX" helperText={helperText.DEX} defaultValue={abilityScores.DEX} fullWidth margin="dense" type="number" variant="standard" onChange={handleScoreChange} />
          <TextField label="CON" helperText={helperText.CON} defaultValue={abilityScores.CON} fullWidth margin="dense" type="number" variant="standard" onChange={handleScoreChange} />
          <TextField label="INT" helperText={helperText.INT} defaultValue={abilityScores.INT} fullWidth margin="dense" type="number" variant="standard" onChange={handleScoreChange} />
          <TextField label="WIS" helperText={helperText.WIS} defaultValue={abilityScores.WIS} fullWidth margin="dense" type="number" variant="standard" onChange={handleScoreChange} />
          <TextField label="CHA" helperText={helperText.CHA} defaultValue={abilityScores.CHA} fullWidth margin="dense" type="number" variant="standard" onChange={handleScoreChange} />
        </Item>
      </Grid>
    </>
  );
}

export default AbilityScores;