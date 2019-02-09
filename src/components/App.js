import React, { Component } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../contexts';
import { THEMES } from '../constants/themes';
import { URLS } from '../constants/urls';
import areEqual from '../helpers/areEqual';
import '../css/App.css';

import Options from './Options';
import SearchBar from './SearchBar';
import ThemeSwitch from './ThemeSwitch';
import FavoriteWebsites from './FavoriteWebsites';

const AppTitle = styled.h1`
  text-align: center;
  color: ${props => props.theme === THEMES.DARK ? '#f5f5f5' : '#333'};
`;

class App extends Component {
  constructor(props) {
    super(props);

    const defaultTheme = localStorage.getItem('theme') === THEMES.LIGHT ? THEMES.LIGHT : THEMES.DARK;

    const engineSearchUrl = URLS[localStorage.getItem('searchEngine')] || URLS.GOOGLE;

    const favoriteWebsites = localStorage.getItem('favoriteWebsites')
      ? JSON.parse(localStorage.getItem('favoriteWebsites'))
      : [];

    const panelSize = localStorage.getItem('panelSize') || 400;

    this.state = {
      theme: defaultTheme,
      engineSearchUrl,
      favoriteWebsites,
      panelSize,
      keysPressed: []
    };

    this.changeState = this.changeState.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  componentDidMount() {
    const { theme, keysPressed } = this.state;

    document.addEventListener('keydown', e => {
      if (e.keyCode === 17 || e.keyCode === 88) {
        this.setState(
          {
            keysPressed: keysPressed.push(e.keyCode)
          },
          () => {
            if (keysPressed.includes(17) && keysPressed.includes(88)) {
              document.getElementById('search-bar').focus();
            }
          }
        );
      }
    });

    document.addEventListener('keyup', e => {
      if (e.keyCode === 17 || e.keyCode === 88) {
        const keyIndex = keysPressed.indexOf(e.keyCode);

        this.setState({
          keysPressed: keysPressed.splice(keyIndex, 1)
        });
      }
    });

    document.body.style.background = theme === THEMES.DARK ? '#333' : '#eee';
  }

  componentDidUpdate(prevProps, prevState) {
    const { theme, engineSearchUrl, favoriteWebsites, panelSize } = this.state;

    if (prevState.theme !== theme) {
      document.body.style.background = theme === THEMES.DARK ? '#333' : '#eee';
      localStorage.setItem('theme', theme);
    } else if (prevState.engineSearchUrl !== engineSearchUrl) {
      for (let searchEngine in URLS) {
        if (URLS[searchEngine] === engineSearchUrl) {
          localStorage.setItem('searchEngine', searchEngine);
        }
      }
    } else if (!areEqual(prevState.favoriteWebsites, favoriteWebsites)) {
      localStorage.setItem('favoriteWebsites', JSON.stringify(favoriteWebsites));
    } else if (prevState.panelSize !== panelSize) {
      localStorage.setItem('panelSize', panelSize);
    }
  }

  changeState(key, value) {
    console.log(value);
    this.setState({
      [key]: value
    });
  }

  toggleTheme() {
    this.setState({
      theme: this.state.theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK
    });
  }

  render() {
    const { theme, engineSearchUrl, favoriteWebsites, panelSize } = this.state;

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme: this.toggleTheme }}>
        <div id='app'>
          <Options changeState={this.changeState} panelSize={panelSize} engineUrl={engineSearchUrl} />
          <AppTitle theme={theme}>Welcome</AppTitle>
          <SearchBar searchUrl={engineSearchUrl} />
          <ThemeSwitch />
          <FavoriteWebsites
            favoriteWebsites={favoriteWebsites}
            changeState={this.changeState}
            panelSize={panelSize}
          />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
