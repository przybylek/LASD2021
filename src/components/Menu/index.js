import React from 'react';
import MenuButton from 'components/Menu/MenuButton';

import './index.css'

function Menu() {
  return (
    <div className='Menu'>
      <MenuButton text='About' onClick={()=>alert('About clicked')}/>
      <MenuButton text='Topics' onClick={()=>alert('Topics clicked')}/>
      <MenuButton text='Submission' onClick={()=>alert('Submission clicked')}/>
      <MenuButton text='Dates' onClick={()=>alert('Dates clicked')}/>
      <MenuButton text='Committes' onClick={()=>alert('Committes clicked')}/>
    </div>
  )
}

export default Menu;