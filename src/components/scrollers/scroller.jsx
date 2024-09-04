import React, { useRef, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ScrollLeftButton, ScrollRightButton } from '../buttons/scroll';
import AnimeCard from '../cards/animeCard';
import EventCard from '../cards/eventCard';
import image5 from '../../assets/pic5.png';
import { CardTravel, Diversity1 } from '@mui/icons-material';

function HorizontalScrollable({ cardtype }) {
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
    { title: 'Card 1', imageURL: image5, date: '2024-09-02', time: '2 hours', rating: 4.5, location: 'New York', tokenamount: 100 },
    { title: 'Card 2', imageURL: image5, date: '2024-09-03', time: '3 hours', rating: 4.0, location: 'Los Angeles', tokenamount: 150 },
    { title: 'Card 3', imageURL: image5, date: '2024-09-04', time: '1.5 hours', rating: 4.2, location: 'Chicago', tokenamount: 200 },
    { title: 'Card 4', imageURL: image5, date: '2024-09-05', time: '2.5 hours', rating: 4.7, location: 'Houston', tokenamount: 250 },
    { title: 'Card 5', imageURL: image5, date: '2024-09-06', time: '1 hour', rating: 4.9, location: 'Phoenix', tokenamount: 300 },
    { title: 'Card 1', imageURL: image5, date: '2024-09-02', time: '2 hours', rating: 4.5, location: 'New York', tokenamount: 100 },
    { title: 'Card 2', imageURL: image5, date: '2024-09-03', time: '3 hours', rating: 4.0, location: 'Los Angeles', tokenamount: 150 },
    { title: 'Card 3', imageURL: image5, date: '2024-09-04', time: '1.5 hours', rating: 4.2, location: 'Chicago', tokenamount: 200 },
    { title: 'Card 4', imageURL: image5, date: '2024-09-05', time: '2.5 hours', rating: 4.7, location: 'Houston', tokenamount: 250 },
    { title: 'Card 5', imageURL: image5, date: '2024-09-06', time: '1 hour', rating: 4.9, location: 'Phoenix', tokenamount: 300 }
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

        {(cardtype=='event') && cards.map((card, index) => (
          <EventCard
            key={index}
            title={card.title}
            imageURL={card.imageURL}
            date={card.date}
            time={card.time}
            location={card.location}
            tokenamount={card.tokenamount}
            onClick={() => alert(`${card.title} clicked`)}
            />
            
        ))}
        {(cardtype=='anime') && cards.map((card, index) => (
          <AnimeCard
            key={index}
            title={card.title}
            imageURL={card.imageURL}
            date={card.date}
            time={card.time}
            rating={card.rating}
            onClick={() => alert(`${card.title} clicked`)}
            />
            
        ))}
      </Box>
     
        
      {canScrollRight && <ScrollRightButton onClick={scrollRight} />}
    </Box>
  );
}

export default HorizontalScrollable;
