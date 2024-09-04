import React from 'react';
import AnimeCard from './animeCard';
import { useTheme } from '@mui/material/styles';

function RenderCards({ cardList }) {
  const theme = useTheme();

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: theme.spacing(2) }}>
      {cardList.map((title, index) => (
        <AnimeCard key={index} title={title} onClick={() => alert(`${title} clicked`)} />
      ))}
    </div>
  );
}

export default RenderCards;
