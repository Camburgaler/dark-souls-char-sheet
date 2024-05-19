import { Add } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    BASE_PATH,
    CHARACTER_IMG_DIMENSIONS,
    CREATE_PATH,
} from "../../../constants";
import CharacterCard from "./CharacterCard";

function CharacterList(props) {
    const params = useParams();
    const user = useSelector((state) => state.user);
    const characters = require("../../../data/characters.json").filter(
        (character) => {
            if (window.location.href.indexOf("friend") > -1) {
                if (character.account === params.uuid) {
                    return character;
                }
            } else if (window.location.href.indexOf("home") > -1) {
                if (character.account === user.uuid) {
                    return character;
                }
            }
            return null;
        }
    );

    return (
        <Box sx={{ bgcolor: "lightgray" }} flex={1} id="characterList-box">
            <Grid container id="characterList-grid-container">
                <Grid item xs={12} id="characterListTitle-grid-item">
                    <Typography variant="h3" id="characterListTitle">
                        Characters
                    </Typography>
                </Grid>
                <Grid item xs={12} id="characterCard-grid-container">
                    {characters.map((character) => {
                        return (
                            <CharacterCard
                                key={character.uuid}
                                character={character}
                            />
                        );
                    })}
                    <Button
                        color="inherit"
                        sx={{
                            textTransform: "none",
                            display:
                                user.uuid &&
                                window.location.href.indexOf("home") > -1
                                    ? "content"
                                    : "none",
                        }}
                        href={BASE_PATH + CREATE_PATH}
                    >
                        <Grid
                            item
                            padding={1}
                            margin={1}
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
                                    <Add
                                        sx={{
                                            height: CHARACTER_IMG_DIMENSIONS,
                                            width: CHARACTER_IMG_DIMENSIONS,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography
                                        maxWidth={CHARACTER_IMG_DIMENSIONS}
                                    >
                                        New Character
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default CharacterList;
