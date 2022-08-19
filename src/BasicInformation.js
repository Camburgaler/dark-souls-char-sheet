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

function BasicInformation() {

  const useStyles = makeStyles(() => ({
    root: {
      whiteSpace: "unset",
      wordBreak: "break-all"
    }
  }));
  const classes = useStyles();

  return (
    <Grid container direction="row" xs="12" spacing="2">
      <Grid container direction="column" xs="6">
          <Item>
            <TextField fullWidth helperText="Character Name" variant="standard" />
          </Item>
      </Grid>
      <Grid container direction="column" xs="2">
        <Grid container direction="row">
          <Grid container direction="column" xs="7">
            <Item>
              <FormControl fullWidth>
                <Select fullWidth style={{ overflow: "hidden", textOverflow: "ellipsis", maxWidth: "8vw" }}>
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
              <Select fullWidth>
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
                <TextField fullWidth name="backstory" select style={{ overflow: "hidden", textOverflow: "ellipsis", maxWidth: "15vw" }}>
                  {BACKSTORIES.map((story) => {
                    return <MenuItem classes={{ root: classes.root }} value={story} divider="true">{story}</MenuItem>
                  })}
                </TextField>
                <FormHelperText>Backstory</FormHelperText>
              </FormControl>
            </Item>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="column" xs="2">
        <Item>
          <TextField fullWidth helperText="Origin" variant="standard" />
          <FormControl fullWidth>
            <TextField fullWidth name="memory" select style={{ overflow: "hidden", textOverflow: "ellipsis", maxWidth: "15vw" }}>
              {MEMORIES.map((story) => {
                return <MenuItem classes={{ root: classes.root }} value={story} divider="true">{story}</MenuItem>
              })}
            </TextField>
            <FormHelperText>Memory</FormHelperText>
          </FormControl>
        </Item>
      </Grid>
      <Grid container direction="column" xs="2">
        <Item>
          <TextField fullWidth helperText="Player Name" variant="standard" />
          <FormControl fullWidth>
            <TextField fullWidth name="drive" select style={{ overflow: "hidden", textOverflow: "ellipsis", maxWidth: "15vw" }}>
              {DRIVES.map((story) => {
                return <MenuItem classes={{ root: classes.root }} value={story} divider="true">{story}</MenuItem>
              })}
            </TextField>
            <FormHelperText>Drive</FormHelperText>
          </FormControl>
        </Item>
      </Grid>
    </Grid>
  );
}

export default BasicInformation;
