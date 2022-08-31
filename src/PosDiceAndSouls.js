import { Button, FormControl, FormHelperText, Grid, TextField, Typography } from "@mui/material";
import { Item } from "./styles";

function PosDiceAndSouls(props) {

    const handlePosDiceUseClick = (event) => {
        props.changeHandler(event);
    }

    const handleSoulsChangeButtonClick = (event) => {
        props.changeHandler(event);
    }

    return (
        <>
            <Grid container direction={"row"} sx={{ border: "1px solid black" }}>
                <Grid item xs={6}>
                    <Grid container direction={"column"}>
                        <Item>
                            <Grid item xs={12}>
                                <Grid container direction={"row"}>
                                    <Grid item xs={9}>
                                        <Typography>Total: {props.character.positionDice.current}/{props.character.positionDice.total}</Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button name="posDiceUseButton" onClick={handlePosDiceUseClick} fullWidth style={{ fontSize: "15", maxHeight: "15px" }}>Use</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>d{props.character.positionDice.diceType}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>Position Dice</Typography>
                            </Grid>
                        </Item>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container direction={"column"}>
                        <Item>
                            <Grid item xs={12}>
                                <Grid container direction={"row"}>
                                    <Grid item xs={6}>
                                        <FormControl>
                                            <Typography name="currentSouls">{props.character.souls.current}</Typography>
                                            <FormHelperText>Current</FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl>
                                            <Typography name="spentSouls">{props.character.souls.spent}</Typography>
                                            <FormHelperText>Spent</FormHelperText>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid container direction="row">
                                    <Grid item xs={6}>
                                        <TextField name="soulChangeText" type="number" defaultValue={0} />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button name="soulsGainButton" onClick={handleSoulsChangeButtonClick} fullWidth sx={{ fontSize: "15", minHeight: "55px", minWidth: "0px" }}>Gain</Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button name="soulsSpendButton" onClick={handleSoulsChangeButtonClick} fullWidth sx={{ fontSize: "15", minHeight: "55px", minWidth: "0px" }}>Spend</Button>
                                    </Grid>
                                </Grid>
                                <Grid container direction="row">
                                    <Grid item xs={6}>
                                        <Button name="soulsDeathButton" onClick={handleSoulsChangeButtonClick} fullWidth sx={{ fontSize: "15", minHeight: "50px" }}>Death</Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button name="soulsRecoveryButton" onClick={handleSoulsChangeButtonClick} fullWidth sx={{ fontSize: "15", maxHeight: "50px" }}>Recovery ({props.character.souls.recoverable})</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>Souls</Typography>
                            </Grid>
                        </Item>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )};

export default PosDiceAndSouls;