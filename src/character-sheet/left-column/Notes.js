import { TextField } from "@mui/material";
import { Item } from "../../styles";

function Notes(props) {

    const handleChange = (event) => {
        props.character.notes = event.target.value;
    }

    return(
        <Item sx={{ border: "1px solid black" }}>
            <TextField label={"Notes"} onChange={handleChange} fullWidth multiline variant={"outlined"}></TextField>
        </Item>
    );
}

export default Notes;