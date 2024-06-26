import { Box, Button, Grid, Typography } from "@mui/material";
import {
    BASE_PATH,
    CHARACTER_IMG_DIMENSIONS,
    CHARACTER_PATH,
} from "../../../constants";

function CharacterCard(props) {
    return (
        <Button
            color="inherit"
            sx={{ textTransform: "none" }}
            href={BASE_PATH + CHARACTER_PATH + "/" + props.character.uuid}
            id={props.character.uuid + "-button"}
        >
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
                                height: CHARACTER_IMG_DIMENSIONS,
                                width: CHARACTER_IMG_DIMENSIONS,
                            }}
                            // TODO: below src should point to where we end up actually storing our images when we get to the DB
                            src={
                                "https://raw.githubusercontent.com/Camburgaler/dark-souls-char-sheet/home-page/src/images/" +
                                props.character.uuid +
                                ".jpeg"
                            }
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Typography maxWidth={CHARACTER_IMG_DIMENSIONS}>
                            {props.character.name} | {props.character.class}{" "}
                            {props.character.level}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Button>
    );
}

export default CharacterCard;
