import React from 'react';
import SlidingMenu from 'components/Menu/SlidingMenu';
import { conferenceName } from "constants/conferenceInfo";
import ResMenu from './ResMenu';

import './index.css'

function openClose() {
  return (
    <div>
      <span className='ham-bar' />
      <span className='ham-bar' />
      <span className='ham-bar' />
    </div>
  );
}

function ResHeader() {
  return (
    <nav role='navigation' className='ResHeader'>
      <SlidingMenu
        openClose={openClose()}
      >
        <ResMenu />
      </SlidingMenu>
      <div className='ResHeader__title'>{conferenceName}</div>
      <div></div>
    </nav>
  );
}

export default ResHeader;