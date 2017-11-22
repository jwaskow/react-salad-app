import React, { Component } from 'react';

class Vinegar extends Component {
  static defaultProps = {
    vinegars: ['Apple Cider', 'Balsamic', 'Champagne', 'Red Wine', 'Sherry', 'White Wine']
  }
  render() {
    let vinegarOptions = this.props.vinegars.map(vinegar => {
      return <option key={vinegar} value="vinegar">{vinegar}</option>
    });
    return (
      <div>
        <label>Vinegar</label>
        <select ref="vinegar">
          {vinegarOptions}
        </select>
    </div>
    );
  }
}

export default Vinegar;
