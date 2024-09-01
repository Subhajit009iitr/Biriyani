import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';

function ScrollerHeader({ title, onSeeMore }) {
  const theme = useTheme();

  return (
    <Box 
      display="flex" 
      alignItems="center" 
      justifyContent="flex-start" 
      padding={theme.spacing(2)}
    >
      <Typography variant="h4" 
      style={{ 
        marginRight: theme.spacing(4),
        paddingLeft: theme.spacing(10),
        
      }}>
        {title}
      </Typography>
      <Button 
        onClick={onSeeMore} 
        style={{ 
          color: theme.palette.primary.contrastText, 
          textTransform: 'none',
          fontSize: theme.typography.button.fontSize 
        }}
      >
        See more &gt;
      </Button>
    </Box>
  );
}

export default ScrollerHeader;
