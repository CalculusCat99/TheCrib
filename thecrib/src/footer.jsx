import { Box, Button, Typography } from '@mui/material';

export function FooterSection() {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100vw',
        height: '40px',
        backgroundColor: '#2E2E2E',
        alignItems: 'center', // vertical centering
        justifyContent: 'space-between', // space between logo and links
        px: 4, // horizontal padding
      }}
    >
      {/* Logo / Brand Name */}
      <Typography
        sx={{
          color: 'text.primary',
          lineHeight: '30px',
          fontFamily: "'Barlow', sans-seri",
          fontSize: 15,
          pl: 1,
        }}
      >
        all rights reserved.
      </Typography>
      <Typography
        sx={{
          color: 'text.primary',
          lineHeight: '30px',
          fontFamily: "'Barlow', sans-seri",
          fontSize: 15,
          pl: 1,
        }}
      >
        Write us at: meowmeow@crib.com
      </Typography>

      {/* Social Buttons */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button sx={{ color: 'text.primary', textTransform: 'none', px: 2 ,fontFamily: "'Barlow', sans-seri", fontSize: 15,}}
        component="a"
        href="https://www.instagram.com/thecrib.nagpur/"
        target="_blank"
        rel="noopener noreferrer"
        >
          <Typography>Instagram</Typography>
        </Button>

        <Button sx={{ color: 'text.primary', textTransform: 'none', px: 2,fontFamily: "'Barlow', sans-seri", fontSize: 15, }}>
          <Typography>Facebook</Typography>
        </Button>
      </Box>
    </Box>
  );
}
