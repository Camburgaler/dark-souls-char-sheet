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
            <Grid container direction="column">
                <Grid item xs={12}>
                    <CombatStats />
                </Grid>
                <Grid item xs={12}>
                    <Position />
                </Grid>
                <Grid item xs={12}>
                    <PosDiceAndSouls />
                </Grid>
                <Grid item xs={12}>
                    <WeaponsArmorAndShields />
                </Grid>
                <Grid item xs={12}>
                    <Equipment />
                </Grid>
            </Grid>
        </>
    );
}

export default MiddleColumn;