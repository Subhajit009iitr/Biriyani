import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import MarketPlace from './pages/marketplace';

import Card from './components/cards/card'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/card" element= {<Card/>}/>
      </Routes>
    </div>
  );
}

export default App;