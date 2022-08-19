import React from 'react';
import {
  Grid,
  TextField,
  MenuItem,
  FormControl,
  FormHelperText,
  Select
}
  from "@mui/material";
import { Item } from './styles';
import { 
  BACKSTORIES, CLASSES, DRIVES, MEMORIES,
}
from './constants';
import { makeStyles } from '@material-ui/core/styles';
import { characterContext } from './characterContext';

function BasicInformation(props) {

  const useStyles = makeStyles(() => ({
    root: {
      whiteSpace: "unset",
      wordBreak: "break-all"
    }
  }));
  const classes = useStyles();

  const handleChange = (event) => {
    characterContext._currentValue[event.target.name] = event.target.value;
    console.log(characterContext._currentValue[event.target.name]);
  }

  return (
    <Grid container direction="row" xs="12" spacing="2">
      <Grid container direction="column" xs="6">
          <Item>
            <TextField fullWidth name="characterName" helperText="Character Name" variant="standard" onChange={handleChange} />
          </Item>
      </Grid>
      <Grid container direction="column" xs="2">
        <Grid container direction="row">
          <Grid container direction="column" xs="7">
            <Item>
              <FormControl fullWidth>
                <Select name="selectedClass" fullWidth style={{ overflow: "hidden", textOverflow: "ellipsis", maxWidth: "8vw" }} onChange={handleChange}>
                  {CLASSES.map((story) => {
                    return <MenuItem classes={{ root: classes.root }} value={story} divider>{story}</MenuItem>
                  })}
                </Select>
                <FormHelperText>Class</FormHelperText>
              </FormControl>
            </Item>
          </Grid>
          <Grid container direction="column" xs="5">
            <Item>
              <Select name="level" fullWidth onChange={handleChange}>
                {Array.from(new Array(20), (x,i) => i+1).map((level) => {
                  return <MenuItem value={level} divider>{level}</MenuItem>
                })}
              </Select>
              <FormHelperText>Level</FormHelperText>
            </Item>
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid container direction="column" xs="12">
            <Item>
              <FormControl fullWidth>
                <Select fullWidth name="backstory" style={{ overflow: "hidden", textOverflow: "ellipsis", maxWidth: "15vw" }} onChange={handleChange}>
                  {BACKSTORIES.map((story) => {
                    return <MenuItem classes={{ root: classes.root }} value={story} divider="true">{story}</MenuItem>
                  })}
                </Select>
                <FormHelperText>Backstory</FormHelperText>
              </FormControl>
            </Item>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="column" xs="2">
        <Item>
          <TextField name="origin" fullWidth helperText="Origin" variant="standard" onChange={handleChange} />
          <FormControl fullWidth>
            <Select name="memory" fullWidth style={{ overflow: "hidden", textOverflow: "ellipsis", maxWidth: "15vw" }} onChange={handleChange}>
              {MEMORIES.map((story) => {
                return <MenuItem classes={{ root: classes.root }} value={story} divider="true">{story}</MenuItem>
              })}
            </Select>
            <FormHelperText>Memory</FormHelperText>
          </FormControl>
        </Item>
      </Grid>
      <Grid container direction="column" xs="2">
        <Item>
          <TextField name="playerName" fullWidth helperText="Player Name" variant="standard" onChange={handleChange} />
          <FormControl fullWidth>
            <Select fullWidth name="drive" style={{ overflow: "hidden", textOverflow: "ellipsis", maxWidth: "15vw" }} onChange={handleChange} >
              {DRIVES.map((story) => {
                return <MenuItem classes={{ root: classes.root }} value={story} divider="true">{story}</MenuItem>
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
