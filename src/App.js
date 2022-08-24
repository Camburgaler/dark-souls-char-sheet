import React from 'react';
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
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
  const [deprivedDialogOpen, setDeprivedDialogOpen] = React.useState(false);
  const [deprivedSavingThrows, setDeprivedSavingThrows] = React.useState({
    deprivedStrSavingThrow: false,
    deprivedDexSavingThrow: false,
    deprivedConSavingThrow: false,
    deprivedIntSavingThrow: false,
    deprivedWisSavingThrow: false,
    deprivedChaSavingThrow: false
  })
  const deprivedDialogError = Object.values(deprivedSavingThrows).filter((v) => v).length !== 2;

  const handleDeprivedDialogClose = () => {
    setCharacter({
      ...character,
      proficiencies: {
        ...character.proficiencies,
        strSavingThrow: false,
        dexSavingThrow: false,
        conSavingThrow: false,
        intSavingThrow: false,
        wisSavingThrow: false,
        chaSavingThrow: false
      }
    });
  }

  const handleClick = (event) => {
    setDeprivedSavingThrows({
      ...deprivedSavingThrows,
      [event.target.name]: event.target.checked
    })
  }

  const handleSubmit = () => {
    if(deprivedDialogError) {

    } else {
      setCharacter({
        ...character,
        proficiencies: {
          ...character.proficiencies,
          strSavingThrow: deprivedSavingThrows.deprivedStrSavingThrow,
          dexSavingThrow: deprivedSavingThrows.deprivedDexSavingThrow,
          conSavingThrow: deprivedSavingThrows.deprivedConSavingThrow,
          intSavingThrow: deprivedSavingThrows.deprivedIntSavingThrow,
          wisSavingThrow: deprivedSavingThrows.deprivedWisSavingThrow,
          chaSavingThrow: deprivedSavingThrows.deprivedChaSavingThrow
        }
      });
      setDeprivedDialogOpen(false);
    }
  }

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
    } else if (name === "selectedClass") {
      switch (value) {
        case "Knight":
          setCharacter({
            ...character,
            proficiencies: {
              ...character.proficiencies,
              strSavingThrow: true,
              dexSavingThrow: false,
              conSavingThrow: true,
              intSavingThrow: false,
              wisSavingThrow: false,
              chaSavingThrow: false
            }
          });
          break;
        case "Mercenary":
          setCharacter({
            ...character,
            proficiencies: {
              ...character.proficiencies,
              strSavingThrow: true,
              dexSavingThrow: true,
              conSavingThrow: false,
              intSavingThrow: false,
              wisSavingThrow: false,
              chaSavingThrow: false
            }
          });
          break;
        case "Assassin":
          setCharacter({
            ...character,
            proficiencies: {
              ...character.proficiencies,
              strSavingThrow: true,
              dexSavingThrow: true,
              conSavingThrow: false,
              intSavingThrow: false,
              wisSavingThrow: false,
              chaSavingThrow: false
            }
          });
          break;
        case "Warrior":
          setCharacter({
            ...character,
            proficiencies: {
              ...character.proficiencies,
              strSavingThrow: true,
              dexSavingThrow: false,
              conSavingThrow: true,
              intSavingThrow: false,
              wisSavingThrow: false,
              chaSavingThrow: false
            }
          });
          break;
        case "Thief":
          setCharacter({
            ...character,
            proficiencies: {
              ...character.proficiencies,
              strSavingThrow: false,
              dexSavingThrow: true,
              conSavingThrow: false,
              intSavingThrow: true,
              wisSavingThrow: false,
              chaSavingThrow: false
            }
          });
          break;
        case "Herald":
          setCharacter({
            ...character,
            proficiencies: {
              ...character.proficiencies,
              strSavingThrow: false,
              dexSavingThrow: false,
              conSavingThrow: false,
              intSavingThrow: false,
              wisSavingThrow: true,
              chaSavingThrow: true
            }
          });
          break;
        case "Cleric":
          setCharacter({
            ...character,
            proficiencies: {
              ...character.proficiencies,
              strSavingThrow: false,
              dexSavingThrow: false,
              conSavingThrow: false,
              intSavingThrow: false,
              wisSavingThrow: true,
              chaSavingThrow: true
            }
          });
          break;
        case "Sorcerer":
          setCharacter({
            ...character,
            proficiencies: {
              ...character.proficiencies,
              strSavingThrow: false,
              dexSavingThrow: false,
              conSavingThrow: false,
              intSavingThrow: true,
              wisSavingThrow: true,
              chaSavingThrow: false
            }
          });
          break;
        case "Pyromancer":
          setCharacter({
            ...character,
            proficiencies: {
              ...character.proficiencies,
              strSavingThrow: false,
              dexSavingThrow: false,
              conSavingThrow: true,
              intSavingThrow: false,
              wisSavingThrow: false,
              chaSavingThrow: true
            }
          });
          break;
        case "Deprived":
          setDeprivedSavingThrows({
            deprivedStrSavingThrow: false,
            deprivedDexSavingThrow: false,
            deprivedConSavingThrow: false,
            deprivedIntSavingThrow: false,
            deprivedWisSavingThrow: false,
            deprivedChaSavingThrow: false
          })
          setDeprivedDialogOpen(true);
          break;
        default:
          break;
      }
    }

    console.log(character);
  }

  return (
    <>
      <Dialog onClose={handleDeprivedDialogClose} open={deprivedDialogOpen}>
        <DialogTitle>Select Two Saving Throws</DialogTitle>
        <FormControl
          required
          error={deprivedDialogError}
          component="fieldset"
        >
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={deprivedSavingThrows.str} onClick={handleClick} name="deprivedStrSavingThrow" />
              }
              label="Strength"
            />
            <FormControlLabel
              control={
                <Checkbox checked={deprivedSavingThrows.dex} onClick={handleClick} name="deprivedDexSavingThrow" />
              }
              label="Dexterity"
            />
            <FormControlLabel
              control={
                <Checkbox checked={deprivedSavingThrows.con} onClick={handleClick} name="deprivedConSavingThrow" />
              }
              label="Constitution"
            />
            <FormControlLabel
              control={
                <Checkbox checked={deprivedSavingThrows.int} onClick={handleClick} name="deprivedIntSavingThrow" />
              }
              label="Intelligence"
            />
            <FormControlLabel
              control={
                <Checkbox checked={deprivedSavingThrows.wis} onClick={handleClick} name="deprivedWisSavingThrow" />
              }
              label="Wisdom"
            />
            <FormControlLabel
              control={
                <Checkbox checked={deprivedSavingThrows.cha} onClick={handleClick} name="deprivedChaSavingThrow" />
              }
              label="Charisma"
            />
          </FormGroup>
        </FormControl>
        <DialogActions>
          <Button fullWidth onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>

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
