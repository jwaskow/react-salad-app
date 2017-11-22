import React, { Component } from 'react';
import Vinegar from './Vinegar';
import Oil from './Oil';
import Aromatic from './Aromatic';

class Ingredients extends Component {
  render() {
    let vinegars;
    let oils;
    let aromatics;
    if(this.props.vinegars){
      vinegars = this.props.vinegars.map(vinegar => {
        return (
          <Vinegar key={vinegar.name} name={vinegar.name} />
        )
      });
    }
    if(this.props.oils){
      oils = this.props.oils.map(oil => {
        return (
          <Oil key={oil.name} name={oil.name} />
        )
      });
    }
    if(this.props.aromatics){
      aromatics = this.props.aromatics.map(aromatic => {
        return (
          <Aromatic key={aromatic.name} name={aromatic.name} />
        )
      });
    }
    return (
      <div>
        <form>
          <h4>Choose a Vinegar</h4>
          <div>{vinegars}</div>
          <h4>Choose an Oil</h4>
          <div>{oils}</div>
          <h4>Choose Aromatics</h4>
          <div>{aromatics}</div>
        </form>
    </div>
    );
  }
}

export default Ingredients;
