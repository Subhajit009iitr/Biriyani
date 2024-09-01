import React from 'react';
import { useTheme } from '@mui/material/styles';
import HorizontalScrollable from '../components/scrollers/scroller';
import Cover from "../components/covers/cover";
import ScrollerHeader from '../components/header/scrollerHeader';

function Home() {
  const theme = useTheme();

  return (
    <div>
        <Cover/>
        <div style={{backgroundColor: theme.palette.background.main}}>
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
    </div>
  );
}

export default Home;