import { Grid, Switch, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Item } from "./styles";

function SkillsList(props) {

    const calcSkill = (proficiency, mod) => {
        return (
            proficiency ?
                (
                    mod + props.character.proficiencyBonus >= 0 ?
                        "+" + mod + props.character.proficiencyBonus :
                        mod + props.character.proficiencyBonus
                ) : (
                    mod >= 0 ?
                        "+" + mod :
                        mod
                )
        )
    }

    return(
        <>
            <Grid container direction={"column"}>
                {Object.entries(props.character.skills).map((skill) => {
                    return (
                        <Item key={skill[0]} sx={{ maxHeight: "12px" }}>
                            <Grid container direction={"row"}>
                                <Grid item xs={2}>
                                    <Switch sx={{ marginY: -1 }} size="small" checked={props.character.proficiencies[skill[1]]} />
                                </Grid>
                                <Grid item xs={2}>
                                    <Switch sx={{ marginY: -1 }} size="small" checked={props.character.expertise[skill[1]]} />
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography sx={{ fontSize: 12, borderBottom: "1px solid rgba(0, 0, 0, 0.42)" }}>+0</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography noWrap={true} sx={{ fontSize: 14 }}>{props.character.skillsNames[skill[0]]}</Typography>
                                </Grid>
                            </Grid>
                        </Item>
                    )
                })}
            </Grid>
        </>
    );
}

export default SkillsList;