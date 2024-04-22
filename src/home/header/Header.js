import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGIN_PATH } from "../../constants";
import { clearUser } from "../../redux/userSlice";
import Searchbox from "./Searchbox";

function Header(props) {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(clearUser());
        navigate(LOGIN_PATH);
    };

    return (
        <AppBar position="static" color="inherit">
            <Toolbar>
                <img
                    width={100}
                    height={100}
                    src={require("../../images/clipart_bonfire.png")}
                    alt=""
                />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Dark Souls TTRPG Character Sheet Home Page
                    <br />
                    Welcome, {user.username}!
                </Typography>
                <Searchbox />
                <Button
                    href={require("../../data/Dark_Souls_The_Roleplaying_Game.PDF")}
                    target="_blank"
                >
                    Rules
                </Button>
                <Button color="inherit" onClick={handleLogout}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
