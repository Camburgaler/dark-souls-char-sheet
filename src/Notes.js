import { TextField } from "@mui/material";
import { Item } from "./styles";

function Notes() {
    return(
        <Item>
            <TextField label={"Notes"} fullWidth multiline variant={"outlined"}></TextField>
        </Item>
    );
}

export default Notes;