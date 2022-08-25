import { 
    Grid, 
    Typography 
} from "@mui/material";
import { Item } from "./styles";

function BloodiedAbility(props) {
    return(
        <Grid container direction={"column"} sx={{ border: "1px solid black" }}>
            <Grid item xs={12}>
                <Item>
                    <Typography>{props.character.bloodiedAbility}</Typography>
                </Item>
            </Grid>
            <Grid item xs={12}>
                <Item>
                    <Typography sx={{ maxHeight: "15px", fontSize: 15 }}>Bloodied Ability</Typography>
                </Item>
            </Grid>
        </Grid>
    );
}

export default BloodiedAbility;