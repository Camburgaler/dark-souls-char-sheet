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
} from "@mui/material";
import React from "react";
import { ABILITY_NAMES, PROFICIENCY_SELECTION } from "./char-sheet-constants";

function Dialogs(props) {
    const [combatPositionText, setCombatPositionText] = React.useState(0);
    const [positionRecoveryText, setPositionRecoveryText] = React.useState(0);
    const proficiencySelectionDialogError =
        Object.values(props.proficiencySelections).filter((v) => v).length !==
        PROFICIENCY_SELECTION[props.character.selectedClass];
    // const deprivedSavingThrowDialogError =
    //     Object.values(props.deprivedSavingThrows).filter((v) => v).length !== 2;

    const handleProficiencySelectionDialogClose = () => {
        props.setProficiencySelectionDialogOpen(false);
    };

    const handleCombatPositionDialogClose = () => {
        props.setCombatPositionDialogOpen(false);
    };

    const handleDeprivedDialogClose = () => {
        props.setDeprivedSavingThrowsDialogOpen(false);
    };

    const handlePositionRecoveryDialogClose = () => {
        props.setPositionRecoveryDialogOpen(false);
    };

    const handleCombatPositionTextChange = (event) => {
        setCombatPositionText(Number.parseInt(event.target.value));
    };

    const handlePositionRecoveryTextChange = (event) => {
        setPositionRecoveryText(Number.parseInt(event.target.value));
    };

    const handleProficiencySelectionClick = (event) => {
        props.setProficiencySelections({
            ...props.proficiencySelections,
            [event.target.name]: event.target.checked,
        });
    };

    const handleDeprivedSavingThrowClick = (event) => {
        props.setDeprivedSavingThrows({
            ...props.deprivedSavingThrows,
            [event.target.name]: event.target.checked,
        });
    };

    const handleProficiencySelectionSubmit = () => {
        if (proficiencySelectionDialogError) {
            //do nothing
        } else {
            props.setCharacter({
                ...props.character,
                proficiencies: {
                    ...props.character.proficiencies,
                    acrobatics: props.proficiencySelections.acrobatics,
                    animalHandling: props.proficiencySelections.animalHandling,
                    arcana: props.proficiencySelections.arcana,
                    athletics: props.proficiencySelections.athletics,
                    deception: props.proficiencySelections.deception,
                    history: props.proficiencySelections.history,
                    insight: props.proficiencySelections.insight,
                    intimidation: props.proficiencySelections.intimidation,
                    investigation: props.proficiencySelections.investigation,
                    medicine: props.proficiencySelections.medicine,
                    nature: props.proficiencySelections.nature,
                    perception: props.proficiencySelections.perception,
                    performance: props.proficiencySelections.performance,
                    persuasion: props.proficiencySelections.persuasion,
                    religion: props.proficiencySelections.religion,
                    sleightOfHand: props.proficiencySelections.sleightOfHand,
                    stealth: props.proficiencySelections.stealth,
                    survival: props.proficiencySelections.survival,
                },
            });
            props.setProficiencySelectionDialogOpen(false);
        }
        console.log(props.character);
    };

    const handleDeprivedSavingThrowSubmit = () => {
        // if (deprivedSavingThrowDialogError) {
        if (false) {
            //do nothing
        } else {
            props.setCharacter({
                ...props.character,
                proficiencies: {
                    ...props.character.proficiencies,
                    strSavingThrow:
                        props.deprivedSavingThrows.deprivedStrSavingThrow,
                    dexSavingThrow:
                        props.deprivedSavingThrows.deprivedDexSavingThrow,
                    conSavingThrow:
                        props.deprivedSavingThrows.deprivedConSavingThrow,
                    intSavingThrow:
                        props.deprivedSavingThrows.deprivedIntSavingThrow,
                    wisSavingThrow:
                        props.deprivedSavingThrows.deprivedWisSavingThrow,
                    chaSavingThrow:
                        props.deprivedSavingThrows.deprivedChaSavingThrow,
                },
            });
            props.setDeprivedSavingThrowsDialogOpen(false);
        }
    };

    const handleCombatPositionSubmitButtonClick = () => {
        if (
            combatPositionText < props.character.level ||
            combatPositionText >
                props.character.level * props.character.positionDice.diceType
        ) {
            //do nothing
        } else {
            props.setCharacter({
                ...props.character,
                position: {
                    ...props.character.position,
                    combatPool:
                        props.character.position.base + combatPositionText,
                    current:
                        props.character.position.current + combatPositionText,
                },
            });
            props.setCombatPositionDialogOpen(false);
        }
    };

    const handlePositionRecoverySubmitButtonClick = () => {
        if (
            positionRecoveryText < 1 ||
            positionRecoveryText > props.character.positionDice.diceType
        ) {
            //do nothing
        } else {
            if (
                props.character.position.current + positionRecoveryText >
                props.character.position.combatPool
            ) {
                props.character.position.current =
                    props.character.position.combatPool;
            } else {
                props.character.position.current =
                    props.character.position.current + positionRecoveryText;
            }

            props.setCharacter({
                ...props.character,
                stateChange: !props.character.stateChange,
            });
            props.setPositionRecoveryDialogOpen(false);
        }
    };

    const handleCombatPositionAutoRollButtonClick = () => {
        const max =
            props.character.level * props.character.positionDice.diceType;
        const min = props.character.level;
        const combatPosition = Math.floor(Math.random() * (max - min)) + min;
        props.setCharacter({
            ...props.character,
            position: {
                ...props.character.position,
                combatPool: props.character.position.base + combatPosition,
                current: props.character.position.current + combatPosition,
            },
        });

        props.setCombatPositionDialogOpen(false);
    };

    const handlePositionRecoveryAutoRollButtonClick = () => {
        const max = props.character.positionDice.diceType;
        const min = 1;
        const positionRecovery = Math.floor(Math.random() * (max - min)) + min;
        if (
            props.character.position.current + positionRecovery >
            props.character.position.combatPool
        ) {
            props.character.position.current =
                props.character.position.combatPool;
        } else {
            props.character.position.current =
                props.character.position.current + positionRecovery;
        }

        props.setCharacter({
            ...props.character,
            stateChange: !props.character.stateChange,
        });
        props.setPositionRecoveryDialogOpen(false);
    };

    return (
        <>
            <Dialog
                onClose={handleProficiencySelectionDialogClose}
                open={props.proficiencySelectionDialogOpen}
            >
                <DialogTitle>
                    Select{" "}
                    {PROFICIENCY_SELECTION[props.character.selectedClass]}{" "}
                    Proficiencies
                </DialogTitle>
                <FormControl
                    required
                    error={proficiencySelectionDialogError}
                    component={"fieldset"}
                >
                    {/* <FormGroup>
                        {CLASS_PROFICIENCIES[props.character.selectedClass].map(
                            (proficiency) => {
                                return (
                                    <FormControlLabel
                                        key={proficiency}
                                        control={
                                            <Checkbox
                                                checked={
                                                    props.proficiencySelections
                                                        .proficiency
                                                }
                                                onClick={
                                                    handleProficiencySelectionClick
                                                }
                                                name={proficiency}
                                            />
                                        }
                                        label={SKILL_NAMES[proficiency]}
                                    />
                                );
                            }
                        )}
                    </FormGroup> */}
                </FormControl>
                <DialogActions>
                    <Button
                        fullWidth
                        onClick={handleProficiencySelectionSubmit}
                    >
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                onClose={handleDeprivedDialogClose}
                open={props.deprivedSavingThrowsDialogOpen}
            >
                <DialogTitle>Select Two Saving Throws</DialogTitle>
                <FormControl
                    required
                    // error={deprivedSavingThrowDialogError}
                    component="fieldset"
                >
                    <FormGroup>
                        {Object.entries(ABILITY_NAMES).map((ability) => {
                            return (
                                <FormControlLabel
                                    key={ability[0]}
                                    control={
                                        <Checkbox
                                            // checked={
                                            //     props.deprivedSavingThrows[
                                            //         ability[0]
                                            //     ]
                                            // }
                                            onClick={
                                                handleDeprivedSavingThrowClick
                                            }
                                            name={
                                                "deprived" +
                                                ability[1].substr(0, 3) +
                                                "SavingThrow"
                                            }
                                        />
                                    }
                                    label={ability[1]}
                                />
                            );
                        })}
                    </FormGroup>
                </FormControl>
                <DialogActions>
                    <Button fullWidth onClick={handleDeprivedSavingThrowSubmit}>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={props.combatPositionDialogOpen}
                onClose={handleCombatPositionDialogClose}
            >
                <DialogTitle>Roll for Combat Position Pool!</DialogTitle>
                <Grid container direction="column">
                    <Grid item xs={12}>
                        {/* <Typography>
                            Roll {props.character.level}d
                            {props.character.positionDice.diceType} position
                            dice and enter the result below.
                        </Typography> */}
                    </Grid>
                    <Grid container direction="row">
                        <Grid item xs={9}>
                            <TextField
                                fullWidth
                                name="combatPositionInput"
                                type="number"
                                onChange={handleCombatPositionTextChange}
                            ></TextField>
                        </Grid>
                        <Grid item xs={3}>
                            <Button
                                name="combatPositionSubmitButton"
                                onClick={handleCombatPositionSubmitButtonClick}
                                fullWidth
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            name="combatPositionAutoRollButton"
                            onClick={handleCombatPositionAutoRollButtonClick}
                            fullWidth
                        >
                            Roll for me!
                        </Button>
                    </Grid>
                </Grid>
            </Dialog>

            <Dialog
                open={props.positionRecoveryDialogOpen}
                onClose={handlePositionRecoveryDialogClose}
            >
                <DialogTitle>Roll for Position Recovery</DialogTitle>
                <Grid container direction="column">
                    <Grid item xs={12}>
                        {/* <Typography>
                            Roll 1d{props.character.positionDice.diceType}{" "}
                            position dice and enter the result below.
                        </Typography> */}
                    </Grid>
                    <Grid container direction="row">
                        <Grid item xs={9}>
                            <TextField
                                fullWidth
                                name="positionRecoveryInput"
                                type="number"
                                onChange={handlePositionRecoveryTextChange}
                            ></TextField>
                        </Grid>
                        <Grid item xs={3}>
                            <Button
                                name="positionRecoverySubmitButton"
                                onClick={
                                    handlePositionRecoverySubmitButtonClick
                                }
                                fullWidth
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            name="positionRecoveryAutoRollButton"
                            onClick={handlePositionRecoveryAutoRollButtonClick}
                            fullWidth
                        >
                            Roll for me!
                        </Button>
                    </Grid>
                </Grid>
            </Dialog>
        </>
    );
}

export default Dialogs;
