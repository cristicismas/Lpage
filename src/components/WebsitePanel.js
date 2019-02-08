import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { THEMES } from '../constants/themes';
import { ThemeContext } from '../contexts';
import '../css/WebsitePanel.css';
import { ICONS } from '../constants/icons';

import FormOverlay from './FormOverlay';
import Icon from './Icon';
import RemoveConfirmation from './RemoveConfirmation';

const WebsiteLink = styled.div`
  background-image: ${props => `url(${props.img})`};
  border: 1px solid ${props => (props.theme === THEMES.DARK ? '#eee' : '#333')};
  cursor: pointer;
  color: #eee;
  text-decoration: none;
`;

class WebsitePanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEditOverlay: false,
      showRemoveConfirmation: false
    };
  }

  openLink(link) {
    window.open(link, '_blank');
  }

  removePanel(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();

    this.setState({ showRemoveConfirmation: true });
  }

  editPanel(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();

    this.setState({ showEditOverlay: true });
  }

  handleEditForm(panel) {
    const { panelIndex, favoriteWebsites } = this.props;

    const favoriteWebsitesCopy = [...favoriteWebsites];
    favoriteWebsitesCopy[panelIndex] = panel;

    this.props.changeState('favoriteWebsites', favoriteWebsitesCopy);
  }

  handleRemoveConfirmation() {
    const { panelIndex, favoriteWebsites } = this.props;

    const favoriteWebsitesCopy = [...favoriteWebsites];
    favoriteWebsitesCopy.splice(panelIndex, 1);

    this.props.changeState('favoriteWebsites', favoriteWebsitesCopy);
  }

  render() {
    const { showEditOverlay, showRemoveConfirmation } = this.state;
    const { title, url, img } = this.props.website;
    const { theme } = this.context;

    let formattedUrl = url;

    if (!url.includes('https://')) {
      formattedUrl = 'https://' + url;
    }

    return (
      <Fragment>
        <WebsiteLink
          className='panel'
          href={formattedUrl}
          target='_blank'
          img={img}
          theme={theme}
          onClick={() => this.openLink(formattedUrl)}
        >
          <div className='buttons'>
            <button className='edit-panel' onClick={e => this.editPanel(e)}>
              <Icon icon={ICONS.EDIT} color='#f5f5f5' />
            </button>
            <button className='remove-panel' onClick={e => this.removePanel(e)}>
              &#x2715;
            </button>
          </div>
        </WebsiteLink>

        {showEditOverlay ? (
          <FormOverlay
            formTitle='Edit Favorite'
            ctaText='Submit'
            handleForm={panel => this.handleEditForm(panel)}
            theme={theme}
            closeOverlay={() => this.setState({ showEditOverlay: false })}
            title={title}
            url={url}
            img={img}
          />
        ) : null}

        {showRemoveConfirmation ? (
          <RemoveConfirmation
            closeOverlay={() => this.setState({ showRemoveConfirmation: false })}
            handleRemove={() => this.handleRemoveConfirmation()}
          />
        ) : null}
      </Fragment>
    );
  }
}

WebsitePanel.contextType = ThemeContext;

export default WebsitePanel;
