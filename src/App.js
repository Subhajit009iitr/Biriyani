import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import MarketPlace from './pages/marketplace';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/marketplace" element={<MarketPlace />} />
      </Routes>
    </div>
  );
}

export default App;