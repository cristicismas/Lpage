import React, { Component } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../contexts';
import { THEMES } from '../constants/themes';
import '../css/ThemeSwitch.css';

const ThemeLabel = styled.p`
  position: relative;
  top: 5px;
  margin: 10px;
  text-align: center;
  display: inline-block;
  color: ${props => (props.theme === THEMES.DARK ? '#f5f5f5' : '#333')};
`;

class ThemeSwitch extends Component {
  render() {
    return (
      <div id="theme-switch">
        <ThemeLabel theme={this.context.theme}>Dark</ThemeLabel>
        <label className="switch">
          <input type="checkbox" onClick={() => this.context.toggleTheme()} />
          <span className="switch-slider" />
        </label>
        <ThemeLabel theme={this.context.theme}>Light</ThemeLabel>
      </div>
    );
  }
}

ThemeSwitch.contextType = ThemeContext;

export default ThemeSwitch;
