import React, { Component } from 'react';

class Aromatic extends Component {
  render() {
    return (
      <li className="Aromatic">
        {this.props.name}
      </li>
    );
  }
}

export default Aromatic;
