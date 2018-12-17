import React, { Component } from 'react';
import styled from 'styled-components';
import { THEMES } from '../constants/themes';
import { ThemeContext } from '../contexts';
import '../css/WebsitePanel.css';

const WebsiteLink = styled.a`
  background-image: ${props => `url(${props.img})`};
  border: 1px solid ${props => props.theme === THEMES.DARK ? "#eee" : "#333"};
  color: #eee;
  text-decoration: none;
`;

class WebsitePanel extends Component {
  render() {
    const { url, img } = this.props.website;
    const { theme } = this.context;

    return (
      <WebsiteLink className="panel" href={url} target="_blank" img={img} theme={theme}>
      </WebsiteLink>
    );
  }
}

WebsitePanel.contextType = ThemeContext;

export default WebsitePanel;
