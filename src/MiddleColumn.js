import {
    Grid
}
from "@mui/material";
import CombatStats from "./CombatStats";
import Position from "./Position";
import PosDiceAndSouls from "./PosDiceAndSouls";
import WeaponsArmorAndShields from "./WeaponsArmorAndShields";
import Equipment from "./Equipment";

function MiddleColumn() {
    return(
        <>
            <Grid container="true" direction="column" xs="12">
                <Grid container="true" direction="row">
                    <CombatStats />
                </Grid>
                <Grid container="true" direction="row">
                    <Position />
                </Grid>
                <Grid container="true" direction="row">
                    <PosDiceAndSouls />
                </Grid>
                <Grid container="true" direction="row">
                    <WeaponsArmorAndShields />
                </Grid>
                <Grid container="true" direction="row">
                    <Equipment />
                </Grid>
            </Grid>
        </>
    );
}

export default MiddleColumn;