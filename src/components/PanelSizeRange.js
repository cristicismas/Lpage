import React, { Component } from 'react';
import '../css/PanelSizeRange.css';

export class PanelSizeRange extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.changeState('panelSize', e.target.value);
  }

  render() {
    const { panelSize } = this.props;
    
    return (
      <div className='panel-size-slider'>
        <label htmlFor='panel-size-range'>Panel Size</label>
        <input
          type='range'
          name='panel-size-range'
          id='panel-size-range'
          defaultValue={panelSize}
          min='200'
          max='1000'
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default PanelSizeRange;
