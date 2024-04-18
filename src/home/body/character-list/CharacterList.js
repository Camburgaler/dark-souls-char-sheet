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
            if (character.account === user.uuid) {
                return character;
            }
            return null;
        }
    );

    return (
        <Box sx={{ bgcolor: "lightgray" }} height={"100%"}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h3">Characters</Typography>
                </Grid>
                <Grid container>
                    {characters.map((character) => {
                        return (
                            <CharacterCard
                                key={character.uuid}
                                character={character}
                            />
                        );
                    })}
                    <Grid item visibility={user.uuid ? "visible" : "hidden"}>
                        <Button
                            color="inherit"
                            sx={{ textTransform: "none" }}
                            href={BASE_PATH + CREATE_PATH}
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
            </Grid>
        </Box>
    );
}

export default CharacterList;
