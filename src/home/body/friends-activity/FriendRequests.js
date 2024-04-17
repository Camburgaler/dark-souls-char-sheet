import { Box, Button, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

function FriendRequests(props) {
    const user = useSelector((state) => state.user);
    const incomingRequests =
        require("../../../data/account_friends.json").filter((entry) => {
            return entry.recipient === user.uuid && !entry.accepted
                ? entry
                : null;
        });
    const outgoingRequests =
        require("../../../data/account_friends.json").filter((entry) => {
            return entry.requestor === user.uuid && !entry.accepted
                ? entry
                : null;
        });

    const findUsername = (uuid) => {
        return require("../../../data/accounts.json").find((entry) => {
            return entry.uuid === uuid;
        }).username;
    };

    const handleFriendRequest = (requestor, accepted) => {
        if (accepted) {
            console.log(
                "Accepted friend request from " + findUsername(requestor)
            );
            // "TODO: record.accepted = true"
        } else {
            console.log(
                "Rejected friend request from " + findUsername(requestor)
            );
            // TODO: delete record
        }
    };

    return (
        <Box>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h5">Friend Requests</Typography>
                </Grid>
                <Grid item xs={12}>
                    {incomingRequests.map((entry, index) => {
                        return (
                            <Box key={index} margin={2}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Typography>
                                            {findUsername(entry.requestor)}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button
                                            color="success"
                                            onClickCapture={() => {
                                                handleFriendRequest(
                                                    entry.requestor,
                                                    true
                                                );
                                            }}
                                            fullWidth
                                        >
                                            Accept
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button
                                            color="error"
                                            onClick={() => {
                                                handleFriendRequest(
                                                    entry.requestor,
                                                    false
                                                );
                                            }}
                                            fullWidth
                                        >
                                            Deny
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        );
                    })}
                    <Box
                        display={() => {
                            return incomingRequests.length === 0
                                ? "flex"
                                : "none";
                        }}
                    >
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography color={"gray"}>
                                    No new friend requests
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    {outgoingRequests.map((entry, index) => {
                        return (
                            <Box key={index} margin={2}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Typography>
                                            {findUsername(entry.recipient)}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography color={"gray"}>
                                            Pending...
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        );
                    })}
                </Grid>
            </Grid>
        </Box>
    );
}

export default FriendRequests;
