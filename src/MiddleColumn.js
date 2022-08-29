import {
    Grid
}
from "@mui/material";
import CombatStats from "./CombatStats";
import Position from "./Position";
import PosDiceAndSouls from "./PosDiceAndSouls";
import WeaponsArmorAndShields from "./WeaponsArmorAndShields";
import Equipment from "./Equipment";

function MiddleColumn(props) {
    return(
        <>
            <Grid container direction="column">
                <Grid item xs={12}>
                    <CombatStats character={props.character} onChange={props.changeHandler} />
                </Grid>
                <Grid item xs={12}>
                    <Position character={props.character} onChange={props.changeHandler} setCharacter={props.setCharacter} />
                </Grid>
                <Grid item xs={12}>
                    <PosDiceAndSouls character={props.character} onChange={props.changeHandler} />
                </Grid>
                <Grid item xs={12}>
                    <WeaponsArmorAndShields character={props.character} onChange={props.changeHandler} />
                </Grid>
                <Grid item xs={12}>
                    <Equipment character={props.character} onChange={props.changeHandler} />
                </Grid>
            </Grid>
        </>
    );
}

export default MiddleColumn;