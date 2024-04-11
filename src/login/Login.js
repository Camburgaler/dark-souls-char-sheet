import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { BASE_PATH, HOME_PATH } from "../constants";

function Login(props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid xs={12}>
                    <Button href={BASE_PATH + HOME_PATH}>LOGIN</Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Login;
