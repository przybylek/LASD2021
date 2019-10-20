import React from 'react';
import Header from 'components/Header';
import LandingPage from 'sections/LandingPage';
import About from 'sections/About';
import Section from 'components/Section';
import TopicsInterests from 'sections/TopicsInterests';
import PaperSubmission from 'sections/PaperSubmission';
import ImportantDates from 'sections/ImportantDates';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <LandingPage />
      <Section title='About' isSecondary><About /></Section>
      <Section title='Topics and Interests' isSecondary={false}><TopicsInterests /></Section>
      <Section title='Paper submission' isSecondary><PaperSubmission /></Section>
      <Section title='Imprtanty Dates' isSecondary><ImportantDates /></Section>
    </div>
  );
}

export default App;
