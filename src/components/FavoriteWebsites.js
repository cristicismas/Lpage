import React, { Component } from 'react';
import styled from 'styled-components';
import { THEMES } from '../constants/themes';
import { ThemeContext } from '../contexts';
import '../css/FavoriteWebsites.css';

import WebsitePanel from './WebsitePanel';
import FormOverlay from './FormOverlay';

const AddButton = styled.button`
  color: ${props => (props.theme === THEMES.DARK ? '#f5f5f5' : '#333')};
  border: 2px solid
    ${props => (props.theme === THEMES.DARK ? '#f5f5f5' : '#333')};
`;

class FavoriteWebsites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showFormOverlay: false
    };
  }

  render() {
    const { showFormOverlay } = this.state;
    const { favoriteWebsites } = this.props;
    const { theme } = this.context;

    const panels = favoriteWebsites.map((link, index) => (
      <WebsitePanel
        website={link}
        key={link + index}
        removeFromFavorites={this.props.removeFromFavorites}
        editPanel={this.props.editPanel}
        panelIndex={index}
      />
    ));

    return (
      <div id='favorites'>
        <div id='favorites-list'>{panels}</div>
        <AddButton
          className='add-to-favorites-btn'
          theme={theme}
          onClick={() => this.setState({ showFormOverlay: true })}
        >
          &#43;
        </AddButton>

        {showFormOverlay ? (
          <FormOverlay
            formTitle='New Favorite'
            ctaText='Add Website'
            handleForm={this.props.addToFavorites}
            theme={theme}
            closeOverlay={() =>
              this.setState({ showFormOverlay: false })
            }
          />
        ) : null}
      </div>
    );
  }
}

FavoriteWebsites.contextType = ThemeContext;

export default FavoriteWebsites;
