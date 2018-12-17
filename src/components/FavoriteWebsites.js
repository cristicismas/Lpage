import React, { Component } from 'react';
import styled from 'styled-components';
import { THEMES } from '../constants/themes';
import { ThemeContext } from '../contexts';
import '../css/FavoriteWebsites.css';

import WebsitePanel from './WebsitePanel';

const AddButton = styled.button`
  color: ${props => props.theme === THEMES.DARK ? "#f5f5f5" : "#333"};
  border: 2px solid ${props => props.theme === THEMES.DARK ? "#f5f5f5" : "#333"};;
`;

class FavoriteWebsites extends Component {
  render() {
    const { favoriteWebsites } = this.props;
    const { theme } = this.context;

    const panels = favoriteWebsites.map((link, index) => <WebsitePanel website={link} key={link + index} />);

    const newFavTemplate = {
      url: 'https://www.reddit.com/',
      img: 'https://marketingland.com/wp-content/ml-loads/2014/07/reddit-combo-1920-800x450.png'
    };

    return (
      <div id="favorites">
        <div id="favorites-list">{panels}</div>
        <AddButton
          className="add-to-favorites-btn"
          theme={theme}
          onClick={() => this.props.addToFavorites(newFavTemplate)}>
          &#43;
        </AddButton>
      </div>
    );
  }
}

FavoriteWebsites.contextType = ThemeContext;

export default FavoriteWebsites;
