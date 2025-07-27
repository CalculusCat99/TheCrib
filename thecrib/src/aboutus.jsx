import { Box,Typography } from "@mui/material"

export function AboutUs(){
    return (
       <Box  sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center',padding:'2em'}}
       className="aboutus"
       >
        <Typography variant="h6" sx={{ color: 'text.primary', lineHeight: '32px', fontFamily: "'Francois One', sans-serif", fontSize: 40 }}>What is The Crib ?</Typography>
        <Typography sx={{ color: 'text.primary', lineHeight: '32px', fontFamily: "'Francois One', sans-serif", fontSize: 20 }}>
        The Crib is your new go-to indoor hangout spot — part chill zone, part adrenaline rush, and all good vibes. 
        We’ve mashed together bouldering walls, pickleball courts, and a Mexican café under one roof so you never 
        have to choose between fun, fitness, and food. Whether you're here to climb, compete, or just kick back with 
        tacos, The Crib is where the squad meets, the playlists hit, and the energy stays high.
        </Typography>
       </Box>
    )
}