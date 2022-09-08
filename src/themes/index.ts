import { createTheme } from '@mui/material';
import { amber, deepOrange, grey } from '@mui/material/colors';


const dark= {
    // palette values for dark mode

    background: {
        default: 'rgb(17, 25, 54)',
        paper: 'rgb(17, 25, 54)',
    },
   /* divider: deepOrange[700],
    background: {
        default: deepOrange[900],
        paper: deepOrange[900],
    },
    text: {
        primary: '#fff',
        secondary: grey[500],
    },*/
}
export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        ...dark

    },
});
