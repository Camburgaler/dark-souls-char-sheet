import { Box, Button, Grid, Typography } from "@mui/material";

const maxHeight = 110;

function getTopOffset(peers, index) {
    var offset = 0;
    for (const peer in peers) {
        console.log(peer.name);
        if (peer.index < index) {
            offset += peer.height;
        }
    }
    return offset;
}

function UserCard(props) {
    return (
        <Box
            sx={{ flexGrow: 1 }}
            position={"absolute"}
            id={"userCard" + props.index}
            maxHeight={maxHeight}
            top={props.index * maxHeight}
        >
            <Grid container>
                <Grid xs={12} item>
                    <Typography variant="contained">
                        {props.user.username}
                    </Typography>
                </Grid>
                <Grid xs={6} item>
                    <Button color="success" variant="contained">
                        Send Friend Request
                    </Button>
                </Grid>
                <Grid xs={6} item>
                    <Button color="secondary" variant="contained">
                        Visit Homepage
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default UserCard;
