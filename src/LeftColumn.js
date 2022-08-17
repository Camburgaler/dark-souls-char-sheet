import {
    Grid
}
from "@mui/material";
import AbilityScores from "./AbilityScores";
import SecondaryInfo from "./SecondaryInfo";
import SavingThrows from "./SavingThrows"
import SkillsList from "./SkillsList"
import SpecialAbility from "./SpecialAbility"
import BloodiedAbility from "./BloodiedAbility"
import Notes from "./Notes"

function LeftColumn() {
    return (
        <>
            <Grid container="true" direction="column" xs="12">
                <Grid container="true" direction="row" xs="6">
                    <Grid container="true" direction="column" xs="3">
                        <AbilityScores />
                    </Grid>
                    <Grid container="true" direction="column" xs="9">
                        <Grid container="true" direction="row">
                            <SecondaryInfo />
                        </Grid>
                        <Grid container="true" direction="row">
                            <SavingThrows />
                        </Grid>
                        <Grid container="true" direction="row">
                            <SkillsList />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container="true" direction="row" xs="1">
                    <SpecialAbility />
                </Grid>
                <Grid container="true" direction="row" xs="2">
                    <BloodiedAbility />
                </Grid>
                <Grid container="true" direction="row" xs="3">
                    <Notes />
                </Grid>
            </Grid>
        </>
    );
  }
  
  export default LeftColumn;