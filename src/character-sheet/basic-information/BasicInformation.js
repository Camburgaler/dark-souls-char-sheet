import {
    FormControl,
    FormHelperText,
    Grid,
    MenuItem,
    Select,
} from "@mui/material";
import React from "react";
import {
    BACKSTORIES,
    CLASSES,
    DRIVES,
    MEMORIES,
    ORIGINS,
} from "../char-sheet-constants";
import NameDisplay from "./NameDisplay";
import AbilityScores from "./ability-scores/AbilityScores";

/**
 * Renders a form for basic character information.
 *
 * @param {Object} props - The props object containing character data.
 * @return {JSX.Element} A form with fields for character name, class, level, backstory, origin, memory, drive, and player name.
 */
function BasicInformation(props) {
    const [selectedClass, setSelectedClass] = React.useState(
        props.character.class
    );
    const [level, setLevel] = React.useState(props.character.level);
    const [origin, setOrigin] = React.useState(props.character.origin);
    const [backstory, setBackstory] = React.useState(props.character.backstory);
    const [memory, setMemory] = React.useState(props.character.memory);
    const [drive, setDrive] = React.useState(props.character.drive);

    /**
     * Handles the change event for the input fields in the BasicInformation component.
     *
     * @param {Object} event - The event object containing information about the event.
     * @return {void} This function does not return anything.
     */
    const handleChange = (event) => {
        switch (event.target.name) {
            case "level":
                setLevel(event.target.value);
                props.setCharacter({
                    ...props.character,
                    level: event.target.value,
                });
                break;
            case "selectedClass":
                setSelectedClass(event.target.value);
                props.setCharacter({
                    ...props.character,
                    class: event.target.value,
                });
                break;
            case "origin":
                setOrigin(event.target.value);
                props.setCharacter({
                    ...props.character,
                    origin: event.target.value,
                });
                break;
            case "backstory":
                setBackstory(event.target.value);
                props.setCharacter({
                    ...props.character,
                    backstory: event.target.value,
                });
                break;
            case "memory":
                setMemory(event.target.value);
                props.setCharacter({
                    ...props.character,
                    memory: event.target.value,
                });
                break;
            case "drive":
                setDrive(event.target.value);
                props.setCharacter({
                    ...props.character,
                    drive: event.target.value,
                });
                break;
            default:
                console.log("error");
                break;
        }
    };

    /**
     * Renders a form control for selecting a character class.
     *
     * @return {JSX.Element} The rendered form control.
     */
    const CharacterClass = () => {
        return (
            <FormControl fullWidth>
                <Select
                    name="selectedClass"
                    value={selectedClass}
                    disabled={props.character.level > 1}
                    fullWidth
                    onChange={handleChange}
                >
                    {CLASSES.map((story) => {
                        return (
                            <MenuItem
                                // classes={{ root: classes.root }}
                                key={story}
                                value={story}
                                divider
                            >
                                {story}
                            </MenuItem>
                        );
                    })}
                </Select>
                <FormHelperText>Class</FormHelperText>
            </FormControl>
        );
    };

    /**
     * Renders a form control with a select dropdown for the character level. The dropdown is disabled
     * if any of the selectedClass, backstory, memory, or drive values are empty. The onChange event
     * handler updates the level state variable and calls the handleChange function.
     *
     * @return {JSX.Element} A form control containing a select dropdown for the character level.
     */
    const CharacterLevel = () => {
        return (
            <FormControl fullWidth>
                <Select
                    name="level"
                    value={level}
                    disabled={
                        selectedClass === "" ||
                        backstory === "" ||
                        memory === "" ||
                        drive === ""
                    }
                    fullWidth
                    onChange={handleChange}
                >
                    {[...Array(20).keys()].map((level) => {
                        return (
                            <MenuItem
                                // classes={{ root: classes.root }}
                                key={level}
                                value={level + 1}
                                divider
                            >
                                {level + 1}
                            </MenuItem>
                        );
                    })}
                </Select>
                <FormHelperText>Level</FormHelperText>
            </FormControl>
        );
    };

    /**
     * Renders a form control with a select dropdown for the character backstory.
     *
     * @return {JSX.Element} A form control containing a select dropdown for the character backstory.
     */
    const CharacterBackstory = () => {
        return (
            <FormControl fullWidth>
                <Select
                    name="backstory"
                    value={backstory}
                    fullWidth
                    onChange={handleChange}
                    disabled={props.character.level > 1}
                    sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "25vw",
                    }}
                >
                    {BACKSTORIES.map((story) => {
                        return (
                            <MenuItem
                                // classes={{ root: classes.root }}
                                key={story}
                                value={story}
                                divider
                            >
                                {story}
                            </MenuItem>
                        );
                    })}
                </Select>
                <FormHelperText>Backstory</FormHelperText>
            </FormControl>
        );
    };

    /**
     * Renders a form control with a select dropdown for the character origin. The dropdown is disabled
     * if the character's level is greater than 1. The onChange event handler updates the origin state
     * variable and calls the handleChange function.
     *
     * @return {JSX.Element} A form control containing a select dropdown for the character origin.
     */
    const CharacterOrigin = () => {
        return (
            <FormControl fullWidth>
                <Select
                    name="origin"
                    value={origin}
                    fullWidth
                    onChange={handleChange}
                    disabled={props.character.level > 1}
                >
                    {ORIGINS.map((story) => {
                        return (
                            <MenuItem
                                // classes={{ root: classes.root }}
                                key={story}
                                value={story}
                                divider
                            >
                                {story}
                            </MenuItem>
                        );
                    })}
                </Select>
                <FormHelperText>Origin</FormHelperText>
            </FormControl>
        );
    };

    /**
     * Renders a form control with a select dropdown for the character memory.
     *
     * @return {JSX.Element} A form control containing a select dropdown for the character memory.
     */
    const CharacterMemory = () => {
        return (
            <FormControl fullWidth>
                <Select
                    name="memory"
                    value={memory}
                    fullWidth
                    onChange={handleChange}
                    disabled={props.character.level > 1}
                    sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "25vw",
                    }}
                >
                    {MEMORIES.map((story) => {
                        return (
                            <MenuItem
                                // classes={{ root: classes.root }}
                                key={story}
                                value={story}
                                divider
                            >
                                {story}
                            </MenuItem>
                        );
                    })}
                </Select>
                <FormHelperText>Memory</FormHelperText>
            </FormControl>
        );
    };

    /**
     * Renders a form control with a select dropdown for the character drive.
     *
     * @return {JSX.Element} A form control containing a select dropdown for the character drive.
     */
    const CharacterDrive = () => {
        return (
            <FormControl fullWidth>
                <Select
                    name="drive"
                    value={drive}
                    fullWidth
                    onChange={handleChange}
                    disabled={props.character.level > 1}
                    sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "25vw",
                    }}
                >
                    {DRIVES.map((story) => {
                        return (
                            <MenuItem
                                // classes={{ root: classes.root }}
                                key={story}
                                value={story}
                                divider
                            >
                                {story}
                            </MenuItem>
                        );
                    })}
                </Select>
                <FormHelperText>Drive</FormHelperText>
            </FormControl>
        );
    };

    return (
        <Grid container direction="column" id="basicInformationContainer">
            <Grid container direction="row">
                <Grid item xs={3}>
                    <NameDisplay
                        objectName="Character Name"
                        value={props.character.name}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Grid
                        container
                        direction={"row"}
                        id="characterClassLevelContainer"
                    >
                        <Grid item xs={8} id="characterClass">
                            <CharacterClass />
                        </Grid>
                        <Grid item xs={4} id="characterLevel">
                            <CharacterLevel />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <CharacterOrigin />
                </Grid>
                <Grid item xs={3}>
                    <NameDisplay
                        objectName="Player Name"
                        value={
                            require("../../data/accounts.json").find((user) => {
                                return user.uuid === props.character.account;
                            })?.name
                        }
                    />
                </Grid>
            </Grid>
            <Grid container direction="row">
                <Grid item xs={3}>
                    <AbilityScores character={props.character} />
                </Grid>
                <Grid item xs={3}>
                    <CharacterBackstory />
                </Grid>
                <Grid item xs={3}>
                    <CharacterMemory />
                </Grid>
                <Grid item xs={3}>
                    <CharacterDrive />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default BasicInformation;
