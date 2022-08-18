import React from 'react';
import {
  Grid,
  TextField
}
  from "@mui/material";
import { Item } from './styles';

function BasicInformation() {
  return (
    <Grid container direction="row" xs="12" spacing="2">
      <Grid container direction="column" xs="6">
        <Grid item>
          <Item>
            <TextField fullWidth helperText="Character Name" variant="standard" />
            <TextField fullWidth helperText="Backstory" variant="standard" />
          </Item>
        </Grid>
      </Grid>
      <Grid container direction="column" xs="2">
        <Grid item>
          <Item>
            <TextField fullWidth helperText="Class and Level" variant="standard" />
            <TextField fullWidth helperText="Backstory" variant="standard" />
          </Item>
        </Grid>
      </Grid>
      <Grid container direction="column" xs="2">
        <Grid item>
          <Item>
            <TextField fullWidth helperText="Origin" variant="standard" />
            <TextField fullWidth helperText="Memory" variant="standard" />
          </Item>
        </Grid>
      </Grid>
      <Grid container direction="column" xs="2">
        <Grid item>
          <Item>
            <TextField fullWidth helperText="Player Name" variant="standard" />
            <TextField fullWidth helperText="Drive" variant="standard" />
          </Item>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BasicInformation;
