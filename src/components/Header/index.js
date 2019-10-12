import React from 'react';
import Menu from 'components/Menu';

import './index.css'

function Header() {
  return(
    <div className='Header'>
      <div className='Header__conferenceName'>LASD@SAC'21</div>
      <Menu />
    </div>
  );
}

export default Header;
