import { Button, Grid, TextField, Typography } from "@mui/material";
import { Item } from "./styles";

function PosDiceAndSouls(props) {

    const handlePosDiceUseClick = (event) => {
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
                                        <TextField defaultValue={props.character.souls.current} helperText="Current" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField defaultValue={props.character.souls.spent} helperText="Spent" />
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