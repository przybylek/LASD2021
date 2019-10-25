import React from 'react';
import Menu from 'components/Menu';
import { Link } from 'react-scroll'
import './index.css'

function Header() {
  return(
    <div className='Header'>
      <Link activeClass='active' to='landingPage' offset={-50} spy={true} smooth={true} duration={500} >
        <div className='Header__conferenceName'>LASD@SAC'21</div>
      </Link>
      <Menu />
    </div>
  );
}

export default Header;
