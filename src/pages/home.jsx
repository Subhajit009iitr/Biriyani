import React from 'react';
import { useTheme } from '@mui/material/styles';
import Cover from "../components/covers/cover";
import HomeBody from '../components/covers/homeBody';
import NavBar from '../components/navbars/nav';

function Home() {
  const theme = useTheme();

  return (
    <div>
        <NavBar/>
        <Cover/>
        <HomeBody/>
    </div>
  );
}

export default Home;