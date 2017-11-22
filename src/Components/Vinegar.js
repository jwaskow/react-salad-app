import React, { Component } from 'react';

class Vinegar extends Component {
  render() {
    return (
      <li className="Vinegar">
        {this.props.name}
      </li>
    );
  }
}

export default Vinegar;
