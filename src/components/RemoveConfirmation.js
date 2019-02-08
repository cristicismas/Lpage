import React, { Component } from 'react';
import styled from 'styled-components';
import { THEMES } from '../constants/themes';
import { ThemeContext } from '../contexts';
import '../css/RemoveConfirmation.css';

const Confirmation = styled.div`
  background-color: ${props => (props.theme === THEMES.DARK ? '#222' : '#eee')};
  color: ${props => (props.theme === THEMES.DARK ? '#f5f5f5' : '#333')};
`;

const CancelButton = styled.button`
  color: ${props => (props.theme === THEMES.DARK ? '#f5f5f5' : '#333')};
  background-color: ${props => (props.theme === THEMES.DARK ? '#222' : '#eee')};
  border: 1px solid ${props => (props.theme === THEMES.DARK ? '#f5f5f5' : '#333')};
`;

const RemoveButton = styled.button`
  color: #f5f5f5;
  background-color: #910000;
  border: 1px solid ${props => (props.theme === THEMES.DARK ? '#f5f5f5' : '#333')};
`;

class RemoveConfirmation extends Component {
  render() {
    const { theme } = this.context;

    return (
      <div className='overlay'>
        <Confirmation className='remove-confirmation' theme={theme}>
          <h3>Are you sure you want to remove this website?</h3>
          <RemoveButton onClick={this.props.handleRemove} theme={theme} className='remove-btn'>
            Remove
          </RemoveButton>
          <CancelButton onClick={this.props.closeOverlay} theme={theme}>
            Cancel
          </CancelButton>
        </Confirmation>
      </div>
    );
  }
}

RemoveConfirmation.contextType = ThemeContext;

export default RemoveConfirmation;
