import { Add } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { BASE_PATH, CREATE_PATH } from "../../../constants";
import CharacterCard from "./CharacterCard";

function CharacterList(props) {
    const params = useParams();
    const accountId = require("../../../data/accounts.json").filter(
        (account) => {
            if (account.username === "camburgaler") {
                return account;
            }
            return null;
        }
    )[0].uuid;
    const characters = require("../../../data/characters.json").filter(
        (character) => {
            if (character.account === accountId) {
                return character;
            }
            return null;
        }
    );

    return (
        <Box>
            <Grid container sx={{ bgcolor: "lightgray" }} minHeight={"100%"}>
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
                            visibility={params.uuid ? "hidden" : "visible"}
                        >
                            <Grid container direction={"column"}>
                                <Grid item xs={9}>
                                    <Add sx={{ height: 200, width: 200 }} />
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography>New Character</Typography>
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
