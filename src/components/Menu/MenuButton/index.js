import React from 'react';
import { PropTypes } from 'prop-types';

import './index.css';

function MenuButton({text}) {
  return (
    <div className='MenuButton'>
      {text}
    </div>
  )
}

MenuButton.defaultProps = {
  text: '',
};

MenuButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MenuButton;
