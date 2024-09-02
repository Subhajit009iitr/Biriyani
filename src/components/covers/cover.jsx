import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import image1 from '../../assets/pic1.png';
import image2 from '../../assets/pic2.png';
import image3 from '../../assets/pic3.png';
import image4 from '../../assets/pic4.png';

const images = [image1, image2, image3, image4];

function Cover() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      style={{
        width: '100%',
        height: '72vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          style={{
            width: '100%',
            height: '75vh',
            objectFit: 'cover',
            objectPosition: 'top',
            position: index === currentIndex ? 'relative' : 'absolute',
            top: 0,
            left: 0,
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        />
      ))}

      <Box
        style={{
          position: 'absolute',
          bottom: '10rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '0.5rem',
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            style={{
              width: index === currentIndex ? '1.2rem' : '0.8rem',
              height: index === currentIndex ? '1.2rem' : '0.8rem',
              borderRadius: '50%',
              backgroundColor: index === currentIndex ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
              transition: 'all 0.3s ease-in-out',
              cursor: 'pointer',
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Cover;
