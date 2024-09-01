import React from 'react';
import { useTheme } from '@mui/material/styles';
import HorizontalScrollable from '../scrollers/scroller';
import ScrollerHeader from '../header/scrollerHeader';

function HomeBody() {
  const theme = useTheme();

  return (
    <div style={{
      background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1))`,
      height: '100vh',
      padding: theme.spacing(2),
      position: 'relative',
      zIndex: 1,
      marginTop: '-10vh',
      overflow: 'hidden'
    }}>
      <div>
        <ScrollerHeader title="Continue Watching" onSeeMore={{}}/>
        <HorizontalScrollable/>
      </div>
      <div>
        <ScrollerHeader title="Trending" onSeeMore={{}}/>
        <HorizontalScrollable/>
      </div>
      <div>
        <ScrollerHeader title="Recommended" onSeeMore={{}}/>
        <HorizontalScrollable/>
      </div>
      <div>
        <ScrollerHeader title="Action" onSeeMore={{}}/>
        <HorizontalScrollable/>
      </div>
    </div>
  );
}

export default HomeBody;
