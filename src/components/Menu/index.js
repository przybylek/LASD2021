import React from 'react';
import MenuButton from 'components/Menu/MenuButton';
import { Link } from 'react-scroll'

import './index.css'

const menuItems = [
  { scrollTo: 'aboutSection', text: 'About' },
  { scrollTo: 'topicsSection', text: 'Topics' },
  { scrollTo: 'paperSubmissionSection', text: 'Paper Submission' },
  { scrollTo: 'datesSection', text: 'Dates' },
  { scrollTo: 'chairsSection', text: 'Chairs' },
  { scrollTo: 'committiesSection', text: 'Commitites' },
  { scrollTo: 'pastConferenciesSection', text: 'Past Conferencies' }
]

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