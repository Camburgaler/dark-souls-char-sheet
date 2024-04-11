import {
    Button,
    FormControl,
    FormHelperText,
    Grid,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import { Item } from "../styles";
import {
    BACKSTORIES,
    CLASSES,
    DRIVES,
    MEMORIES,
    ORIGINS,
} from "./char-sheet-constants";

function BasicInformation(props) {
    // const useStyles = makeStyles(() => ({
    //     root: {
    //         whiteSpace: "unset",
    //         wordBreak: "break-all",
    //     },
    // }));
    // const classes = useStyles();

    const handleChange = (event) => {
        props.onChange(event);
    };

    const handleLevelButton = (event) => {
        let newLevel = props.character.level;
        if (event.target.name === "lvlUp") {
            if (props.character.level < 20) {
                newLevel++;
            }
        } else if (event.target.name === "lvlDown") {
            if (props.character.level > 1) {
                newLevel--;
            }
        }

        props.setCharacter({
            ...props.character,
            level: newLevel,
        });
    };

    return (
        <Grid container direction="row" spacing="2" columnSpacing={"5"}>
            <Grid item xs={4} sx={{ border: "1px solid black" }}>
                <Item>
                    <TextField
                        fullWidth
                        name="characterName"
                        helperText="Character Name"
                        variant="standard"
                        onChange={handleChange}
                    />
                </Item>
            </Grid>
            <Grid
                item
                xs={4}
                sx={{
                    borderBottom: "1px solid black",
                    borderLeft: "1px solid black",
                    borderTop: "1px solid black",
                }}
            >
                <Grid container direction="row">
                    <Grid item xs={7}>
                        <Item>
                            <FormControl fullWidth>
                                <Select
                                    name="selectedClass"
                                    defaultValue={""}
                                    disabled={props.character.level > 1}
                                    fullWidth
                                    style={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                    }}
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
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>
                            <Typography name="level" sx={{ fontSize: 40 }}>
                                {props.character.level}
                            </Typography>
                            <FormHelperText>Level</FormHelperText>
                        </Item>
                    </Grid>
                    <Grid item xs={2}>
                        <Grid container direction="column">
                            <Grid item xs={12}>
                                <Item>
                                    <Button
                                        onClick={handleLevelButton}
                                        name="lvlUp"
                                        disabled={
                                            props.character.selectedClass ===
                                                "" ||
                                            props.character.origin === ""
                                        }
                                    >
                                        LV. Up
                                    </Button>
                                </Item>
                            </Grid>
                            <Grid item xs={12}>
                                <Item>
                                    <Button
                                        onClick={handleLevelButton}
                                        name="lvlDown"
                                        disabled={
                                            props.character.selectedClass ===
                                                "" ||
                                            props.character.origin === ""
                                        }
                                    >
                                        LV. DN
                                    </Button>
                                </Item>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction="row">
                    <Grid item xs={12}>
                        <Item>
                            <FormControl fullWidth>
                                <Select
                                    fullWidth
                                    defaultValue={""}
                                    name="backstory"
                                    style={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                    }}
                                    onChange={handleChange}
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
                        </Item>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                xs={2}
                sx={{
                    borderBottom: "1px solid black",
                    borderTop: "1px solid black",
                }}
            >
                <Item>
                    <FormControl fullWidth>
                        <Select
                            name="origin"
                            defaultValue={""}
                            disabled={props.character.level > 1}
                            fullWidth
                            style={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                maxWidth: "15vw",
                            }}
                            onChange={handleChange}
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
                        <FormHelperText>Origins</FormHelperText>
                    </FormControl>
                    <FormControl fullWidth>
                        <Select
                            name="memory"
                            defaultValue={""}
                            fullWidth
                            style={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                maxWidth: "15vw",
                            }}
                            onChange={handleChange}
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
                </Item>
            </Grid>
            <Grid
                item
                xs={2}
                sx={{
                    borderBottom: "1px solid black",
                    borderRight: "1px solid black",
                    borderTop: "1px solid black",
                }}
            >
                <Item>
                    <TextField
                        name="playerName"
                        fullWidth
                        helperText="Player Name"
                        variant="standard"
                        onChange={handleChange}
                    />
                    <FormControl fullWidth>
                        <Select
                            fullWidth
                            defaultValue={""}
                            name="drive"
                            style={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                maxWidth: "15vw",
                            }}
                            onChange={handleChange}
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
                </Item>
            </Grid>
        </Grid>
    );
}

export default BasicInformation;
