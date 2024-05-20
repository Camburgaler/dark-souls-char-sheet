import { Box, Grid } from "@mui/material";
import SavingThrows from "./SavingThrows";
import SecondaryInfo from "./SecondaryInfo";
import SkillsList from "./SkillsList";
// import SpecialAbility from "./SpecialAbility"
import BloodiedAbility from "./BloodiedAbility";
import Notes from "./Notes";

function LeftColumn(props) {
    return (
        <Box>
            <Grid container direction="column">
                <Grid container direction="row">
                    <Grid item xs={12}>
                        <Grid container direction="column">
                            <Grid item xs={12}>
                                <SecondaryInfo
                                    character={props.character}
                                    onChange={props.changeHandler}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <SavingThrows
                                    character={props.character}
                                    onChange={props.changeHandler}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <SkillsList
                                    character={props.character}
                                    onChange={props.changeHandler}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* <Grid container direction="row">
                    <Grid item xs={12}>
                        <SpecialAbility character={props.character} onChange={props.changeHandler} />
                    </Grid>
                </Grid> */}
                <Grid container direction="row">
                    <Grid item xs={12}>
                        <BloodiedAbility
                            character={props.character}
                            onChange={props.changeHandler}
                        />
                    </Grid>
                </Grid>
                <Grid container direction="row">
                    <Grid item xs={12}>
                        <Notes
                            character={props.character}
                            onChange={props.changeHandler}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default LeftColumn;
