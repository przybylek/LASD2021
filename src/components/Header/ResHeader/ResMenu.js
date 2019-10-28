import React from 'react';
import { menuItems } from 'components/Menu/menuItems';
import { Link } from 'react-scroll';

import './index.css'

function ResMenu() {
  return (
    <ul className='ResMenu'>
      {menuItems.map(item => {
        return (
          <Link activeClass='active' to={item.scrollTo} offset={-50} spy={true} smooth={true} duration={500} >
            <li>{item.text}</li>
          </Link>
        );
      })}
    </ul>
  );
}

export default ResMenu;