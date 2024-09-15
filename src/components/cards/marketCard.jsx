import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function MarketCard({ imageURL, title, description }) {
  const theme = useTheme();

  return (
    <Card sx={{ width: '50%', margin: theme.spacing(1), maxWidth: 200 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <img 
          src={imageURL} 
          alt={title} 
          style={{ width: '100%', height: 150, objectFit: 'cover' }} 
        />
        <CardContent>
          <Typography variant="h6" component="div" sx={{ textAlign: 'center', marginBottom: theme.spacing(1) }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            {description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export default MarketCard;
