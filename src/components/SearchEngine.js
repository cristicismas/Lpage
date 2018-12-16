import React, { Component } from 'react';
import styled from 'styled-components';
import { URLS } from '../constants/urls';
import { ThemeContext } from '../contexts';
import { THEMES } from '../constants/themes';

const SearchEngineContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SearchEngineSelect = styled.select`
  background-color: ${props => (props.theme === THEMES.DARK ? '#333' : '#eee')};
  border: 1px solid ${props => (props.theme === THEMES.DARK ? '#eee' : '#333')};
  color: ${props => (props.theme === THEMES.DARK ? '#f5f5f5' : '#333')};
`;

class SearchEngine extends Component {
  handleEngineChange() {
    const engineSelect = document.getElementById('search-engine-dropdown');
    const selectedEngine = engineSelect.options[engineSelect.selectedIndex].value;

    this.props.changeSearchEngine(selectedEngine);
  }

  render() {
    const { theme } = this.context;
    const { engineUrl } = this.props;

    let currentSearchEngine = 'GOOGLE';

    const searchEngines = Object.keys(URLS).map(key => {
      if (URLS[key] === engineUrl) {
        currentSearchEngine = key;
      }

      return (
        <option value={key} key={key}>
          {key}
        </option>
      );
    });

    return (
      <SearchEngineContainer id="search-engine">
        <label htmlFor="search-engine-dropdown">Search Engine</label>
        <SearchEngineSelect
          defaultValue={currentSearchEngine}
          name="search-engine-dropdown"
          id="search-engine-dropdown"
          theme={theme}
          onChange={() => this.handleEngineChange()}>
          {searchEngines}
        </SearchEngineSelect>
      </SearchEngineContainer>
    );
  }
}

SearchEngine.contextType = ThemeContext;

export default SearchEngine;
