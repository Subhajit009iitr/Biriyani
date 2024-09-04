import React from 'react';
import ScrollableCard from './card';
import { useTheme } from '@mui/material/styles';

function RenderCards({ cardList = [], onCardClick }) {
  const theme = useTheme();

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: theme.spacing(2) }}>
      {cardList.map((card, index) => (
        <ScrollableCard 
          key={index} 
          title={card.title} 
          imageURL={card.imageURL} 
          date={card.date} 
          time={card.time} 
          rating={card.rating}
          onClick={() => onCardClick(card)}
        />
      ))}
    </div>
  );
}

export default RenderCards;
