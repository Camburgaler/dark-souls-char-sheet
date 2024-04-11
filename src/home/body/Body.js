import { Box, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import FriendsActivity from "./FriendsActivity";
import CharacterList from "./character-list/CharacterList";

function Body(props) {
    const params = useParams();
    return (
        <Box margin={0} padding={0}>
            <Grid container>
                <Grid item xs={9}>
                    <CharacterList />
                </Grid>
                <Grid
                    item
                    xs={3}
                    visibility={params.uuid ? "hidden" : "visible"}
                >
                    <FriendsActivity />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Body;