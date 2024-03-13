import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Searchbox from "./searchbox/Searchbox";

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
                <Stack>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Dark Souls TTRPG Character Sheet
                    </Typography>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                        // TODO: ensure the [user.name] below still works when we have DB connection
                    >
                        Welcome [user.name]!
                    </Typography>
                </Stack>
                <Searchbox />
                <Button
                    color="inherit"
                    href="/"
                    sx={{ position: "fixed", right: 10, height: 80 }}
                >
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
