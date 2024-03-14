import { Box, Button, Grid, Typography } from "@mui/material";

function UserCard(props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid xs={12}>
                    <Typography variant="contained">
                        {props.user.username}
                    </Typography>
                </Grid>
                <Grid xs={6}>
                    <Button color="success" variant="contained">
                        Send Friend Request
                    </Button>
                </Grid>
                <Grid xs={6}>
                    <Button color="secondary" variant="contained">
                        Visit Homepage
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default UserCard;
