import {
    Container,
    FormControl,
    FormControlLabel,
    Grid,
    Switch,
    TextField,
}
    from "@mui/material";
import { Item } from "./styles";

function SavingThrows(props) {

    const calcSavingThrow = (proficiency, mod) => {
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

    return (
        <>
            <Grid container direction={"column"}>
                <Item>
                    <Grid container direction={"row"}>
                        <Grid item xs={3}>
                            <Switch checked={props.character.proficiencies.strSavingThrow} />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                value={calcSavingThrow(props.character.proficiencies.strSavingThrow, props.character.abilities.strMod)}
                                variant={"standard"}
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <Container>Strength</Container>
                        </Grid>
                    </Grid>
                </Item>
                <Item>
                    <Grid container direction={"row"}>
                        <Grid item xs={3}>
                            <Switch checked={props.character.proficiencies.dexSavingThrow} />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                value={calcSavingThrow(props.character.proficiencies.dexSavingThrow, props.character.abilities.dexMod)}
                                variant={"standard"}
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <Container>Dexterity</Container>
                        </Grid>
                    </Grid>
                </Item>
                <Item>
                    <Grid container direction={"row"}>
                        <Grid item xs={3}>
                            <Switch checked={props.character.proficiencies.conSavingThrow} />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                value={calcSavingThrow(props.character.proficiencies.conSavingThrow, props.character.abilities.conMod)}
                                variant={"standard"}
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <Container>Constitution</Container>
                        </Grid>
                    </Grid>
                </Item>
                <Item>
                    <Grid container direction={"row"}>
                        <Grid item xs={3}>
                            <Switch checked={props.character.proficiencies.intSavingThrow} />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                value={calcSavingThrow(props.character.proficiencies.intSavingThrow, props.character.abilities.intMod)}
                                variant={"standard"}
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <Container>Intelligence</Container>
                        </Grid>
                    </Grid>
                </Item>
                <Item>
                    <Grid container direction={"row"}>
                        <Grid item xs={3}>
                            <Switch checked={props.character.proficiencies.wisSavingThrow} />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                value={calcSavingThrow(props.character.proficiencies.wisSavingThrow, props.character.abilities.wisMod)}
                                variant={"standard"}
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <Container>Wisdom</Container>
                        </Grid>
                    </Grid>
                </Item>
                <Item>
                    <Grid container direction={"row"}>
                        <Grid item xs={3}>
                            <Switch checked={props.character.proficiencies.chaSavingThrow} />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                value={calcSavingThrow(props.character.proficiencies.chaSavingThrow, props.character.abilities.chaMod)}
                                variant={"standard"}
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <Container>Charisma</Container>
                        </Grid>
                    </Grid>
                </Item>
            </Grid>
        </>
    );
}

export default SavingThrows;