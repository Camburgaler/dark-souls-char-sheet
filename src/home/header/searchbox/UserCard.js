import { Box, Button, Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function UserCard(props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
                <Grid xs={12}>
                    <Button color="secondary" variant="contained">
                        {props.text}
                    </Button>
                </Grid>
                <Grid xs={12}>
                    <Button
                        color="success"
                        variant="contained"
                        endIcon={<SendIcon />}
                    >
                        Send Friend Request
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default UserCard;
