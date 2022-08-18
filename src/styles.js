import {
    Paper,
}
from "@mui/material";
import { styled } from '@mui/material/styles';
 
 export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#ccc',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
}));