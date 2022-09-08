import React from "react";
import {useState} from "react";
import { styled, useTheme } from '@mui/material/styles';
import {AppBar, Box, CssBaseline, Toolbar, useMediaQuery} from '@mui/material';
import Header from "./Header";
import {Outlet} from "react-router-dom";
import {drawerWidth} from "../../store/constant";


// styles

export const shiftContent = 287;




interface IMain{
    theme?:any;
    open:boolean;
}
// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })((props:IMain) => ({
    ...props.theme.typography.mainContent,
    ...(!props.open && {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        transition: props.theme.transitions.create('margin', {
            easing: props.theme.transitions.easing.sharp,
            duration: props.theme.transitions.duration.leavingScreen
        }),
        [props.theme.breakpoints.up('md')]: {
            marginLeft: -(drawerWidth - 20),
            width: `calc(100% - ${drawerWidth}px)`
        },
        [props.theme.breakpoints.down('md')]: {
            marginLeft: '20px',
            width: `calc(100% - ${drawerWidth}px)`,
            padding: '16px'
        },
        [props.theme.breakpoints.down('sm')]: {
            marginLeft: '10px',
            width: `calc(100% - ${drawerWidth}px)`,
            padding: '16px',
            marginRight: '10px'
        }
    }),
    ...(props.open && {
        transition: props.theme.transitions.create('margin', {
            easing: props.theme.transitions.easing.easeOut,
            duration: props.theme.transitions.duration.enteringScreen
        }),
        marginTop:90,
        marginLeft: 20,
        marginRight:20,
        padding:16,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        height: '100%',
        backgroundColor:'rgb(26, 34, 63)',
        width: `calc(100% - ${0}px)`,
        [props.theme.breakpoints.down('md')]: {
            marginLeft: '20px'
        },
        [props.theme.breakpoints.down('sm')]: {
            marginLeft: '10px'
        }
    })
}));

interface IMainProps {
    children?: any;
    className?: string;
}



const MainLayout = (props:IMainProps) => {

    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));

    const [leftDrawerOpened, setLeftDrawerOpened]= useState(true)
    const handleLeftDrawerToggle = () => {
        setLeftDrawerOpened(!leftDrawerOpened );
    };
    return (
        <Box sx={{ display: 'flex', height:'100%' }}>
            <CssBaseline />
            {/* header */}
            <AppBar
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={0}
               /* sx={{
                    bgcolor: theme.palette.background.default,
                    transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
                }}*/
            >
                <Toolbar>
                    <Header  />
                </Toolbar>
            </AppBar>



            {/* main content */}

            <Main theme={theme} open={true}>

                <Outlet />
            </Main>
           {/* <Customization />*/}
        </Box>
    );
}



export default MainLayout;
