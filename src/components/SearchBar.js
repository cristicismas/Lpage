import React, { Component } from 'react';
import styled from 'styled-components';
import { ICONS } from '../constants/icons';
import { THEMES } from '../constants/themes';
import { URLS } from '../constants/urls';
import { ThemeContext } from '../contexts';
import '../css/SearchBar.css';

import Icon from './Icon';

const Bar = styled.input`
  background-color: ${props => (props.theme === THEMES.DARK ? '#222' : '#f5f5f5')};
  color: ${props => (props.theme === THEMES.DARK ? '#f5f5f5' : '#222')};
`;

class SearchBar extends Component {
  handleSubmit(e) {
    e.preventDefault();

    const searchBar = document.getElementById('search-bar');
    const query = searchBar.value;

    // Open query in a new window.
    const queryResults = window.open(URLS.DUCKDUCKGO + query, '_blank');

    if (queryResults) {
      //Browser has allowed it to be opened
      queryResults.focus();
    } else {
      //Browser has blocked it
      alert('Please allow popups for this website.');
    }

    searchBar.value = "";
  }

  render() {
    const { theme } = this.context;

    return (
      <form id="search-bar-container" onSubmit={e => this.handleSubmit(e)}>
        <Bar theme={theme} id="search-bar" />
        <Icon icon={ICONS.SEARCH} color={theme === THEMES.DARK ? '#555' : '#999'} id="search-icon" />
      </form>
    );
  }
}

SearchBar.contextType = ThemeContext;

export default SearchBar;
