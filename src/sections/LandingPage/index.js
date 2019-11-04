import React from 'react';

import './index.css';

function LandingPage() {
  return (
    <div className='LandingPage'>
      <div className='LandingPage__content LandingPage__conferenceName'>
        LASD@SAC'21
      </div>
      <div className='LandingPage__content'>
        Track on <strong>Lean and Agile Software Development </strong>
        <div>at the <a className='LandinPage__hyperlink' href='https://www.sigapp.org/sac/sac2020/'>36th ACM Symposium on Applied Computing</a></div>
      </div>
      <div className='LandingPage__content'>April 8 - 12, 2021 Cyprus </div>
      <div className='LandingPage__background'></div>
    </div>
  );
}

export default LandingPage;