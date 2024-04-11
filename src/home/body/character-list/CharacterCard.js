import { Box, Grid, Typography } from "@mui/material";

function CharacterCard(props) {
    return (
        <Box>
            <Grid
                item
                padding={1}
                margin={1}
                xs={"auto"}
                sx={{
                    bgcolor: "gray",
                    ":hover": {
                        border: "1px solid #000000",
                        bgcolor: "darkgray",
                    },
                }}
            >
                <Grid container direction={"column"}>
                    <Grid item xs={9}>
                        <Box
                            component="img"
                            alt={props.character.name + " icon"}
                            sx={{
                                height: 200,
                                width: 200,
                            }}
                            src={require("../../../images/" +
                                props.character.uuid +
                                ".jpeg")}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Typography wrap>
                            {props.character.name} | {props.character.class}{" "}
                            {props.character.level}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default CharacterCard;