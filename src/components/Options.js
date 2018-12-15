import React, { Component } from 'react';
import styled from 'styled-components';
import { THEMES } from '../constants/themes';
import { ThemeContext } from '../contexts';
import '../css/Options.css';

const MenuItem = styled.div`
  color: ${props => (props.theme === THEMES.DARK ? '#eee' : '#333')};
`;

const HamburgerSlide = styled.span`
  background: ${props => (props.theme === THEMES.DARK ? '#eee' : '#333')};
`;

const Menu = styled.ul`
  background: ${props => (props.theme === THEMES.DARK ? '#222' : '#fff')};
`;

class Options extends Component {
  render() {
    const { theme } = this.context;

    return (
      <div id="options-menu">
        <input type="checkbox" name="options-toggle" id="options-toggle" />

        <HamburgerSlide className="hamburger-slide" theme={theme} />
        <HamburgerSlide className="hamburger-slide" theme={theme} />
        <HamburgerSlide className="hamburger-slide" theme={theme} />

        <Menu id="menu" theme={theme}>
          <MenuItem className="menu-item" theme={theme}>
            hey
          </MenuItem>
          <MenuItem className="menu-item" theme={theme}>
            there
          </MenuItem>
          <MenuItem className="menu-item" theme={theme}>
            how
          </MenuItem>
          <MenuItem className="menu-item" theme={theme}>
            are
          </MenuItem>
          <MenuItem className="menu-item" theme={theme}>
            you
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

Options.contextType = ThemeContext;

export default Options;
