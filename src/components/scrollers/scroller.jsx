import React, { useRef, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ScrollLeftButton, ScrollRightButton } from '../buttons/scroll';
import ScrollableCard from '../cards/card';

function HorizontalScrollable() {
  const theme = useTheme();
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
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
    const scrollContainer = scrollContainerRef.current;
    updateScrollButtons();
    scrollContainer.addEventListener('scroll', updateScrollButtons);
    return () => {
      scrollContainer.removeEventListener('scroll', updateScrollButtons);
    };
  }, []);

  const cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5', 'Card 6', 'Card 7', 'Card 8', 'Card 9', 'Card 10'];

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
          marginRight: '60px',
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
