import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import HorizontalScrollable from '../scrollers/scroller';
import ScrollerHeader from '../header/scrollerHeader';
import RenderCards from '../cards/renderCard';
import { setPageContent, setSelectedEventCard, setActiveTab } from '../../slices/marketBodySlice';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';


function MarketplaceBody() {
  const dispatch = useDispatch();

  const { content } = useSelector((state) => state.marketplace);


  const theme = useTheme();
  const [expandedScroller, setExpandedScroller] = useState(null);

  const handleSeeMore = (scrollerName) => {
    setExpandedScroller(scrollerName);
  };

  const handleCollapse = () => {
    setExpandedScroller(null);
  };

  const handleCardClick = (card) => {
    console.log('Card clicked:', card);
    dispatch(setSelectedEventCard(card));
  };



  return (

    <div style={{ backgroundColor: theme.palette.background.main }}>
      {!expandedScroller && (content.map((section,index) => (

          <Box key={index} sx={{ marginBottom: theme.spacing(4) }}>
          <ScrollerHeader
            title={section.title}
            onSeeMore={() => handleSeeMore(section.name)}
            showSeeMore={true}
            />
          <HorizontalScrollable cardtype='event' items={section.items[0]}
          onCardClick={handleCardClick}
          />
        </Box>

      )
      )
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
          {/* <RenderCards cardList={cardList} /> */}
        </div>
      )}
    </div>
  );
}

export default MarketplaceBody;
