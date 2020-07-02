import React from 'react';
import Header from 'components/Header';
import LandingPage from 'sections/LandingPage';
import About from 'sections/About';
import Section from 'components/Section';
import TopicsInterests from 'sections/TopicsInterests';
import Submissions from 'sections/Submissions';
import ImportantDates from 'sections/ImportantDates';
import Keynotes from 'sections/Keynotes';
import Program from 'sections/Program';
import Committee from 'sections/Committee';
import Chairs from 'sections/Chairs';
import Footer from 'sections/Footer';
import { Element } from 'react-scroll';

import './App.css';
import PastConferences from 'sections/PastConferences';

function App() {
  return (
    <div className='App'>
      <Header />
      <Element name='landingPage'>
        <LandingPage />
      </Element>
      <Element name='aboutSection'>
        <Section title='About' isSecondary><About /></Section>
      </Element>
      <Element name='topicsSection'>
        <Section title='Topics and Interests' isSecondary={false}><TopicsInterests /></Section>
      </Element>
      <Element name='submissionSection'>
        <Section title='Submissions' isSecondary><Submissions /></Section>
      </Element>
      <Element name='datesSection'>
        <Section title='Important Dates' isSecondary={false}><ImportantDates /></Section>
      </Element>
      <Element name='keynotesSection'>
        <Section title='Keynote Speakers' isSecondary><Keynotes /></Section>
      </Element>
      <Element name='programSection'>
        <Section title='Program' isSecondary={false}><Program /></Section>
      </Element>
      <Element name='chairsSection'>
        <Section title='Chairs' isSecondary><Chairs /></Section>
      </Element>
      <Element name='committiesSection'>
        <Section title='Program Committee' isSecondary={false}><Committee /></Section>
      </Element>
      <Element name='pastConferenciesSection'>
        <Section title='Past Conferences' isSecondary><PastConferences /></Section>
      </Element>
      <Footer />
    </div>
  );
}

export default App;
