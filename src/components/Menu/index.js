import React from 'react';
import MenuButton from 'components/Menu/MenuButton';
import { Link } from 'react-scroll';
import { menuItems } from './menuItems';

import './index.css'

function Menu() {
  return (
    <div className='Menu'>
      {menuItems.map(item => {
        return (
          <Link activeClass='active' to={item.scrollTo} offset={-50} spy={true} smooth={true} duration={500} >
            <MenuButton text={item.text} />
          </Link>
        );
      })}
    </div>
  )
}

export default Menu;