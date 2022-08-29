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
  JACK_OF_ALL_TRADES_SCORES, 
  PROFICIENCY_SELECTION,
  SKILL_NAMES,
  DEFAULT_PROFICIENCY_SELECTIONS,
  CLASS_PROFICIENCIES,
  BRUTE_BLOODIED_ABILITY,
  FENCER_BLOODIED_ABILITY,
  JACK_OF_ALL_TRADES_BLOODIED_ABILITY,
  CASTER_BLOODIED_ABILITY,
  ABILITY_NAMES
} from './constants';

function App() {
  const [character, setCharacter] = React.useState(DEFAULT_CHARACTER);
  const [proficiencySelectionDialogOpen, setProficiencySelectionDialogOpen] = React.useState(false);
  const [deprivedSavingThrowsDialogOpen, setDeprivedSavingThrowsDialogOpen] = React.useState(false);
  const [proficiencySelections, setProficiencySelections] = React.useState(DEFAULT_PROFICIENCY_SELECTIONS);
  const [deprivedSavingThrows, setDeprivedSavingThrows] = React.useState({
    strSavingThrow: false,
    dexSavingThrow: false,
    conSavingThrow: false,
    intSavingThrow: false,
    wisSavingThrow: false,
    chaSavingThrow: false
  })
  const proficiencySelectionDialogError = Object.values(proficiencySelections).filter((v) => v).length !== PROFICIENCY_SELECTION[character.selectedClass];
  const deprivedSavingThrowDialogError = Object.values(deprivedSavingThrows).filter((v) => v).length !== 2;

  const handleProficiencySelectionDialogClose = () => {
    setProficiencySelectionDialogOpen(false);
  }

  const handleProficiencySelectionClick = (event) => {
    setProficiencySelections({
      ...proficiencySelections,
      [event.target.name]: event.target.checked
    })
  }

  const handleProficiencySelectionSubmit = () => {
    if (proficiencySelectionDialogError) {

    } else {
      setCharacter({
        ...character,
        proficiencies: {
          ...character.proficiencies,
          acrobatics: proficiencySelections.acrobatics,
          animalHandling: proficiencySelections.animalHandling,
          arcana: proficiencySelections.arcana,
          athletics: proficiencySelections.athletics,
          deception: proficiencySelections.deception,
          history: proficiencySelections.history,
          insight: proficiencySelections.insight,
          intimidation: proficiencySelections.intimidation,
          investigation: proficiencySelections.investigation,
          medicine: proficiencySelections.medicine,
          nature: proficiencySelections.nature,
          perception: proficiencySelections.perception,
          performance: proficiencySelections.performance,
          persuasion: proficiencySelections.persuasion,
          religion: proficiencySelections.religion,
          sleightOfHand: proficiencySelections.sleightOfHand,
          stealth: proficiencySelections.stealth,
          survival: proficiencySelections.survival,
        }
      });
      setProficiencySelectionDialogOpen(false);
    }
    console.log(character);
  }

  const handleDeprivedDialogClose = () => {
    setDeprivedSavingThrowsDialogOpen(false);
  }

  const handleDeprivedSavingThrowClick = (event) => {
    setDeprivedSavingThrows({
      ...deprivedSavingThrows,
      [event.target.name]: event.target.checked
    })
  }

  const handleDeprivedSavingThrowSubmit = () => {
    if(deprivedSavingThrowDialogError) {

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
      setDeprivedSavingThrowsDialogOpen(false);
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
            abilities: BRUTE_SCORES,
            bloodiedAbility:BRUTE_BLOODIED_ABILITY,
            posDice: {
              diceType: 10,
              total: character.level,
              current: character.level,
            },
          });
          break;
        case "Fencer":
          setCharacter({
            ...character,
            abilities: FENCER_SCORES,
            bloodiedAbility: FENCER_BLOODIED_ABILITY,
            posDice: {
              diceType: 8,
              total: character.level,
              current: character.level,
            }
          });
          break;
        case "Jack of All Trades":
          setCharacter({
            ...character,
            abilities: JACK_OF_ALL_TRADES_SCORES,
            bloodiedAbility: JACK_OF_ALL_TRADES_BLOODIED_ABILITY,
            posDice: {
              diceType: 8,
              total: character.level,
              current: character.level,
            }
          });
          break;
        case "Caster":
          setCharacter({
            ...character,
            abilities: CASTER_SCORES,
            bloodiedAbility: CASTER_BLOODIED_ABILITY,
            posDice: {
              diceType: 6,
              total: character.level,
              current: character.level,
            }
          });
          break;
        default:
          break;
      }
      setCharacter({
        ...character,
        position: {
          base: character.positionDice.diceType + character.abilities.conMod,
          combatPool: character.positionDice.diceType + character.abilities.conMod,
          current: character.positionDice.diceType + character.abilities.conMod
        }
      });
    } else if (name === "selectedClass") {
      setProficiencySelections(DEFAULT_PROFICIENCY_SELECTIONS);
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
            },
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
          setDeprivedSavingThrowsDialogOpen(true);
          break;
        default:
          break;
      }
      setProficiencySelectionDialogOpen(true);
    }

    console.log(character);
  }

  return (
    <>
      <Dialog onClose={handleProficiencySelectionDialogClose} open={proficiencySelectionDialogOpen}>
        <DialogTitle>Select {PROFICIENCY_SELECTION[character.selectedClass]} Proficiencies</DialogTitle>
        <FormControl
          required
          error={proficiencySelectionDialogError}
          component={"fieldset"}
        >
          <FormGroup>
            {(CLASS_PROFICIENCIES[character.selectedClass]).map((proficiency) => {
              return(<FormControlLabel
                key={proficiency}
                control={
                  <Checkbox checked={proficiencySelections.proficiency} onClick={handleProficiencySelectionClick} name={proficiency} />
                }
                label={SKILL_NAMES[proficiency]}
              />)
            })}
          </FormGroup>
        </FormControl>
        <DialogActions>
          <Button fullWidth onClick={handleProficiencySelectionSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>

      <Dialog onClose={handleDeprivedDialogClose} open={deprivedSavingThrowsDialogOpen}>
        <DialogTitle>Select Two Saving Throws</DialogTitle>
        <FormControl
          required
          error={deprivedSavingThrowDialogError}
          component="fieldset"
        >
          <FormGroup>
            {Object.entries(ABILITY_NAMES).map((ability) => {
              return(<FormControlLabel
                key={ability[0]}
                control={
                  <Checkbox checked={deprivedSavingThrows[ability[0]]} onClick={handleDeprivedSavingThrowClick} name={"deprived" + ability[1].substr(0, 3) + "SavingThrow"} />
                }
                label={ability[1]}
              />)
            })}
          </FormGroup>
        </FormControl>
        <DialogActions>
          <Button fullWidth onClick={handleDeprivedSavingThrowSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>

      <Grid container direction="row">
        <BasicInformation character={character} onChange={handleChange} setCharacter={setCharacter} />
      </Grid>

      <Grid container direction="row">
        <Grid item xs={4} minHeight="100%">
          <LeftColumn character={character} onChange={handleChange} />
        </Grid>
        <Grid item xs={4}>
          <MiddleColumn character={character} onChange={handleChange} setCharacter={setCharacter} />
        </Grid>
        <Grid item xs={4}>
          <RightColumn character={character} onChange={handleChange} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
