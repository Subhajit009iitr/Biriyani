import React from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import HorizontalScrollable from '../components/scrollers/scroller';
import Cover from "../components/covers/cover"

function Home() {
  const theme = useTheme();

  return (
    <div>
      {/* <div style={{ 
        backgroundColor: theme.palette.background.main, 
        padding: theme.spacing(2) 
      }}>
        <Typography variant="h1" style={{ color: theme.palette.primary.main }}>
          Hello, World!
        </Typography>
        </div> */}
        <Cover/>
        <div style={{backgroundColor: theme.palette.background.main}}>
          <div>
          <Typography variant="h3" style={{ color: theme.palette.primary.white,
              textAlign: 'left',
              paddingLeft: '4vw'
           }}>
            Continue Watching
          </Typography>
            <HorizontalScrollable/>
          </div>
          <div>
          <Typography variant="h3" style={{ color: theme.palette.primary.white,
              textAlign: 'left',
              paddingLeft: '4vw'
           }}>
            Trending
          </Typography>
            <HorizontalScrollable/>
          </div>
          <div>
          <Typography variant="h3" style={{ color: theme.palette.primary.white,
              textAlign: 'left',
              paddingLeft: '4vw'
           }}>
            Recommended
          </Typography>
            <HorizontalScrollable/>
          </div>
          <div>
          <Typography variant="h3" style={{ color: theme.palette.primary.white,
              textAlign: 'left',
              paddingLeft: '4vw'
           }}>
            Action
          </Typography>
            <HorizontalScrollable/>
          </div>
        </div>
    </div>
  );
}

export default Home;