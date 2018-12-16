import React, { Component } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../contexts';
import { THEMES } from '../constants/themes';
import { URLS } from '../constants/urls';
import '../css/App.css';

import Options from './Options';
import SearchBar from './SearchBar';
import ThemeSwitch from './ThemeSwitch';

const ThemedApp = styled.div`
  background-color: ${props => (props.theme === THEMES.LIGHT ? '#eee' : '#333')};
`;

class App extends Component {
  constructor(props) {
    super(props);

    const defaultTheme = localStorage.getItem('theme');
    const defaultSearchEngine = localStorage.getItem('searchEngine');

    this.state = {
      theme: defaultTheme === THEMES.LIGHT ? THEMES.LIGHT : THEMES.DARK,
      engineSearchUrl: URLS[defaultSearchEngine] || URLS.GOOGLE
    };

    this.toggleTheme = this.toggleTheme.bind(this);
    this.changeSearchEngine = this.changeSearchEngine.bind(this);
  }

  toggleTheme() {
    this.setState(
      state => ({
        theme: state.theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK
      }),
      () => {
        localStorage.setItem('theme', this.state.theme);
      }
    );
  }

  changeSearchEngine(newEngine) {
    this.setState({ engineSearchUrl: URLS[newEngine] }, () => {
      localStorage.setItem('searchEngine', newEngine);
    });
  }

  render() {
    const { theme, engineSearchUrl } = this.state;

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme: this.toggleTheme }}>
        <ThemedApp theme={theme} id="app">
          <Options changeSearchEngine={this.changeSearchEngine} engineUrl={engineSearchUrl} />
          <SearchBar searchUrl={engineSearchUrl} />
          <ThemeSwitch />
        </ThemedApp>
      </ThemeContext.Provider>
    );
  }
}

export default App;
