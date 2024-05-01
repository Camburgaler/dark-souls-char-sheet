import { TextField } from "@material-ui/core";
import { Item } from "../../styles";

function FeaturesAndTraits() {
    return(
        <Item>
            <TextField label={"Features & Traits"} fullWidth multiline variant={"outlined"}></TextField>
        </Item>
    );
};

export default FeaturesAndTraits;

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
