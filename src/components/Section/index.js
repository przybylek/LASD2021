import React from 'react';
import { PropTypes } from 'prop-types';

import './index.css';

function Section({children, title, isSecondary}) {
  const isSecondaryStyle = isSecondary ? 'Section__secondary' : 'Section__primary';

  return(
    <div className={isSecondaryStyle}>
      <div className='Section__title'>{title}</div>
      <div className='Section__content'>
        {children}
      </div>
    </div>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  isSecondary: PropTypes.bool.isRequired,
}

export default Section;