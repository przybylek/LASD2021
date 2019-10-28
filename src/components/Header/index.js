import React from 'react';
import Menu from 'components/Menu';
import { Link } from 'react-scroll';

import ResHeader from 'components/Header/ResHeader';

import { conferenceName } from "constants/conferenceInfo";
import './index.css'

function Header() {
  return(
    <>
    <ResHeader />
    <div className='Header'>
      <Link activeClass='active' to='landingPage' offset={-50} spy={true} smooth={true} duration={500} >
        <div className='Header__conferenceName'>{conferenceName}</div>
      </Link>
      <Menu />
    </div>
    </>
  );
}

export default Header;
