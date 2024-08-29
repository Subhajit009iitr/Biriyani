import React from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

function Home() {
  const theme = useTheme();

  return (
    <div style={{ 
      backgroundColor: theme.palette.background.main, 
      padding: theme.spacing(2) 
    }}>
      <Typography variant="h1" style={{ color: theme.palette.primary.main }}>
        Hello, World!
      </Typography>
    </div>
  );
}

export default Home;