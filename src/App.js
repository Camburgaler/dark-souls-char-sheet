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
  TextField,
  Typography,
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
  });
  const [combatPositionDialogOpen, setCombatPositionDialogOpen] = React.useState(false);
  const [combatPositionText, setCombatPositionText] = React.useState(0);
  const proficiencySelectionDialogError = Object.values(proficiencySelections).filter((v) => v).length !== PROFICIENCY_SELECTION[character.selectedClass];
  const deprivedSavingThrowDialogError = Object.values(deprivedSavingThrows).filter((v) => v).length !== 2;

  // React.useEffect(() => {console.log("State changed.")});

  const handleProficiencySelectionDialogClose = () => {
    setProficiencySelectionDialogOpen(false);
  }

  const handleCombatPositionDialogClose = () => {
    setCombatPositionDialogOpen(false);
  }

  const handleDeprivedDialogClose = () => {
    setDeprivedSavingThrowsDialogOpen(false);
  }

  const handleProficiencySelectionClick = (event) => {
    setProficiencySelections({
      ...proficiencySelections,
      [event.target.name]: event.target.checked
    })
  }

  const handleDeprivedSavingThrowClick = (event) => {
    setDeprivedSavingThrows({
      ...deprivedSavingThrows,
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

  const handleCombatPositionSubmitButtonClick = () => {
    if(combatPositionText < character.level || combatPositionText > character.level * character.positionDice.diceType) {
      //do nothing
    } else {
      setCharacter({
        ...character,
        position: {
          ...character.position,
          combatPool: character.position.base + combatPositionText,
          current: character.position.current + combatPositionText
        }
      });
      setCombatPositionDialogOpen(false);
    }
  }

  const handleCombatPositionAutoRollButtonClick = () => {
    const max = character.level * character.positionDice.diceType;
    const min = character.level;
    const combatPosition = Math.floor(Math.random() * (max - min)) + min;
    setCharacter({
      ...character,
      position: {
        ...character.position,
        combatPool: character.position.base + combatPosition,
        current: character.position.current + combatPosition
      }
    });

    setCombatPositionDialogOpen(false);
  }

  const handleCombatPositionTextChange = (event) => {
    setCombatPositionText(Number.parseInt(event.target.value));
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "origin") {
      character[name] = value;
      switch (value) {
        case "Brute":
          character.abilities = BRUTE_SCORES;
          character.bloodiedAbility = BRUTE_BLOODIED_ABILITY;
          character.positionDice.diceType = 10;
          character.positionDice.total = character.level;
          character.positionDice.current = character.level;
          break;
        case "Fencer":
          character.abilities = FENCER_SCORES;
          character.bloodiedAbility = FENCER_BLOODIED_ABILITY;
          character.positionDice.diceType = 8;
          character.positionDice.total = character.level;
          character.positionDice.current = character.level;
          break;
        case "Jack of All Trades":
          character.abilities = JACK_OF_ALL_TRADES_SCORES;
          character.bloodiedAbility = JACK_OF_ALL_TRADES_BLOODIED_ABILITY;
          character.positionDice.diceType = 8;
          character.positionDice.total = character.level;
          character.positionDice.current = character.level;
          break;
        case "Caster":
          character.abilities = CASTER_SCORES;
          character.bloodiedAbility = CASTER_BLOODIED_ABILITY;
          character.positionDice.diceType = 6;
          character.positionDice.total = character.level;
          character.positionDice.current = character.level;
          break;
        default:
          break;
      }
      character.position.base = character.positionDice.diceType + character.abilities.conMod + character.level;
      character.position.combatPool = character.positionDice.diceType + character.abilities.conMod + character.level;
      character.position.current = character.positionDice.diceType + character.abilities.conMod + character.level;
    } else if (name === "selectedClass") {
      character[name] = value;
      setProficiencySelections(DEFAULT_PROFICIENCY_SELECTIONS);
      switch (value) {
        case "Knight":
          character.proficiencies.strSavingThrow = true;
          character.proficiencies.dexSavingThrow = false;
          character.proficiencies.conSavingThrow = true;
          character.proficiencies.intSavingThrow = false;
          character.proficiencies.wisSavingThrow = false;
          character.proficiencies.chaSavingThrow = false;
          break;
        case "Mercenary":
          character.proficiencies.strSavingThrow = true;
          character.proficiencies.dexSavingThrow = true;
          character.proficiencies.conSavingThrow = false;
          character.proficiencies.intSavingThrow = false;
          character.proficiencies.wisSavingThrow = false;
          character.proficiencies.chaSavingThrow = false;
          break;
        case "Assassin":
          character.proficiencies.strSavingThrow = true;
          character.proficiencies.dexSavingThrow = true;
          character.proficiencies.conSavingThrow = false;
          character.proficiencies.intSavingThrow = false;
          character.proficiencies.wisSavingThrow = false;
          character.proficiencies.chaSavingThrow = false;
          break;
        case "Warrior":
          character.proficiencies.strSavingThrow = true;
          character.proficiencies.dexSavingThrow = false;
          character.proficiencies.conSavingThrow = true;
          character.proficiencies.intSavingThrow = false;
          character.proficiencies.wisSavingThrow = false;
          character.proficiencies.chaSavingThrow = false;
          break;
        case "Thief":
          character.proficiencies.strSavingThrow = false;
          character.proficiencies.dexSavingThrow = true;
          character.proficiencies.conSavingThrow = false;
          character.proficiencies.intSavingThrow = true;
          character.proficiencies.wisSavingThrow = false;
          character.proficiencies.chaSavingThrow = false;
          break;
        case "Herald":
          character.proficiencies.strSavingThrow = false;
          character.proficiencies.dexSavingThrow = false;
          character.proficiencies.conSavingThrow = false;
          character.proficiencies.intSavingThrow = false;
          character.proficiencies.wisSavingThrow = true;
          character.proficiencies.chaSavingThrow = true;
          break;
        case "Cleric":
          character.proficiencies.strSavingThrow = false;
          character.proficiencies.dexSavingThrow = false;
          character.proficiencies.conSavingThrow = false;
          character.proficiencies.intSavingThrow = false;
          character.proficiencies.wisSavingThrow = true;
          character.proficiencies.chaSavingThrow = true;
          break;
        case "Sorcerer":
          character.proficiencies.strSavingThrow = false;
          character.proficiencies.dexSavingThrow = false;
          character.proficiencies.conSavingThrow = false;
          character.proficiencies.intSavingThrow = true;
          character.proficiencies.wisSavingThrow = true;
          character.proficiencies.chaSavingThrow = false;
          break;
        case "Pyromancer":
          character.proficiencies.strSavingThrow = false;
          character.proficiencies.dexSavingThrow = false;
          character.proficiencies.conSavingThrow = true;
          character.proficiencies.intSavingThrow = false;
          character.proficiencies.wisSavingThrow = false;
          character.proficiencies.chaSavingThrow = true;
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
    } else if (name === "enterCombat") {
      character.inCombat = true;
      setCombatPositionDialogOpen(true);
    } else if (name === "exitCombat") {
      let diff = character.position.combatPool - character.position.base;
      character.inCombat = false;
      character.position.combatPool = character.position.base;
      if (character.position.current <= character.position.base) {
        //do nothing
      } else {
        character.position.current = character.position.base;
      }
    }

    setCharacter({
      ...character,
      stateChange: !character.stateChange
    });
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

      <Dialog open={combatPositionDialogOpen} onClose={handleCombatPositionDialogClose}>
        <DialogTitle>Roll for Combat Position Pool!</DialogTitle>
        <Grid container direction="column">
          <Grid item xs={12}>
            <Typography>Roll {character.level}d{character.positionDice.diceType} position dice and enter the result below.</Typography>
          </Grid>
          <Grid container direction="row">
            <Grid item xs={9}>
              <TextField fullWidth name="combatPositionInput" type="number" onChange={handleCombatPositionTextChange}></TextField>
            </Grid>
            <Grid item xs={3}>
              <Button name="combatPositionSubmitButton" onClick={handleCombatPositionSubmitButtonClick} fullWidth>Submit</Button>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button name="combatPositionAutoRollButton" onClick={handleCombatPositionAutoRollButtonClick} fullWidth>Roll for me!</Button>
          </Grid>
        </Grid>
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
