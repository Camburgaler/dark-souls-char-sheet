import { Add } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import CharacterCard from "./CharacterCard";

function CharacterList(props) {
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
                                <Add sx={{ height: 200, width: 200 }} />
                            </Grid>
                            <Grid item xs={3}>
                                <Typography>New Character</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default CharacterList;
