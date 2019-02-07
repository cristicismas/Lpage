import React, { Component } from 'react';
import styled from 'styled-components';
import { THEMES } from '../constants/themes';
import '../css/FormOverlay.css';

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

class FormOverlay extends Component {
  constructor(props) {
    super(props);

    const { img, title, url } = this.props;

    this.state = {
      img: img || '',
      title: title || '',
      url: url || ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleForm(this.state);
    this.props.closeOverlay();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { img, title, url } = this.state;
    const { theme, formTitle, ctaText } = this.props;
    
    return (
      <div className="overlay">
        <Form className="add-favorite-form" onSubmit={this.handleSubmit} theme={theme}>
          <FormTitle theme={theme} className="form-title">
            {formTitle}
          </FormTitle>

          <div className="form-group">
            <Label theme={theme} htmlFor="title">
              Website Title
            </Label>
            <input type="text" required name="title" id="title-input" defaultValue={title} onChange={this.handleChange} />
          </div>

          <div className="form-group">
            <Label theme={theme} htmlFor="url">
              Website Url
            </Label>
            <input type="text" required name="url" id="url-input" defaultValue={url} onChange={this.handleChange} />
          </div>

          <div className="form-group">
            <Label theme={theme} htmlFor="img">
              Image Url
            </Label>
            <input type="text" required name="img" id="img-input" defaultValue={img} onChange={this.handleChange} />
          </div>

          <CloseOverlayBtn id="close-overlay-btn" theme={theme} onClick={() => this.props.closeOverlay()}>
            &#x2715;
          </CloseOverlayBtn>

          <button type="submit">{ctaText}</button>
        </Form>
      </div>
    );
  }
}

export default FormOverlay;
