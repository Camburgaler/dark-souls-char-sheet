import TextField from "@mui/material/TextField";
import { Item } from "../../styles";

function FeaturesAndTraits() {
    return (
        <Item>
            <TextField
                label={"Features & Traits"}
                fullWidth
                multiline
                variant={"outlined"}
            ></TextField>
        </Item>
    );
}

export default FeaturesAndTraits;
