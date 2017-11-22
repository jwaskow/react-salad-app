import React, { Component } from 'react';

class AppTitle extends Component {
  render() {
    console.log(this);
    return (
      <div className="Logo">
      <div className="AppTitle">{this.props.appTitle}</div>
      <h3 className="TitleMessage">{this.props.titleMessage}</h3>
    </div>
    );
  }
}

export default AppTitle;
