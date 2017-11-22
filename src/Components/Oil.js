import React, { Component } from 'react';

class Oil extends Component {
  render() {
    return (
      <li className="Oil">
        {this.props.name}
      </li>
    );
  }
}

export default Oil;
