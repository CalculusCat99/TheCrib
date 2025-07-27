import { useState, useEffect } from "react";
import ReactPlayer from 'react-player';
import './grid.css';
import { Box } from "@mui/material";
import { fetchMediaAssets } from "./firebasedatafetch";

export function GridMob() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const generateItems = async () => {
      const videos = await fetchMediaAssets();
      const rows = [
        { id: 1, count: 6 },
        { id: 2, count: 5 },
        { id: 3, count: 6 },
        { id: 4, count: 5 }
      ];
      const newItems = rows.flatMap((row) =>
        Array.from({ length: row.count }, (_, index) => {
          const itemId = `${row.id}-${index}`;
          const video = videos.find((v) => v.id === itemId);
          return {
            id: itemId,
            rowId: row.id,
            video: video,
          };
        })
      );
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
