
import { useState,useEffect,useRef } from "react";
// import videos from './videos';
import ReactPlayer from 'react-player';
import './grid.css';
import { Box } from "@mui/material";
import { fetchMediaAssets } from "./firebasedatafetch";

export function GridImg(){
    const galleryref = useRef(null);
    const [items,setItems]= useState([]);

    useEffect(()=>{
        
        const generateItems = async () =>{
            const videos = await fetchMediaAssets();
            const rows =[
                { id:1 , count:6},
                { id:2 , count:5},
                { id:3 , count:6},
                { id:4 , count:5}
            ];
            const newItems = rows.map((row)=>{
                return Array.from({length: row.count},(_,index)=>{
                    const itemId = `${row.id}-${index}`;
                    const video = videos.find((v)=> v.id === itemId);
                    return {
                        id:itemId,
                        rowId: row.id,
                        video: video,
                    }
                })
            });
setItems(newItems);
        };
        generateItems();

        const handleMouseMove = (e) =>{
            const { clientX, clientY, currentTarget }=e;
            const {width, height} = currentTarget.getBoundingClientRect();
            const centerX = width/2
            const centerY = height/2
            const sensitivity = 1;
            const deltaX = (centerX - clientX)/sensitivity;
            const deltaY = (centerY - clientY)/sensitivity;

            galleryref.current.style.transform = `translate( calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px))`;
        };

        const container = document.querySelector(".container");
            container.addEventListener("mousemove",handleMouseMove);

            return () => {
                container.removeEventListener("mousemove",handleMouseMove)
            }
    },[])

return(
    <>
    <Box className="container" sx={{backgroundColor:'background.default',
 overflow: 'auto',
 scrollbarWidth: 'none',         // Firefox
 msOverflowStyle: 'none',        // Edge
 '&::-webkit-scrollbar': {
   display: 'none',              // Chrome/Safari
 },
}}>
        <Box className="gallery" ref={galleryref}>
            {items.map((row,rowIndex)=>(
                <Box key={`row-${rowIndex}`} className="row">
                    {row.map((item)=>(
                        <Box key={item.id} className="item">
                            <Box className="preview-img"> 
                            <img src={item.video.previewImage} alt={item.video.videoName}></img>
                            </Box>
                            <p id="videoName">{item.video.videoName}</p>
                            <Box className="video-wrapper">
                                {item.video && (
                                    <>
                                    <ReactPlayer
                                    url={`https://vimeo.com/${item.video.videoId}`}
                                    controls={false}
                                    autoPlay={true}
                                    loop={true}
                                    playing
                                    muted
                                    width="100%"
                                    height="100%"
                                    >
                                    </ReactPlayer>
                                    </>
                                )}
                            </Box>
                        </Box>
                    )
                    )}

                </Box>
            ))}
        </Box>
    </Box>
    </>
)
}