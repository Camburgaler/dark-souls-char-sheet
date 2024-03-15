import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Searchbox from "./Searchbox";

function Header(props) {
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
                </Typography>
                <Searchbox />
                <Button color="inherit" href="/">
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
