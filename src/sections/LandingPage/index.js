import React from 'react';

import './index.css';

function LandingPage() {
  return (
    <div className='LandingPage'>
      <div className='LandingPage__content LandingPage__conferenceName'>
        LASD 2020
      </div>
      <div className='LandingPage__content'>
        4th International Conference on <strong>Lean and Agile Software Development </strong>
      </div>
      <div className='LandingPage__content'>16 November, 2020, Online Streaming</div>
      <div className='LandingPage__background'></div>
    </div>
  );
}

export default LandingPage;

//  <div>at the <a className='LandinPage__hyperlink' href='https://www.sigapp.org/sac/sac2020/'>36th ACM Symposium on Applied Computing</a></div>