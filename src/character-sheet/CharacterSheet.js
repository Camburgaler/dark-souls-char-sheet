import { Box, Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import BasicInformation from "./basic-information/BasicInformation";
import {
    DEFAULT_CHARACTER,
    DEFAULT_PROFICIENCY_SELECTIONS,
} from "./char-sheet-constants";
import LeftColumn from "./left-column/LeftColumn";
import MiddleColumn from "./middle-column/MiddleColumn";
import RightColumn from "./right-column/RightColumn";

function CharacterSheet() {
    const params = useParams();
    const characterOverrides = require("../data/characters.json").find(
        (char) => {
            return char.uuid === params.uuid;
        }
    );
    const [character, setCharacter] = React.useState({
        ...DEFAULT_CHARACTER,
        ...characterOverrides,
    });
    console.log(character);
    const [proficiencySelectionDialogOpen, setProficiencySelectionDialogOpen] =
        React.useState(false);
    // const [deprivedSavingThrowsDialogOpen, setDeprivedSavingThrowsDialogOpen] =
    //     React.useState(false);
    const [positionRecoveryDialogOpen, setPositionRecoveryDialogOpen] =
        React.useState(false);
    const [proficiencySelections, setProficiencySelections] = React.useState(
        DEFAULT_PROFICIENCY_SELECTIONS
    );
    // const [deprivedSavingThrows, setDeprivedSavingThrows] = React.useState({
    //     strSavingThrow: false,
    //     dexSavingThrow: false,
    //     conSavingThrow: false,
    //     intSavingThrow: false,
    //     wisSavingThrow: false,
    //     chaSavingThrow: false,
    // });
    const [combatPositionDialogOpen, setCombatPositionDialogOpen] =
        React.useState(false);

    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;

    //     if (name === "origin") {
    //         character[name] = value;
    //         switch (value) {
    //             case "Brute":
    //                 character.abilities = BRUTE_SCORES;
    //                 character.bloodiedAbility = BRUTE_BLOODIED_ABILITY;
    //                 character.positionDice.diceType = 10;
    //                 character.positionDice.total = character.level;
    //                 character.positionDice.current = character.level;
    //                 character.armorClass =
    //                     character.armor.ac +
    //                     character.abilities.dexMod *
    //                         character.armor.addDexModToAC +
    //                     character.shield.ac;
    //                 break;
    //             case "Fencer":
    //                 character.abilities = FENCER_SCORES;
    //                 character.bloodiedAbility = FENCER_BLOODIED_ABILITY;
    //                 character.positionDice.diceType = 8;
    //                 character.positionDice.total = character.level;
    //                 character.positionDice.current = character.level;
    //                 break;
    //             case "Jack of All Trades":
    //                 character.abilities = JACK_OF_ALL_TRADES_SCORES;
    //                 character.bloodiedAbility =
    //                     JACK_OF_ALL_TRADES_BLOODIED_ABILITY;
    //                 character.positionDice.diceType = 8;
    //                 character.positionDice.total = character.level;
    //                 character.positionDice.current = character.level;
    //                 break;
    //             case "Caster":
    //                 character.abilities = CASTER_SCORES;
    //                 character.bloodiedAbility = CASTER_BLOODIED_ABILITY;
    //                 character.positionDice.diceType = 6;
    //                 character.positionDice.total = character.level;
    //                 character.positionDice.current = character.level;
    //                 break;
    //             default:
    //                 break;
    //         }
    //         character.position.base =
    //             character.positionDice.diceType +
    //             character.abilities.conMod +
    //             character.level;
    //         character.position.combatPool =
    //             character.positionDice.diceType +
    //             character.abilities.conMod +
    //             character.level;
    //         character.position.current =
    //             character.positionDice.diceType +
    //             character.abilities.conMod +
    //             character.level;
    //     } else if (name === "selectedClass") {
    //         character[name] = value;
    //         setProficiencySelections(DEFAULT_PROFICIENCY_SELECTIONS);
    //         switch (value) {
    //             case "Knight":
    //                 character.proficiencies.strSavingThrow = true;
    //                 character.proficiencies.dexSavingThrow = false;
    //                 character.proficiencies.conSavingThrow = true;
    //                 character.proficiencies.intSavingThrow = false;
    //                 character.proficiencies.wisSavingThrow = false;
    //                 character.proficiencies.chaSavingThrow = false;
    //                 break;
    //             case "Mercenary":
    //                 character.proficiencies.strSavingThrow = true;
    //                 character.proficiencies.dexSavingThrow = true;
    //                 character.proficiencies.conSavingThrow = false;
    //                 character.proficiencies.intSavingThrow = false;
    //                 character.proficiencies.wisSavingThrow = false;
    //                 character.proficiencies.chaSavingThrow = false;
    //                 break;
    //             case "Assassin":
    //                 character.proficiencies.strSavingThrow = true;
    //                 character.proficiencies.dexSavingThrow = true;
    //                 character.proficiencies.conSavingThrow = false;
    //                 character.proficiencies.intSavingThrow = false;
    //                 character.proficiencies.wisSavingThrow = false;
    //                 character.proficiencies.chaSavingThrow = false;
    //                 break;
    //             case "Warrior":
    //                 character.proficiencies.strSavingThrow = true;
    //                 character.proficiencies.dexSavingThrow = false;
    //                 character.proficiencies.conSavingThrow = true;
    //                 character.proficiencies.intSavingThrow = false;
    //                 character.proficiencies.wisSavingThrow = false;
    //                 character.proficiencies.chaSavingThrow = false;
    //                 break;
    //             case "Thief":
    //                 character.proficiencies.strSavingThrow = false;
    //                 character.proficiencies.dexSavingThrow = true;
    //                 character.proficiencies.conSavingThrow = false;
    //                 character.proficiencies.intSavingThrow = true;
    //                 character.proficiencies.wisSavingThrow = false;
    //                 character.proficiencies.chaSavingThrow = false;
    //                 break;
    //             case "Herald":
    //                 character.proficiencies.strSavingThrow = false;
    //                 character.proficiencies.dexSavingThrow = false;
    //                 character.proficiencies.conSavingThrow = false;
    //                 character.proficiencies.intSavingThrow = false;
    //                 character.proficiencies.wisSavingThrow = true;
    //                 character.proficiencies.chaSavingThrow = true;
    //                 break;
    //             case "Cleric":
    //                 character.proficiencies.strSavingThrow = false;
    //                 character.proficiencies.dexSavingThrow = false;
    //                 character.proficiencies.conSavingThrow = false;
    //                 character.proficiencies.intSavingThrow = false;
    //                 character.proficiencies.wisSavingThrow = true;
    //                 character.proficiencies.chaSavingThrow = true;
    //                 break;
    //             case "Sorcerer":
    //                 character.proficiencies.strSavingThrow = false;
    //                 character.proficiencies.dexSavingThrow = false;
    //                 character.proficiencies.conSavingThrow = false;
    //                 character.proficiencies.intSavingThrow = true;
    //                 character.proficiencies.wisSavingThrow = true;
    //                 character.proficiencies.chaSavingThrow = false;
    //                 break;
    //             case "Pyromancer":
    //                 character.proficiencies.strSavingThrow = false;
    //                 character.proficiencies.dexSavingThrow = false;
    //                 character.proficiencies.conSavingThrow = true;
    //                 character.proficiencies.intSavingThrow = false;
    //                 character.proficiencies.wisSavingThrow = false;
    //                 character.proficiencies.chaSavingThrow = true;
    //                 break;
    //             case "Deprived":
    //                 setDeprivedSavingThrows({
    //                     deprivedStrSavingThrow: false,
    //                     deprivedDexSavingThrow: false,
    //                     deprivedConSavingThrow: false,
    //                     deprivedIntSavingThrow: false,
    //                     deprivedWisSavingThrow: false,
    //                     deprivedChaSavingThrow: false,
    //                 });
    //                 setDeprivedSavingThrowsDialogOpen(true);
    //                 break;
    //             default:
    //                 break;
    //         }
    //         setProficiencySelectionDialogOpen(true);
    //     } else if (name === "enterCombat") {
    //         character.inCombat = true;
    //         setCombatPositionDialogOpen(true);
    //     } else if (name === "exitCombat") {
    //         character.inCombat = false;
    //         character.position.combatPool = character.position.base;
    //         if (character.position.current <= character.position.base) {
    //             //do nothing
    //         } else {
    //             character.position.current = character.position.base;
    //         }
    //     } else if (name === "posDiceUseButton") {
    //         if (
    //             character.positionDice.current < 1 ||
    //             character.position.current === character.position.combatPool
    //         ) {
    //             //do nothing
    //         } else {
    //             character.positionDice.current--;
    //             setPositionRecoveryDialogOpen(true);
    //         }
    //     }

    //     setCharacter({
    //         ...character,
    //         stateChange: !character.stateChange,
    //     });
    //     console.log(character);
    // };

    return (
        <Box>
            {/* <Dialogs
                character={require("../data/characters.json").find((char) => {
                    return char.uuid === params.uuid;
                })}
                setCharacter={setCharacter}
                // onChange={handleChange}
                proficiencySelections={proficiencySelections}
                setProficiencySelections={setProficiencySelections}
                proficiencySelectionDialogOpen={proficiencySelectionDialogOpen}
                setProficiencySelectionDialogOpen={
                    setProficiencySelectionDialogOpen
                }
                // deprivedSavingThrows={deprivedSavingThrows}
                // setDeprivedSavingThrows={setDeprivedSavingThrows}
                deprivedSavingThrowsDialogOpen={false}
                // setDeprivedSavingThrowsDialogOpen={
                //     setDeprivedSavingThrowsDialogOpen
                // }
                combatPositionDialogOpen={combatPositionDialogOpen}
                setCombatPositionDialogOpen={setCombatPositionDialogOpen}
                positionRecoveryDialogOpen={positionRecoveryDialogOpen}
                setPositionRecoveryDialogOpen={setPositionRecoveryDialogOpen}
            /> */}

            <Grid container direction="row">
                <BasicInformation
                    character={character}
                    // onChange={handleChange}
                    setCharacter={setCharacter}
                />
            </Grid>

            <Grid container direction="row">
                <Grid item xs={4} minHeight="100%">
                    <LeftColumn
                        character={character}
                        // onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={4}>
                    <MiddleColumn
                        character={character}
                        // onChange={handleChange}
                        setCharacter={setCharacter}
                    />
                </Grid>
                <Grid item xs={4}>
                    <RightColumn
                        character={character}
                        // onChange={handleChange}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

export default CharacterSheet;
