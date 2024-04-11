import { Box, Grid } from "@mui/material";
import FriendsActivity from "./FriendsActivity";
import CharacterList from "./character-list/CharacterList";

function Body(props) {
    return (
        <Box margin={0} padding={0}>
            <Grid container>
                <Grid item xs={9}>
                    <CharacterList />
                </Grid>
                <Grid item xs={3}>
                    <FriendsActivity />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Body;
