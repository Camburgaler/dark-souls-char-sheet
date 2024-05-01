import {
    Grid,
    Switch,
    Typography
} from "@mui/material";
import { SKILL_NAMES } from "../../constants";
import { Item } from "../../styles";

function SkillsList(props) {

    const calcSkill = (proficiency, expertise, mod) => {
        let skillMod = mod;
        if (proficiency) {
            skillMod += props.character.proficiencyBonus;
        }
        if (expertise) {
            skillMod += props.character.proficiencyBonus;
        }
        return (
            skillMod >= 0 ?
            "+" + skillMod :
            skillMod
            );
    }

    return(
        <>
            <Grid container direction={"column"} sx={{ border: "1px solid black" }}>
                {Object.entries(props.character.skills).map((skill) => {
                    return (
                        <Item key={skill[0]} sx={{ maxHeight: "12px" }}>
                            <Grid container direction={"row"}>
                                <Grid item xs={2}>
                                    <Switch sx={{ marginY: -1 }} size="small" checked={props.character.proficiencies[skill[0]]} />
                                </Grid>
                                <Grid item xs={2}>
                                    <Switch sx={{ marginY: -1 }} size="small" checked={props.character.expertise[skill[0]]} />
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography sx={{ fontSize: 12, borderBottom: "1px solid rgba(0, 0, 0, 0.42)" }}>{calcSkill(props.character.proficiencies[skill[0]], props.character.expertise[skill[0]], props.character.abilities[props.character.skills[skill[0]] + "Mod"])}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography noWrap={true} sx={{ fontSize: 14 }}>{SKILL_NAMES[skill[0]]}</Typography>
                                </Grid>
                            </Grid>
                        </Item>
                    )
                })}
                <Item>
                    <Typography sx={{ maxHeight: "15px", fontSize: 15 }}>Skills</Typography>
                </Item>
            </Grid>
        </>
    );
}

export default SkillsList;

function SkillsList(props) {
    const calcSkill = (proficiency, expertise, mod) => {
        let skillMod = mod;
        if (proficiency) {
            skillMod += props.character.proficiencyBonus;
        }
        if (expertise) {
            skillMod += props.character.proficiencyBonus;
        }
        return skillMod >= 0 ? "+" + skillMod : skillMod;
    };

    return (
        <>
            <Grid
                container
                direction={"column"}
                sx={{ border: "1px solid black" }}
            >
                {Object.entries(props.character.skills).map((skill) => {
                    return (
                        <Item key={skill[0]} sx={{ maxHeight: "12px" }}>
                            <Grid container direction={"row"}>
                                <Grid item xs={2}>
                                    <Switch
                                        sx={{ marginY: -1 }}
                                        size="small"
                                        checked={
                                            props.character.proficiencies[
                                                skill[0]
                                            ]
                                        }
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <Switch
                                        sx={{ marginY: -1 }}
                                        size="small"
                                        checked={
                                            props.character.expertise[skill[0]]
                                        }
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography
                                        sx={{
                                            fontSize: 12,
                                            borderBottom:
                                                "1px solid rgba(0, 0, 0, 0.42)",
                                        }}
                                    >
                                        {calcSkill(
                                            props.character.proficiencies[
                                                skill[0]
                                            ],
                                            props.character.expertise[skill[0]],
                                            props.character.abilities[
                                                props.character.skills[
                                                    skill[0]
                                                ] + "Mod"
                                            ]
                                        )}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography
                                        noWrap={true}
                                        sx={{ fontSize: 14 }}
                                    >
                                        {SKILL_NAMES[skill[0]]}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Item>
                    );
                })}
                <Item>
                    <Typography sx={{ maxHeight: "15px", fontSize: 15 }}>
                        Skills
                    </Typography>
                </Item>
            </Grid>
        </>
    );
}

export default SkillsList;
