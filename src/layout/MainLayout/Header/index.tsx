// material-ui
import {useTheme} from '@mui/material/styles';
import {Avatar, Box, ButtonBase, Typography} from '@mui/material';

// projectList imports


// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = () => {
    const theme = useTheme();

    return (
        <>
            {/* logo & toggler button */}
            <Box
                sx={{
                    width: 228,
                    display: 'flex',
                    [theme.breakpoints.down('md')]: {
                        width: 'auto'
                    }
                }}
            >
                <Box component="span" sx={{display: {xs: 'none', md: 'block'}, flexGrow: 1}}>
                    <Typography variant="h6">
                        Black MAMBA
                    </Typography>
                </Box>

            </Box>

            {/* header search

            <SearchSection />
            */}
            <Box sx={{flexGrow: 1}}/>
            <Box sx={{flexGrow: 1}}/>

            {/* notification & profile
            <NotificationSection />
            <ProfileSection />
            */}
        </>
    );
};


export default Header;
