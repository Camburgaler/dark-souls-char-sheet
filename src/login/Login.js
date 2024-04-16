import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HOME_PATH } from "../constants";
import { setUser } from "../redux/userSlice";

function Login(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = () => {
        // TODO: Login logic goes here
        dispatch(
            setUser(
                require("../data/accounts.json").find((user) => {
                    return user.uuid === "126112c3-79d2-43a4-bdaf-179926817396";
                })
            )
        ); // dummy login
        navigate(HOME_PATH);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid item xs={12}>
                    <Button onClick={handleLogin}>LOGIN</Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Login;
