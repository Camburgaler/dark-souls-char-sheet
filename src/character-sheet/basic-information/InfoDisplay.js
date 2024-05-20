import { FormControl, TextField } from "@mui/material";
import React from "react";

/**
 * Renders a form control for the character's name.
 *
 * @param {Object} props - The props object containing character data.
 * @param {Object} props.character - The character object.
 * @param {string} props.character.name - The character's name.
 * @return {JSX.Element} A form control with a text field for the character's name.
 */
function InfoDisplay(props) {
    return (
        <FormControl fullWidth>
            <TextField
                value={props.value}
                name={props.objectName}
                helperText={props.objectName}
                variant="outlined"
                disabled
            />
        </FormControl>
    );
}

export default InfoDisplay;
