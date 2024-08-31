import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
// import { useTheme } from '@mui/material/styles';

const images = [
  '../assets/pic1.png',
  '/mnt/d/Biriyani/src/assets/pic2.png',
  '/mnt/d/Biriyani/src/assets/pic3.png',
  '/mnt/d/Biriyani/src/assets/pic4.png',
];

function Cover() {
  const [currentIndex, setCurrentIndex] = useState(0);
//   const theme = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      style={{
        width: '100%',
        height: '60vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {images.map((image, index) => (
        <Box
          key={index}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
            position: index === currentIndex ? 'relative' : 'absolute',
            top: 0,
            left: 0,
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        />
      ))}
    </Box>
  );
}

export default Cover;
