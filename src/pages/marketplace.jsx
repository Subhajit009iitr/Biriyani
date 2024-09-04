import React from 'react'
import Cover from "../components/covers/cover";
import NavBar from '../components/navbars/nav';
import MarketplaceBody from '../components/covers/marketplaceBody';

function MarketPlace() {
  return (
    <div>
      <NavBar />
      <Cover />
      <MarketplaceBody/>     
    </div>
  );
}

export default MarketPlace