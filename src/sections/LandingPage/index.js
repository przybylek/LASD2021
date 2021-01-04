import React from 'react';

import './index.css';

function LandingPage() {
  return (
    <div className='LandingPage'>
      <div className='LandingPage__content LandingPage__conferenceName'>
        LASD 2021
      </div>
      <div className='LandingPage__content'>
        5th International Conference on <strong>Lean and Agile Software Development </strong>
      </div>
      <div className='LandingPage__content'>23 January, 2021, Online event<sup>*</sup></div>
      <div className='LandingPage__content LandingPage__Online'><sup>*</sup>The conference will consist of pre-recorded presentations, live keynotes and Q&A sessions</div>
      <div className='LandingPage__content  LandingPage__Fee'>Free of charge, with Springer LNBIP proceedings!</div>
      <div className='LandingPage__content  LandingPage__Reward'>Corresponding authors of 20 top-rated accepted papers will get complimentary 1 year membership in <a className='LandinPage__url' href='https://www.agilealliance.org'>Agile Alliance</a>!</div>
      <div className='LandingPage__background'></div>
    </div>
  );
}

export default LandingPage;

//  <div>at the <a className='LandinPage__hyperlink' href='https://www.sigapp.org/sac/sac2020/'>36th ACM Symposium on Applied Computing</a></div>