import React, {Component} from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { PropTypes } from 'prop-types';

import './index.css';

class SlidingMenu extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();

    this.closeDropdown = this.closeDropdown.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  closeDropdown() {
    const isChecked = this.input.current.checked;
    if (isChecked) {
      this.toggleDropdown();
    }
  }

  toggleDropdown() {
    this.input.current.click();
  }

  render() {
    const {
      children,
      openClose,
      dropdownWidth,
      passCloseToChildren,
    } = this.props;
    const dropdownStyle = dropdownWidth ? { width: `${dropdownWidth}px` } : null;
    const childrenProps = passCloseToChildren ? { onClick: this.toggleDropdown } : null;
    return (
      <OutsideClickHandler onOutsideClick={this.closeDropdown} useCapture>
        <div className='slideToggle NavigationSlidingClass'>
          <input
            type='checkbox'
            ref={this.input}
          />
          <div className='ResTop__Grey' />
          {openClose}
          <div className='menuSliding' style={dropdownStyle}>
            {React.cloneElement(children, childrenProps)}
          </div>
        </div>
      </OutsideClickHandler>
    )
  }
}

SlidingMenu.defaultProps = {
  dropdownWidth: null,
  passCloseToChildren: true,
};

SlidingMenu.propTypes = {
  children: PropTypes.node.isRequired,
  dropdownWidth: PropTypes.number,
  openClose: PropTypes.node.isRequired,
  passCloseToChildren: PropTypes.bool,
};

export default SlidingMenu;