import {
    Grid
}
from "@mui/material";
import FeaturesAndTraits from "./FeaturesAndTraits";
import Spells from "./Spells";
import Consumables from "./Consumables";

function RightColumn() {
    return(
        <Grid container="true" direction="column" xs="12">
            <Grid container="true" direction="row">
                <FeaturesAndTraits />
            </Grid>
            <Grid container="true" direction="row">
                <Spells />
            </Grid>
            <Grid container="true" direction="row">
                <Consumables />
            </Grid>
        </Grid>
    );
}

export default RightColumn;