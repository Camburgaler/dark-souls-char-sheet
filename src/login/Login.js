import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";

function Login(props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid xs={12}>
                    <Button href="/home">LOGIN</Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Login;
