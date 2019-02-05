import React, { Component } from 'react';
import { ThemeContext } from '../contexts';
import { THEMES } from '../constants/themes';
import { URLS } from '../constants/urls';
import '../css/App.css';

import Options from './Options';
import SearchBar from './SearchBar';
import ThemeSwitch from './ThemeSwitch';
import FavoriteWebsites from './FavoriteWebsites';

class App extends Component {
  constructor(props) {
    super(props);

    const defaultTheme =
      localStorage.getItem('theme') === THEMES.LIGHT
        ? THEMES.LIGHT
        : THEMES.DARK;

    const engineSearchUrl =
      URLS[localStorage.getItem('searchEngine')] || URLS.GOOGLE;

    const favoriteWebsites = localStorage.getItem('favoriteWebsites')
      ? JSON.parse(localStorage.getItem('favoriteWebsites'))
      : [];

    this.state = {
      theme: defaultTheme,
      engineSearchUrl: engineSearchUrl,
      favoriteWebsites: favoriteWebsites,
      keysPressed: []
    };

    this.toggleTheme = this.toggleTheme.bind(this);
    this.changeSearchEngine = this.changeSearchEngine.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
    this.removeFromFavorites = this.removeFromFavorites.bind(this);
  }

  componentDidMount() {
    const { theme, keysPressed } = this.state;

    document.addEventListener('keydown', e => {
      if (e.keyCode === 17 || e.keyCode === 88) {
        this.setState({
          keysPressed: keysPressed.push(e.keyCode)
        }, () => {
          if (keysPressed.includes(17) && keysPressed.includes(88)) {
            document.getElementById('search-bar').focus();
          }
        });
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
    const { theme } = this.state;

    if (prevState.theme !== theme) {
      document.body.style.background = theme === THEMES.DARK ? '#333' : '#eee';
    }
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

  addToFavorites(newFavorite) {
    const { favoriteWebsites } = this.state;

    this.setState(
      { favoriteWebsites: [...favoriteWebsites, newFavorite] },
      () => {
        localStorage.setItem(
          'favoriteWebsites',
          JSON.stringify([...favoriteWebsites, newFavorite])
        );
      }
    );
  }

  removeFromFavorites(index) {
    let { favoriteWebsites } = this.state;

    favoriteWebsites.splice(index, 1);

    this.setState(
      { favoriteWebsites },
      () => {
        localStorage.setItem(
          'favoriteWebsites',
          JSON.stringify(favoriteWebsites)
        );
      }
    );
  }

  render() {
    const { theme, engineSearchUrl, favoriteWebsites } = this.state;

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme: this.toggleTheme }}>
        <div id='app'>
          <Options
            changeSearchEngine={this.changeSearchEngine}
            engineUrl={engineSearchUrl}
          />
          <SearchBar searchUrl={engineSearchUrl} />
          <ThemeSwitch />
          <FavoriteWebsites
            favoriteWebsites={favoriteWebsites}
            addToFavorites={this.addToFavorites}
            removeFromFavorites={this.removeFromFavorites}
          />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
