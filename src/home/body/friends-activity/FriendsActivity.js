import { Box, Grid, Typography } from "@mui/material";
import FriendRequests from "./FriendRequests";

function FriendsActivity(props) {
    return (
        <Box sx={{ bgcolor: "lightgoldenrodyellow" }} height={"100%"}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h3">Friends</Typography>
                </Grid>
                <Grid item xs={12}>
                    <FriendRequests />
                </Grid>
                <Grid item xs={12}>
                    <Typography>Quick Look</Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default FriendsActivity;
