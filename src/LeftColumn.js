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

function LeftColumn(props) {
    return (
        <>
            <Grid container direction="column">
                <Grid container direction="row">
                    <Grid item xs={3}>
                        <AbilityScores character={props.character} onChange={props.changeHandler} />
                    </Grid>
                    <Grid item xs={9}>
                        <Grid container direction="column">
                            <Grid item xs={12}>
                                <SecondaryInfo character={props.character} onChange={props.changeHandler} />
                            </Grid>
                            <Grid item xs={12}>
                                <SavingThrows character={props.character} onChange={props.changeHandler} />
                            </Grid>
                            <Grid item xs={12}>
                                <SkillsList character={props.character} onChange={props.changeHandler} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction="row">
                    <Grid item xs={12}>
                        <SpecialAbility />
                    </Grid>
                </Grid>
                <Grid container direction="row">
                    <Grid item xs={12}>
                        <BloodiedAbility />
                    </Grid>
                </Grid>
                <Grid container direction="row">
                    <Grid item xs={12}>
                        <Notes />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
  }
  
  export default LeftColumn;