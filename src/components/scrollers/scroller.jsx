import React, { useRef, useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ScrollLeftButton, ScrollRightButton } from '../buttons/scroll';

// Example Card component acting as a button
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

// Horizontal Scrollable Container with Buttons
function HorizontalScrollable() {
  const theme = useTheme();
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth -1 );
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    updateScrollButtons();
    scrollContainerRef.current.addEventListener('scroll', updateScrollButtons);
    return () => {
      scrollContainerRef.current.removeEventListener('scroll', updateScrollButtons);
    };
  }, []);

  const cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5','Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5'];

  return (
    <Box position="relative" display="flex" alignItems="center">
      {canScrollLeft && <ScrollLeftButton onClick={scrollLeft} />}

      <Box
        ref={scrollContainerRef}
        display="flex"
        overflow="hidden"
        style={{
          whiteSpace: 'nowrap',
          scrollBehavior: 'smooth',
          width: '100%',
          padding: theme.spacing(1),
          marginLeft: '60px', 
          marginRight: '60px'
        }}
      >
        {cards.map((title, index) => (
          <ScrollableCard
            key={index}
            title={title}
            onClick={() => alert(`${title} clicked`)} 
          />
        ))}
      </Box>

      {canScrollRight && <ScrollRightButton onClick={scrollRight} />}
    </Box>
  );
}

export default HorizontalScrollable;
