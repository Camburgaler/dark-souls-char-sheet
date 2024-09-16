import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import './css/Login.css'
import { HOME_PATH } from "../constants";
import { setUser } from "../redux/userSlice";
import FadeIn from "react-fade-in";
import {Box, Grid, Table, TextField} from "@mui/material";

function Login(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = () => {
        // TODO: Login logic goes here
        dispatch(
            setUser(
                require("../data/accounts.json").find((user) => {
                    return user.uuid === "126112c3-79d2-43a4-bdaf-179926817396"; // temporary dummy login
                })
            )
        );
        navigate(HOME_PATH);
    };

    return (
        <div id="button-container-1" className="button-container">
            <div id="button-container-2" className="button-container-center">
                <FadeIn delay={100}>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="Password"
                            name="password"
                            autoComplete="password"
                        />
                    </Box>
                    <Button id="login-button-1">
                        Centered Button LMAO
                    </Button>
                </FadeIn>
            </div>
        </div>
    );
}

export default Login;
