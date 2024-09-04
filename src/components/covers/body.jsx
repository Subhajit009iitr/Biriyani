import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import HorizontalScrollable from '../scrollers/scroller';
import ScrollerHeader from '../header/scrollerHeader';
import RenderCards from '../cards/renderCard';
import { setPageContent } from '../../slices/bodySlice';
import Box from '@mui/material/Box';

function Body() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { page, content } = useSelector((state) => state.body);

  const handleSeeMore = (section) => {
    dispatch(setPageContent(section));
  };

  const handleBack = () => {
    dispatch(setPageContent('home'));
  };

  return (
    <div style={{ backgroundColor: theme.palette.background.main, padding: theme.spacing(2) }}>
      {page === 'home' && content.map((section, index) => (
        <div key={index}>
          <ScrollerHeader 
            title={section.title} 
            onSeeMore={() => handleSeeMore(section.name)} 
            showSeeMore={true} 
          />
          <HorizontalScrollable items={section.items} />
        </div>
      ))}

      {page !== 'home' && (
        <Box>
          {content.find(section => section.name === page) && (
            <>
              <ScrollerHeader 
                title={content.find(section => section.name === page).title} 
                onSeeMore={handleBack} 
                showSeeMore={false}
              />
              <RenderCards 
                cardList={content.find(section => section.name === page)?.items || []} 
                onCardClick={(card) => {
                  // Handle card click if needed
                }}
              />
            </>
          )}
        </Box>
      )}
    </div>
  );
}

export default Body;
