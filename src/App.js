import React from 'react';
import {
  Grid
}
from "@mui/material";
import './App.css';
import BasicInformation from './BasicInformation';
import LeftColumn from './LeftColumn';
import MiddleColumn from './MiddleColumn';
import RightColumn from './RightColumn';

function App() {
  return (
    <>
      <Grid container="true" direction="row">
        <BasicInformation />
      </Grid>

      <Grid container="true" direction="row">
        <Grid container="true" direction="column" xs="4" minHeight="100%">
          <LeftColumn />
        </Grid>
        <Grid container="true" direction="column" xs="4">
          <MiddleColumn />
        </Grid>
        <Grid container="true" direction="column" xs="4">
          <RightColumn />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
