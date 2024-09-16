import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// Poll Card Component
function PollCard({ question }) {
  return (
    <Card sx={{ marginBottom: '20px' }}>
      <CardContent>
        <Typography variant="h6">{question}</Typography>
      </CardContent>
    </Card>
  );
}

export default PollCard;
