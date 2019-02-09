import React, { Component } from 'react';
import styled from 'styled-components';
import { THEMES } from '../constants/themes';
import { ThemeContext } from '../contexts';
import '../css/Options.css';

import SearchEngine from './SearchEngine';
import PanelSizeRange from './PanelSizeRange';

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
    const { engineUrl, panelSize } = this.props;

    return (
      <div id="options-menu">
        <input type="checkbox" name="options-toggle" id="options-toggle" />

        <HamburgerSlide className="hamburger-slide" theme={theme} />
        <HamburgerSlide className="hamburger-slide" theme={theme} />
        <HamburgerSlide className="hamburger-slide" theme={theme} />

        <Menu id="menu" theme={theme}>
          <MenuItem className="menu-item" theme={theme}>
            <SearchEngine changeState={this.props.changeState} engineUrl={engineUrl} />
          </MenuItem>
          <MenuItem className="menu-item" theme={theme}>
            <PanelSizeRange changeState={this.props.changeState} panelSize={panelSize} />
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

Options.contextType = ThemeContext;

export default Options;
