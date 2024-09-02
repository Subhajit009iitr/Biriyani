import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import HorizontalScrollable from '../scrollers/scroller';
import ScrollerHeader from '../header/scrollerHeader';
import RenderCards from '../cards/renderCard';

function HomeBody() {
  const theme = useTheme();
  const [expandedScroller, setExpandedScroller] = useState(null);

  const handleSeeMore = (scrollerName) => {
    setExpandedScroller(scrollerName);
  };

  const handleCollapse = () => {
    setExpandedScroller(null);
  };

  const cardList = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5', 'Card 6', 'Card 7', 'Card 8', 'Card 9', 'Card 10']; // Remove Later

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
          <RenderCards cardList={cardList} />
        </div>
      )}
    </div>
  );
}

export default HomeBody;
