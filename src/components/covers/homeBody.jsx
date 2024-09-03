import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import HorizontalScrollable from '../scrollers/scroller';
import ScrollerHeader from '../header/scrollerHeader';
import RenderCards from '../cards/renderCard';

function HomeBody({ onCardClick }) { 
  const theme = useTheme();
  const [expandedScroller, setExpandedScroller] = useState(null);

  const handleSeeMore = (scrollerName) => {
    setExpandedScroller(scrollerName);
  };

  const handleCollapse = () => {
    setExpandedScroller(null);
  };

  const cardList = [
    { title: 'Card 1', image: 0 },
    { title: 'Card 2', image: 1 },
    { title: 'Card 3', image: 2 },
    { title: 'Card 4', image: 3 },
    { title: 'Card 5', image: 0 },
    { title: 'Card 6', image: 1 },
    { title: 'Card 7', image: 2 },
    { title: 'Card 8', image: 3 },
    { title: 'Card 9', image: 0 },
    { title: 'Card 10', image: 1 },
  ]; // Updated cardList with image indices

  return (
    <div style={{ backgroundColor: theme.palette.background.main }}>
      {!expandedScroller && (
        <>
          <div>
            <ScrollerHeader title="Continue Watching" onSeeMore={() => handleSeeMore('continueWatching')} />
            <HorizontalScrollable />
          </div>
          <div>
            <ScrollerHeader title="Trending" onSeeMore={() => handleSeeMore('trending')} />
            <HorizontalScrollable />
          </div>
          <div>
            <ScrollerHeader title="Recommended" onSeeMore={() => handleSeeMore('recommended')} />
            <HorizontalScrollable />
          </div>
          <div>
            <ScrollerHeader title="Action" onSeeMore={() => handleSeeMore('action')} />
            <HorizontalScrollable />
          </div>
        </>
      )}
      {expandedScroller && (
        <div 
          style={{ 
            padding: theme.spacing(2),
            minHeight: '80vh', 
            maxHeight: '100vh', 
            overflowY: 'scroll',
            paddingRight: theme.spacing(1), 
          }}
        >
          <button 
            onClick={handleCollapse} 
            style={{ 
              marginBottom: theme.spacing(2),
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              border: 'none',
              padding: theme.spacing(1),
              cursor: 'pointer'
            }}
          >
            Back
          </button>
          <RenderCards cardList={cardList} onCardClick={onCardClick} />
        </div>
      )}
    </div>
  );
}

export default HomeBody;
