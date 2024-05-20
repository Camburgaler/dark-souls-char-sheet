import {
    FormControl,
    FormHelperText,
    Grid,
    MenuItem,
    Select,
} from "@mui/material";
import React from "react";
import InfoDisplay from "./InfoDisplay";
import AbilityScores from "./ability-scores/AbilityScores";

/**
 * Renders a form for basic character information.
 *
 * @param {Object} props - The props object containing character data.
 * @return {JSX.Element} A form with fields for character name, class, level, backstory, origin, memory, drive, and player name.
 */
function BasicInformation(props) {
    const [level, setLevel] = React.useState(props.character.level);

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
            default:
                console.log("error");
                break;
        }
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

    return (
        <Grid container direction="column" id="basicInformationContainer">
            <Grid container direction="row">
                <Grid item xs={3}>
                    <InfoDisplay
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
                            <InfoDisplay
                                objectName="Class"
                                value={props.character.class}
                            />
                        </Grid>
                        <Grid item xs={4} id="characterLevel">
                            <CharacterLevel />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <InfoDisplay
                        objectName="Origin"
                        value={props.character.origin}
                    />
                </Grid>
                <Grid item xs={3}>
                    <InfoDisplay
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
                    <InfoDisplay
                        objectName="Backstory"
                        value={props.character.backstory}
                    />
                </Grid>
                <Grid item xs={3}>
                    <InfoDisplay
                        objectName="Memory"
                        value={props.character.memory}
                    />
                </Grid>
                <Grid item xs={3}>
                    <InfoDisplay
                        objectName="Drive"
                        value={props.character.drive}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default BasicInformation;
