import React from 'react';
import { PropTypes } from 'prop-types';

import './index.css'
function Button({text, onClickHandler, isSecondary}) {
  const buttonTypeStyle = isSecondary ? 'SecondaryButton' : 'PrimaryButton'
  return (
    <div className={`Button ${buttonTypeStyle}`} onClick={onClickHandler}>
      {text}
    </div>
  );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func.isRequired,
    isSecondary: PropTypes.bool.isRequired
}

export default Button;