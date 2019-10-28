import React from 'react';
import { PropTypes } from 'prop-types';

import './index.css';

function Card({ isSecondary, children }) {
  const cardType = isSecondary ? 'SecondaryCard' : 'PrimaryCard';
  return (
    <div className={`Card ${cardType}`}>{children}</div>
  );
}

Card.defaultProps = {
  isSecondary: false,
}

Card.propTypes = {
  isSecondary: PropTypes.bool,
}

export default Card;