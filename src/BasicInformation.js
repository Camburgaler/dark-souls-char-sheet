import React from 'react';
import {
  Grid
}
from "@mui/material";
import './Grid.css';

function BasicInformation() {
  return (
    <Grid container="true" direction="row" xs="12">
        <Grid container="true" direction="column" xs="6" border="1px">
          <Grid item="true" border="1px black">
            <p>name</p>
          </Grid>
        </Grid>
        <Grid container="true" direction="column" xs="2">
          <Grid item="true">
            <p>class</p>
          </Grid>
          <Grid item="true">
            <p>backstory</p>
          </Grid>
        </Grid>
        <Grid container="true" direction="column" xs="2">
          <Grid item="true">
            <p>origin</p>
          </Grid>
          <Grid item="true">
            <p>memory</p>
          </Grid>
        </Grid>
        <Grid container="true" direction="column" xs="2">
          <Grid item="true">
            <p>player</p>
          </Grid>
          <Grid item="true">
            <p>drive</p>
          </Grid>
        </Grid>
      </Grid>
  );
}

export default BasicInformation;
