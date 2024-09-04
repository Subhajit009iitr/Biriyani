import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import HorizontalScrollable from '../scrollers/scroller';
import ScrollerHeader from '../header/scrollerHeader';
import RenderCards from '../cards/renderCard';
import { setPageContent } from '../../slices/bodySlice';

function Body() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { page, content } = useSelector((state) => state.body);

  const handleSeeMore = (section) => {
    dispatch(setPageContent(section));
  };

  const handleCollapse = () => {
    dispatch(setPageContent('home'));
  };

  return (
    <div style={{ backgroundColor: theme.palette.background.main }}>
      {page === 'home' && content.map((section, index) => (
        <div key={index}>
          <ScrollerHeader title={section.title} onSeeMore={() => handleSeeMore(section.name)} />
          <HorizontalScrollable items={section.items} />
        </div>
      ))}
      {page !== 'home' && (
        <div>
          <button 
            onClick={handleCollapse} 
            style={{ 
              marginBottom: '16px',
              backgroundColor: '#39C9F9',
              color: '#fff',
              border: 'none',
              padding: '8px 16px',
              cursor: 'pointer',
              borderRadius: '4px'
            }}
          >
            Back
          </button>
          <RenderCards cardList={content.find(section => section.name === page)?.items || []} />
        </div>
      )}
    </div>
  );
}

export default Body;
