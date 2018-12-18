import React, { Component } from 'react';
import styled from 'styled-components';
import { THEMES } from '../constants/themes';
import '../css/AddFavoriteOverlay.css';

const Form = styled.form`
  background-color: ${props => (props.theme === THEMES.DARK ? '#222' : '#ccc')};
  border: 2px solid ${props => (props.theme === THEMES.DARK ? '#ccc' : '#333')};
`;

const Label = styled.label`
  color: ${props => (props.theme === THEMES.DARK ? '#eee' : '#333')};
`;

const FormTitle = styled.h3`
  color: ${props => (props.theme === THEMES.DARK ? '#eee' : '#333')};
`;

const CloseOverlayBtn = styled.button`
  color: ${props => (props.theme === THEMES.DARK ? '#ccc' : '#333')};
`;

class AddFavoriteOverlay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: '',
      title: '',
      url: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addToFavorites(this.state);
    this.props.closeOverlay();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { theme } = this.props;
    return (
      <div className="overlay">
        <Form className="add-favorite-form" onSubmit={this.handleSubmit} theme={theme}>
          <FormTitle theme={theme} className="form-title">
            New Favorite
          </FormTitle>

          <div className="form-group">
            <Label theme={theme} htmlFor="title">
              Website Title
            </Label>
            <input type="text" required name="title" id="title-input" onChange={this.handleChange} />
          </div>

          <div className="form-group">
            <Label theme={theme} htmlFor="url">
              Website Url
            </Label>
            <input type="text" required name="url" id="url-input" onChange={this.handleChange} />
          </div>

          <div className="form-group">
            <Label theme={theme} htmlFor="img">
              Image Url
            </Label>
            <input type="text" required name="img" id="img-input" onChange={this.handleChange} />
          </div>

          <CloseOverlayBtn id="close-overlay-btn" theme={theme} onClick={() => this.props.closeOverlay()}>
            &#x2715;
          </CloseOverlayBtn>

          <button type="submit">Add Website</button>
        </Form>
      </div>
    );
  }
}

export default AddFavoriteOverlay;
