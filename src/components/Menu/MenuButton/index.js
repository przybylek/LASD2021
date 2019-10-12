import React from 'react';
import { PropTypes } from 'prop-types';

import './index.css';

function MenuButton({text, onClick}) {
  return (
    <div className='MenuButton' onClick={onClick}>
      {text}
    </div>
  )
}

MenuButton.defaultProps = {
  text: '',
};

MenuButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MenuButton;
