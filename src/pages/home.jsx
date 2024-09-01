import React from 'react';
import { useTheme } from '@mui/material/styles';
import Cover from "../components/covers/cover";
import HomeBody from '../components/covers/homeBody';

function Home() {
  const theme = useTheme();

  return (
    <div>
        <Cover/>
        <HomeBody/>
    </div>
  );
}

export default Home;