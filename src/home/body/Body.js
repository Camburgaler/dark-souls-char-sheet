import { Box, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import CharacterList from "./character-list/CharacterList";
import FriendsActivity from "./friends-activity/FriendsActivity";

function Body(props) {
    const params = useParams();
    return (
        <Box id="body-box" margin={0} padding={0} display={"flex"} flex={1}>
            <Grid container display={"flex"} flex={1} id="body-grid-container">
                <Grid
                    item
                    xs={9}
                    display={"flex"}
                    flex={1}
                    id="characterList-grid-item"
                >
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
