import { Box } from '@mui/material';
import './index.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import ReactPlayer from 'react-player';


gsap.registerPlugin(useGSAP, ScrollTrigger);

export function LandingPage() {

   
    useGSAP(() => {
        const t1 = gsap.timeline();
        t1.from(".c2", { xPercent: -100 })
            .from(".c3", { xPercent: 100 })
            // .from(".c4", { xPercent: -100 })

        ScrollTrigger.create({
            animation: t1,
            trigger: ".top",
            start: 'center center',
            // markers:true,
            scrub: 2,
            pin: true,
            end:'+=2000',
            pinSpacing: true,
        })
    })
    return (
        <Box>
            <Box className='sq2' sx={{backgroundColor:'background.default'
        
        }}></Box>
            <Box className='top'>
                <Box className='c1'>
                    <img src='/assets/bolderpana.jpg'></img>
                    <Box className='centered-text' sx={{color:'text.primary',}}> BOULDER.</Box>
                </Box>

                <Box className='c2' sx={{backgroundColor:'background.default'}}>
                   
                    <img src='/assets/pickleball.jpg'></img>
                    <Box className='centered-text' sx={{color:'text.primary',}}> PLAY</Box>
                </Box>

                <Box className='c3' sx={{backgroundColor:'background.default'}}>
                <ReactPlayer
                        url={`/assets/202004-916894674.mp4`}
                        controls={false}
                        autoPlay={true}
                        loop={true}
                        playing
                        muted
                        width="100%"
                        height="100%"
                    >
                    </ReactPlayer>
                    {/* <img src='./src/assets/img3.jpg'></img> */}
                    <Box className='centered-text' sx={{color:'text.primary',}}>EAT.</Box>
                </Box>


                {/* <Box className='c4'>
                    <img src='./src/assets/img1.jpg'></img></Box> */}

            </Box>
            <Box className='sq2' sx={{backgroundColor:'background.default'}}></Box>
        </Box>

    )
}