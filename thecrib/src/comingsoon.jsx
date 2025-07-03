import { Typography } from "@mui/material";
import {Box} from "@mui/material";


export function ComingSoon(){
    return(
        <>
        <Box className='sq2' sx={{backgroundColor:'background.default',overflow:"hidden"}}></Box>
        <Box sx={{backgroundColor:'Background.default', width:'100vw',height:'100vh', display:'flex',justifyContent:'center',alignContent:'center'}}>
        <Typography sx={{color:'text.primary',fontFamily: "'Francois One', sans-serif", fontSize: 40,}}>
            COMING SOON !
        </Typography>
        </Box>
        <Box className='sq2' sx={{backgroundColor:'background.default'}}></Box>
        </>
    )
}