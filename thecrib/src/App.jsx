import { useState, useRef, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { LandingPage } from './landingpage'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { green, red } from '@mui/material/colors'
import { gsap } from 'gsap/gsap-core'
import { useGSAP } from '@gsap/react'
import { GridImg } from './grid'
import { useCustomTheme } from './themeContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { ComingSoon } from './comingsoon'
import { MainPage } from './MainPage'
import { FooterSection } from './footer'
import { Bookings } from './bookings'
import { setMediaAssets, fetchMediaAssets } from './firebasedatafetch'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { InlineWidget } from "react-calendly";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';




function App() {
  const [hideAppBar, setHideAppBar] = useState(false);
  const [istheme, setTheme] = useState(true);
  const { toggleTheme, mode } = useCustomTheme();
  const [Open, setOpen] = useState(false);
  const theme = useTheme();
  const fullscreen = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    navigate('/')
  };
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setHideAppBar(scrollY > 2100); // hide if scrolled more than 100px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const [count, setCount] = useState(0)
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {

    const t = gsap.timeline({ repeat: -1 });

    t.set([".input1", ".input2", ".input3", ".input4"], { opacity: 0 }) // reset all

      .to(".input1", { opacity: 1, duration: 2 })          // show input1
      .to(".input1", { opacity: 0, duration: 1, delay: 1 })// hide input1

      .to(".input2", { opacity: 1, duration: 2 })          // show input2
      .to(".input2", { opacity: 0, duration: 1, delay: 1 })// hide input2

      .to(".input3", { opacity: 1, duration: 2 })          // show input3
      .to(".input3", { opacity: 0, duration: 1, delay: 1 })// hide input3

    // .to(".input4", { opacity: 1, duration: 0.5 })          // show input3
    // .to(".input4", { opacity: 0, duration: 0.5, delay: 1 })// hide input3
  });
  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'auto',
      scrollbarWidth: 'none',         // Firefox
      msOverflowStyle: 'none',        // Edge
      '&::-webkit-scrollbar': {
        display: 'none',              // Chrome/Safari
      },
    }}
    ><AppBar position='fixed' sx={{
      backgroundColor: 'transparent',
      zIndex: 2,
      boxShadow: 'none',
      transform: hideAppBar ? 'translateY(-100%)' : 'translateY(0)',
      transition: 'transform 0.4s ease-in-out',
    }}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',           // ❗️center horizontally
            gap: 1,
            backgroundColor: 'transparent',
            paddingTop: 2,
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',        // ❗️stack items vertically
              alignItems: 'center',           // ❗️center horizontally og color used '#F8F8F8'
              gap: 1,
              paddingTop: 2,
            }}
          >
            <Box style={{ display: 'flex', gap: '1em', alignContent: 'center', justifyContent: 'center' }} onClick={() => navigate('/')}>
              <Typography variant="h6" sx={{ color: 'text.primary', lineHeight: '32px', fontFamily: "'Francois One', sans-serif", fontSize: 40, }}>.the</Typography>
              <Box className='titleclass'>
                <Typography className='input1' variant="h6" sx={{ color: 'text.primary', lineHeight: '32px', fontFamily: "'Francois One', sans-serif", fontSize: 40 }}>CRIB</Typography>
                <Typography className='input2' variant="h6" sx={{ color: 'text.primary', lineHeight: '32px', fontFamily: "'Yatra One', cursive", fontSize: 40 }}>क्रिब</Typography>
                <Typography className='input3' variant="h6" sx={{ color: 'text.primary', lineHeight: '32px', fontFamily: "'Timmana', cursive", fontSize: 40, paddingTop: 2, }}>క్రిబ్</Typography>
                {/* <Typography className='input4' variant="h6" sx={{ color: '#F8F8F8', lineHeight: '32px',fontFamily: "'Tiro Devanagari Hindi', serif",fontSize:40 }}>КРИБ</Typography> */}
              </Box>
            </Box>
            <Typography
              variant="subtitle1"
              sx={{
                color: 'text.primary',
                fontSize: 15,
                fontFamily: 'Yatra One',
              }}
            >
              Climb | Eat | Paddle | Repeat
            </Typography>
          </Box>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                  <List>
                    <ListItem button onClick={() => navigate('/comingsoon')}>
                      <Typography
                        sx={{ color: 'text.primary', lineHeight: '32px', fontFamily: "'Francois One', sans-serif", fontSize: 15 }}
                      >Senor Spice</Typography>
                    </ListItem>
                    <ListItem button onClick={handleClickOpen}>
                      <Typography
                        sx={{ color: 'text.primary', lineHeight: '32px', fontFamily: "'Francois One', sans-serif", fontSize: 15 }}
                      >Book</Typography>
                    </ListItem>
                    <ListItem button onClick={() => navigate('/comingsoon')}>
                      <Typography
                        sx={{ color: 'text.primary', lineHeight: '32px', fontFamily: "'Francois One', sans-serif", fontSize: 15 }}
                      >The Crib Club</Typography>
                    </ListItem>
                    <ListItem button onClick={() => navigate('/comingsoon')}>
                      <Typography
                        sx={{ color: 'text.primary', lineHeight: '32px', fontFamily: "'Francois One', sans-serif", fontSize: 15 }}
                      >Merchandise</Typography>
                    </ListItem>
                    <ListItem button>
                      <Typography
                        sx={{ color: 'text.primary', lineHeight: '32px', fontFamily: "'Francois One', sans-serif", fontSize: 15 }}
                      >Join the club</Typography>
                    </ListItem>
                    <ListItem button onClick={toggleTheme}>
                      <Typography
                        sx={{ color: 'text.primary', lineHeight: '32px', fontFamily: "'Francois One', sans-serif", fontSize: 15 }}
                      >Theme</Typography>
                    </ListItem>

                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <>
              <Box sx={{ display: 'flex' }}>
                <Button onClick={() => navigate('/comingsoon')}>
                  <Typography
                    sx={{ color: 'text.primary', lineHeight: '32px', fontFamily: "'Francois One', sans-serif", fontSize: 15 }}
                  >Senor Spice</Typography>
                </Button>
                <Button

                  onClick={handleClickOpen}
                >
                  <Typography
                    sx={{ color: 'text.primary', lineHeight: '32px', fontFamily: "'Francois One', sans-serif", fontSize: 15 }}
                  >Book</Typography>
                </Button>

                <Button
                  onClick={() => navigate('/comingsoon')}
                >
                  <Typography
                    sx={{ color: 'text.primary', lineHeight: '32px', fontFamily: "'Francois One', sans-serif", fontSize: 15 }}
                  >The Crib Club</Typography>
                </Button>
                <Button onClick={() => navigate('/comingsoon')}>
                  <Typography
                    sx={{ color: 'text.primary', lineHeight: '32px', fontFamily: "'Francois One', sans-serif", fontSize: 15 }}
                  >Merchandise</Typography>
                </Button>

              </Box>
              <Box sx={{ display: 'flex' }}>
                <Button>
                  <Typography
                    sx={{ color: 'text.primary', lineHeight: '32px', fontFamily: "'Francois One', sans-serif", fontSize: 15 }}
                  >Join the club</Typography>
                </Button>
                <Button
                  onClick={toggleTheme}
                >
                  <Typography
                    sx={{ color: 'text.primary', lineHeight: '32px', fontFamily: "'Francois One', sans-serif", fontSize: 15 }}
                  >Theme</Typography>
                </Button>


              </Box></>
          )}

        </Toolbar>
      </AppBar>
      {/* <GridImg></GridImg> */}
      <Box sx={{ flex: 1 }}>
        <Routes>
          <Route path='/' element={<MainPage></MainPage>}></Route>
          <Route path="/comingsoon" element={<ComingSoon></ComingSoon>} > </Route>
          <Route path="/bookings" element={<Bookings></Bookings>}></Route>
        </Routes>
      </Box>
      <FooterSection></FooterSection>
      {/* <LandingPage></LandingPage> */}
      {/* <Box sx={{ height: "500px", backgroundColor: 'transparent' }}></Box> */}
      <Dialog
        fullScreen={fullscreen}
        open={Open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>
          <Typography
            sx={{ color: 'text.primary', lineHeight: '32px', fontFamily: "'Francois One', sans-serif", fontSize: 15 }}>
            Book any Slot you Want! We wont Slot Shame you! </Typography>
        </DialogTitle>
        <DialogContent sx={{ overflow: 'hidden' }}>
          <InlineWidget
            url="https://calendly.com/thecrib-nagpur"
            styles={{ height: '600px', width: '100%' }}
          />
        </DialogContent>
      </Dialog>

    </Box>

  )
}

export default App
