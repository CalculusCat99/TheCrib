import { useState, useEffect } from "react";
import ReactPlayer from 'react-player';
import './grid.css';
import { Box } from "@mui/material";
import { fetchMediaAssets } from "./firebasedatafetch";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export function GridMob() {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    const generateItems = async () => {
      const videos = await fetchMediaAssets();
  
      // Shuffle videos randomly
      const shuffled = videos.sort(() => 0.5 - Math.random());
  
      // Take first 6
      const selected = shuffled.slice(0, 6);
  
      // Assign each item a unique id and rowId (not used for layout but preserved)
      const newItems = selected.map((video, index) => ({
        id: `video-${index}`,
        rowId: Math.floor(index / 3) + 1, // optional grouping logic
        video,
      }));
  
      setItems(newItems);
    };
  
    generateItems();
  }, []);
  
  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        overflowY: 'auto',
        padding: '1em',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        display: 'flex',
        justifyContent: 'center', // centers horizontally
      }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5em',
        alignContent:'center',
        justifyContent:'center'
      }}>
        {items.map((item) => (
          <Box key={item.id} className="item" sx={{overflow: 'hidden' }}>
            <Box className="preview-img">
              <img src={item.video.previewImage} alt={item.video.videoName} style={{ width: '100%',}} />
            </Box>
            <p id="videoName" style={{ marginTop: '0.5em', fontWeight: 'bold' }}>{item.video.videoName}</p>
            <Box className="video-wrapper" sx={{ marginTop: '0.5em' }}>
              {item.video && (
                <ReactPlayer
                  url={`https://vimeo.com/${item.video.videoId}`}
                  controls={false}
                  autoPlay={true}
                  loop={true}
                  playing
                  muted
                  width="100%"
                  height="100%"
                />
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
