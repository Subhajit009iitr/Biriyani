import React from 'react';
import Cover from "../components/covers/cover";
import HomeBody from '../components/covers/homeBody';
import NavBar from '../components/navbars/nav';

function Home() {

  return (
    <div>
        <NavBar/>
        <Cover/>
        <HomeBody/>
    </div>
  );
}

export default Home;