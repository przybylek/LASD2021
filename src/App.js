import React from 'react';
import Header from 'components/Header';
import LandingPage from 'components/LandingPage';
import About from 'components/About';
import Section from 'components/Section';
import TopicsInterests from 'components/TopicsInterests';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <LandingPage />
      <Section title='About' isSecondary><About /></Section>
      <Section title='Topics and Interests' isSecondary={false}><TopicsInterests /></Section>
    </div>
  );
}

export default App;
