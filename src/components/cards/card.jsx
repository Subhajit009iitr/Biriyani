import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function ScrollableCard({ title, onClick }) {
    const theme = useTheme();
  
    return (
      <Card
        style={{
          minWidth: 200, 
          margin: theme.spacing(1),
          cursor: 'pointer',
          textAlign: 'center',
        }}
        onClick={onClick}
      >
        <CardContent>
          <Typography variant="h5" style={{ color: theme.palette.primary.main }}>
            {title}
          </Typography>
        </CardContent>
      </Card>
    );
  }

  export default ScrollableCard;