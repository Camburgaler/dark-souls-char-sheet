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
    setCharacter({
      ...character,
      [name]: value
    });

    if (name === "origin") {
      switch (value) {
        case "Brute":
          Object.entries(BRUTE_SCORES).forEach(([key, value]) => {
            setCharacter({
              ...character,
              [key]: value
            });
          });
          break;
        case "Fencer":
          Object.entries(FENCER_SCORES).forEach(([key, value]) => {
            setCharacter({
              ...character,
              [key]: value
            });
          });
          break;
        case "Jack of All Trades":
          Object.entries(JACK_OF_ALL_TRADES_SCORES).forEach(([key, value]) => {
            setCharacter({
              ...character,
              [key]: value
            });
          });
          break;
        case "Caster":
          Object.entries(CASTER_SCORES).forEach(([key, value]) => {
            setCharacter({
              ...character,
              [key]: value
            });
          });
          break;
        default:
          break;
      }
    }

    console.log(event);
    console.log(character);
  }

  return (
    <>
      <Grid container direction="row">
        <BasicInformation character={character} changeHandler={handleChange} setCharacter={setCharacter} />
      </Grid>

      <Grid container direction="row">
        <Grid item xs={4} minHeight="100%">
          <LeftColumn character={character} />
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
