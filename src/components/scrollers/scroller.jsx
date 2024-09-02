import React, { useRef, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ScrollLeftButton, ScrollRightButton } from '../buttons/scroll';
import ScrollableCard from '../cards/card';
import image5 from '../../assets/pic5.png';

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

  const cards = [
    {
      title: 'Card 1',
      imageURL: image5,
      date: '2024-09-02',
      time: '10:00 AM',
      rating: 4.5
    },
    {
      title: 'Card 2',
      imageURL: image5,
      date: '2024-09-03',
      time: '11:00 AM',
      rating: 4.0
    },
    {
      title: 'Card 3',
      imageURL: image5,
      date: '2024-09-04',
      time: '12:00 PM',
      rating: 4.2
    },
    {
      title: 'Card 4',
      imageURL: image5,
      date: '2024-09-05',
      time: '01:00 PM',
      rating: 4.7
    },
    {
      title: 'Card 5',
      imageURL: image5,
      date: '2024-09-06',
      time: '02:00 PM',
      rating: 4.9
    },
    {
      title: 'Card 1',
      imageURL: image5,
      date: '2024-09-02',
      time: '10:00 AM',
      rating: 4.5
    },
    {
      title: 'Card 2',
      imageURL: image5,
      date: '2024-09-03',
      time: '11:00 AM',
      rating: 4.0
    },
    {
      title: 'Card 3',
      imageURL: image5,
      date: '2024-09-04',
      time: '12:00 PM',
      rating: 4.2
    },
    {
      title: 'Card 4',
      imageURL: image5,
      date: '2024-09-05',
      time: '01:00 PM',
      rating: 4.7
    },
    {
      title: 'Card 5',
      imageURL: image5,
      date: '2024-09-06',
      time: '02:00 PM',
      rating: 4.9
    }
    
    
    // Add more cards as needed
  ];
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
        {cards.map((card, index) => (
  
          <ScrollableCard
            key={index}
            title={card.title}
            imageURL={card.imageURL}
            date={card.date}
            time = {card.time}
            rating = {card.rating}
            onClick={() => alert(`${card.title} clicked`)} 
            />
          
        ))}
      </Box>

      {canScrollRight && <ScrollRightButton onClick={scrollRight} />}
    </Box>
  );
}

export default HorizontalScrollable;
