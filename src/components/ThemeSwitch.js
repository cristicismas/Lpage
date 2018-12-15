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

const SwitchSlider = styled.span`
  background-color: ${props => (props.theme === THEMES.DARK ? '#eee' : '#333')};
`;

class ThemeSwitch extends Component {
  componentDidMount() {
    const { theme } = this.context;

    const toggleSwitch = document.getElementById('theme-toggle-switch');

    // Make sure switch :checked value matches the theme.
    if (theme === THEMES.DARK) {
      toggleSwitch.checked = false;
    } else {
      toggleSwitch.checked = true;
    }
  }

  render() {
    const { theme } = this.context;

    return (
      <div id="theme-switch">
        <ThemeLabel theme={theme}>Dark</ThemeLabel>
        <label className="switch">
          <input type="checkbox" onClick={() => this.context.toggleTheme()} id="theme-toggle-switch" />
          <SwitchSlider theme={theme} className="switch-slider" />
        </label>
        <ThemeLabel theme={theme}>Light</ThemeLabel>
      </div>
    );
  }
}

ThemeSwitch.contextType = ThemeContext;

export default ThemeSwitch;
