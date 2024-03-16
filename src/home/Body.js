import { Box, Grid } from "@mui/material";

function Body(props) {
    return (
        <Box margin={0} padding={0}>
            <Grid container>
                <Grid item xs={9}>
                    characters
                </Grid>
                <Grid item xs={3}>
                    friends
                </Grid>
            </Grid>
        </Box>
    );
}

export default Body;
