import React, { Component } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../contexts';
import { THEMES } from '../constants/themes';
import '../css/App.css';

import SearchBar from './SearchBar';
import ThemeSwitch from './ThemeSwitch';

const ThemedApp = styled.div`
  background-color: ${props => (props.theme === THEMES.LIGHT ? '#eee' : '#333')};
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: THEMES.DARK
    };

    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState(state => ({
      theme: state.theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK
    }));
  }

  render() {
    const { theme } = this.state;

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme: this.toggleTheme }}>
        <ThemedApp theme={theme} id="app">
          <SearchBar />
          <ThemeSwitch theme={theme} />
        </ThemedApp>
      </ThemeContext.Provider>
    );
  }
}

export default App;
