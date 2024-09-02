import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, IconButton, Box, Stack } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ShareIcon from '@mui/icons-material/Share';

const AnimeCard = () => {
  return (
    <Card sx={{ width: 362, bgcolor: '#2D2D2D', borderRadius: 2 }}>
      <CardMedia
        component="img"
        height="205"
        width="362"
        image="https://m.media-amazon.com/images/S/pv-target-images/d3de6e39bb2d551388053c7ea0f3ad9ad1a417daf29317ac0b37c80fe30749a4.jpg" // Replace with your image URL
        alt="That Time I Got Reincarnated as a Slime"
      />
      <CardContent sx={{ color: 'white' }}>
        <Typography variant="h6" gutterBottom>
          That Time I Got Reincarnated as a Slime
        </Typography>
        <Button variant="contained" sx={{ width: '100%', mb: 2 }}>
          Play
        </Button>
        <Stack direction="row" justifyContent="space-between">
          <IconButton sx={{ color: 'white' }}>
            <AddCircleOutlineIcon />
          </IconButton>
          <IconButton sx={{ color: 'white' }}>
            <CalendarTodayIcon />
          </IconButton>
          <IconButton sx={{ color: 'white' }}>
            <ShareIcon />
          </IconButton>
        </Stack>
        <Box sx={{ mt: 2, color: 'rgba(255, 255, 255, 0.7)', textAlign: 'left' }}>
          <Typography variant="body2">2012</Typography>
          <Typography variant="body2">21h 14m</Typography>
          <Typography variant="body2">U/A 16+</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AnimeCard;
