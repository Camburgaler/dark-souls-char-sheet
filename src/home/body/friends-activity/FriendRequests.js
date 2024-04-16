import { Box, Button, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

function FriendRequests(props) {
    const user = useSelector((state) => state.user);
    const incomingRequests =
        require("../../../data/account_friends.json").filter((entry) => {
            return entry.recipient === user.uuid ? entry : null;
        });

    const findUsername = (uuid) => {
        return require("../../../data/accounts.json").find((entry) => {
            return entry.uuid === uuid;
        }).username;
    };

    return (
        <Box>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h5">Friend Requests</Typography>
                </Grid>
                <Grid item xs={12}>
                    {incomingRequests.map((entry, index) => {
                        if (!entry.accepted) {
                            return (
                                <Box key={index}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Typography>
                                                {findUsername(entry.requestor)}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Button color="success">
                                                Accept
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Button color="error">Deny</Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            );
                        }
                    })}
                    <Box visibility={incomingRequests.length === 0}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography color={"gray"}>
                                    No new friend requests
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default FriendRequests;
