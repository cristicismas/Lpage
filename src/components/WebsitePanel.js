import React, { Component } from 'react';
import styled from 'styled-components';
import { THEMES } from '../constants/themes';
import { ThemeContext } from '../contexts';
import '../css/WebsitePanel.css';

const WebsiteLink = styled.div`
  background-image: ${props => `url(${props.img})`};
  border: 1px solid ${props => (props.theme === THEMES.DARK ? '#eee' : '#333')};
  cursor: pointer;
  color: #eee;
  text-decoration: none;
`;

class WebsitePanel extends Component {
  openLink(link) {
    window.open(link, '_blank');
  }

  removePanel(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();

    const { panelIndex } = this.props;

    this.props.removeFromFavorites(panelIndex);
  }
  
  render() {
    const { url, img } = this.props.website;
    const { theme } = this.context;

    let formattedUrl = url;

    if (!url.includes('https://')) {
      formattedUrl = 'https://' + url;
    }

    return (
      <WebsiteLink
        className='panel'
        href={formattedUrl}
        target='_blank'
        img={img}
        theme={theme}
        onClick={() => this.openLink(formattedUrl)}
      >
        <button className='remove-panel' onClick={e => this.removePanel(e)}>&#x2715;</button>
      </WebsiteLink>
    );
  }
}

WebsitePanel.contextType = ThemeContext;

export default WebsitePanel;
