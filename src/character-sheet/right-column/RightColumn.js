import {
    Grid
}
from "@mui/material";
import FeaturesAndTraits from "./FeaturesAndTraits";
import Spells from "./Spells";
import Consumables from "./Consumables";

function RightColumn() {
    return(
        <Grid container direction="column">
            <Grid item xs={12}>
                <FeaturesAndTraits />
            </Grid>
            <Grid item xs={12}>
                <Spells />
            </Grid>
            <Grid item xs={12}>
                <Consumables />
            </Grid>
        </Grid>
    );
}

export default RightColumn;