import React from 'react';
import Header from 'components/Header';

import './App.css';
import LandingPage from './components/LandingPage';
import About from './components/About';

function App() {
  return (
    <div className='App'>
      <Header />
      <LandingPage />
      <About />
    </div>
  );
}

export default App;
