import { Grid } from "@mui/material";
import { LandingPage } from "./landingpage";
import { GridImg } from "./grid";
import { AboutUs } from "./aboutus";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { GridMob } from "./mobileGrid";
import { MobileLandingPage } from "./mobilelanding";


export function MainPage(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return(
        <>
        {isMobile ? <MobileLandingPage/> : <LandingPage/> }
        {/* <LandingPage></LandingPage> */}
        {isMobile ? <GridMob /> : <GridImg />}
        {/* <GridMob></GridMob> */}
        {/* <GridImg></GridImg> */}
        </>
    )
}