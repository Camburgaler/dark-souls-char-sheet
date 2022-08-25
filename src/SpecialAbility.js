import { Button, Grid, Typography } from "@mui/material";
import { Item } from "./styles";

function SpecialAbility(props) {

    const specialAbilityError = props.character.specialAbility.expended >= props.character.specialAbility.uses;

    const handleClick = () => {
        if (specialAbilityError) {
    
        } else {
            props.character.specialAbility.expended++;
        }
    }

    return(
        <>
            <Grid container direction={"row"} sx={{ border: "1px solid black", maxHeight: "20px" }}>
                <Grid item xs={6}>
                    <Item>
                        <Typography sx={{ maxHeight: "20px", fontSize: 20 }}>{props.character.specialAbility.title}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                        <Typography sx={{ maxHeight: "20px", fontSize: 20 }}>{props.character.specialAbility.uses - props.character.specialAbility.expended}/{props.character.specialAbility.uses}</Typography>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                        <Button fullWidth onClick={handleClick} sx={{ maxHeight: "20px", fontSize: 20 }}>Use</Button>
                    </Item>
                </Grid>
            </Grid>
        </>
    );
}

export default SpecialAbility;