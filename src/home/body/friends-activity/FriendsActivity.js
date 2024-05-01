import { Box, Grid, Typography } from "@mui/material";
import FriendRequests from "./FriendRequests";
import QuickLook from "./QuickLook";

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
                    <QuickLook />
                </Grid>
            </Grid>
        </Box>
    );
}

export default FriendsActivity;
