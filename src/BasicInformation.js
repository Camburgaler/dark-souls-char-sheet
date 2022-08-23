import React from 'react';
import {
  Grid,
  TextField,
  MenuItem,
  FormControl,
  FormHelperText,
  Select,
}
  from "@mui/material";
import { Item } from './styles';
import { 
  BACKSTORIES, 
  BRUTE_SCORES, 
  CASTER_SCORES, 
  CLASSES, 
  DRIVES, 
  FENCER_SCORES, 
  JACK_OF_ALL_TRADES_SCORES, 
  MEMORIES, 
  ORIGINS
}
from './constants';
import { makeStyles } from '@material-ui/core/styles';

function BasicInformation(props) {

  const useStyles = makeStyles(() => ({
    root: {
      whiteSpace: "unset",
      wordBreak: "break-all"
    }
  }));
  const classes = useStyles();

  const handleChange = (event) => {
    props.onChange(event);
  }

  return (
    <Grid container direction="row" spacing="2">
      <Grid item xs={6}>
          <Item>
            <TextField fullWidth name="characterName" helperText="Character Name" variant="standard" onChange={handleChange} />
          </Item>
      </Grid>
      <Grid item xs={2}>
        <Grid container direction="row">
          <Grid item xs={7}>
            <Item>
              <FormControl fullWidth>
                <Select name="selectedClass" defaultValue={""} fullWidth style={{ overflow: "hidden", textOverflow: "ellipsis", maxWidth: "8vw" }} onChange={handleChange}>
                  {CLASSES.map((story) => {
                    return <MenuItem classes={{ root: classes.root }} key={story} value={story} divider>{story}</MenuItem>
                  })}
                </Select>
                <FormHelperText>Class</FormHelperText>
              </FormControl>
            </Item>
          </Grid>
          <Grid item xs={5}>
            <Item>
              <Select name="level" defaultValue={"1"} fullWidth onChange={handleChange}>
                {Array.from(new Array(20), (x,i) => i+1).map((level) => {
                  return <MenuItem key={level} value={level} divider>{level}</MenuItem>
                })}
              </Select>
              <FormHelperText>Level</FormHelperText>
            </Item>
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item xs={12}>
            <Item>
              <FormControl fullWidth>
                <Select fullWidth defaultValue={""} name="backstory" style={{ overflow: "hidden", textOverflow: "ellipsis", maxWidth: "15vw" }} onChange={handleChange}>
                  {BACKSTORIES.map((story) => {
                    return <MenuItem classes={{ root: classes.root }} key={story} value={story} divider>{story}</MenuItem>
                  })}
                </Select>
                <FormHelperText>Backstory</FormHelperText>
              </FormControl>
            </Item>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Item>
          <FormControl fullWidth>
            <Select name="origin" defaultValue={""} fullWidth style={{ overflow: "hidden", textOverflow: "ellipsis", maxWidth: "15vw" }} onChange={handleChange}>
              {ORIGINS.map((story) => {
                return <MenuItem classes={{ root: classes.root }} key={story} value={story} divider>{story}</MenuItem>
              })}
            </Select>
            <FormHelperText>Origins</FormHelperText>
          </FormControl>
          <FormControl fullWidth>
            <Select name="memory" defaultValue={""} fullWidth style={{ overflow: "hidden", textOverflow: "ellipsis", maxWidth: "15vw" }} onChange={handleChange}>
              {MEMORIES.map((story) => {
                return <MenuItem classes={{ root: classes.root }} key={story} value={story} divider>{story}</MenuItem>
              })}
            </Select>
            <FormHelperText>Memory</FormHelperText>
          </FormControl>
        </Item>
      </Grid>
      <Grid item xs={2}>
        <Item>
          <TextField name="playerName" fullWidth helperText="Player Name" variant="standard" onChange={handleChange} />
          <FormControl fullWidth>
            <Select fullWidth defaultValue={""} name="drive" style={{ overflow: "hidden", textOverflow: "ellipsis", maxWidth: "15vw" }} onChange={handleChange} >
              {DRIVES.map((story) => {
                return <MenuItem classes={{ root: classes.root }} key={story} value={story} divider>{story}</MenuItem>
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
