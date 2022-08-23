import React from 'react';
import {
  Grid,
}
from "@mui/material";
import './App.css';
import BasicInformation from './BasicInformation';
import LeftColumn from './LeftColumn';
import MiddleColumn from './MiddleColumn';
import RightColumn from './RightColumn';
import { 
  BRUTE_SCORES, 
  CASTER_SCORES, 
  DEFAULT_CHARACTER, 
  FENCER_SCORES, 
  JACK_OF_ALL_TRADES_SCORES 
} from './constants';

function App() {
  const [character, setCharacter] = React.useState(DEFAULT_CHARACTER);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    character[name] = value;
    if (name === "origin") {
      switch (value) {
        case "Brute":
          setCharacter({
            ...character,
            abilities: BRUTE_SCORES
          });
          break;
        case "Fencer":
          setCharacter({
            ...character,
            abilities: FENCER_SCORES
          });
          break;
        case "Jack of All Trades":
          setCharacter({
            ...character,
            abilities: JACK_OF_ALL_TRADES_SCORES
          });
          break;
        case "Caster":
          setCharacter({
            ...character,
            abilities: CASTER_SCORES
          });
          break;
        default:
          break;
      }
    }
    console.log(character);
  }

  return (
    <>
      <Grid container direction="row">
        <BasicInformation character={character} onChange={handleChange} />
      </Grid>

      <Grid container direction="row">
        <Grid item xs={4} minHeight="100%">
          <LeftColumn character={character} onChange={handleChange} />
        </Grid>
        <Grid item xs={4}>
          <MiddleColumn character={character}/>
        </Grid>
        <Grid item xs={4}>
          <RightColumn character={character}/>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
