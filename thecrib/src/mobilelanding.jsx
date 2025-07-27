import { Box, Typography } from '@mui/material';
import './index.css';

export function MobileLandingPage() {
  return (
    <Box>
      <Box className='top'>
        <Box className='c1' sx={{ position: 'relative' }}>
          <img
            src='/assets/bolderpana.jpg'
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            alt="The Crib"
          />
          <Box
            className='centered-text'
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              fontSize: '2rem',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            THE CRIB
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
