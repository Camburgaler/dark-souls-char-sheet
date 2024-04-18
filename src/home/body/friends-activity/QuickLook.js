import { Box, Button, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { BASE_PATH, CHARACTER_PATH } from "../../../constants";
import { findUsername } from "../../../utilities";

function QuickLook(props) {
    const user = useSelector((state) => state.user);
    let friends = [];
    require("../../../data/account_friends.json")
        .filter((entry) => {
            return (entry.requestor === user.uuid ||
                entry.recipient === user.uuid) &&
                entry.accepted
                ? entry
                : null;
        })
        .forEach((entry) => {
            entry.requestor === user.uuid
                ? friends.push(entry.recipient)
                : friends.push(entry.requestor);
        });

    return (
        <Box>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h5">Quick Look</Typography>
                </Grid>
                <Grid item xs={12}>
                    {friends.map((uuid, index) => (
                        <Box key={index}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography>
                                        {findUsername(uuid)}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    {require("../../../data/characters.json")
                                        .filter((entry) => {
                                            return entry.account === uuid
                                                ? entry
                                                : null;
                                        })
                                        .map((entry, index) => (
                                            <Box key={index}>
                                                <Button
                                                    fullWidth
                                                    sx={{
                                                        textTransform: "none",
                                                    }}
                                                    href={
                                                        BASE_PATH +
                                                        CHARACTER_PATH +
                                                        "/" +
                                                        entry.uuid
                                                    }
                                                >
                                                    {entry.name}
                                                </Button>
                                            </Box>
                                        ))}
                                </Grid>
                            </Grid>
                        </Box>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
}

export default QuickLook;
