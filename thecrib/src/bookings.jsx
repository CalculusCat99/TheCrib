import { Box, TextField, Typography,Button } from "@mui/material"



export function Bookings() {
    return (
        <Box>

            <Box className='sq2' sx={{
                backgroundColor: 'background.default'

            }}></Box>
        <Box sx={{paddingLeft:'4em'}}>
            <Typography variant="h1" sx={{ color: 'text.primary', lineHeight: '32px', fontFamily: "'Francois One', sans-serif", fontSize: 40, }}>Make the Bookings</Typography>
        </Box>
        <Box sx={{padding:'2em',margin:'2em'}}>
            <Box sx={{display:'flex', gap:'1em'}}>
                <TextField label='Name' name='name' required></TextField>
                <TextField label='Email' name='email' type="email"></TextField>
            </Box>
            <Box sx={{paddingTop:'2em'}}>
                <TextField label='Contact' name='contact'  required
                 type="tel"
                 inputProps={{
                   inputMode: 'numeric',      // mobile-friendly numeric keyboard
                   pattern: '[0-9]{10}',      // HTML5 pattern for exactly 10 digits
                   maxLength: 10              // limit to 10 characters
                 }}
                ></TextField>
                
            </Box>
       
        </Box>
        <Box sx={{padding:'2em',margin:'2em'}}>
        <Button>
            <Typography
            sx={{ color: 'text.primary', lineHeight: '32px', fontFamily: "'Francois One', sans-serif", fontSize:25, }}
            >Submit</Typography>
        </Button>
        </Box>

        </Box>
    )
}