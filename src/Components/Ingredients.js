import React, { Component } from 'react';
import Aromatic from './Aromatic';

class Ingredients extends Component {
  constructor(){
    super();
    this.state = {
      newRecipe:{}
    }
  }

  static defaultProps = {
    vinegars: ['Apple Cider', 'Balsamic', 'Champagne', 'Red Wine', 'Sherry', 'White Wine'],
    oils: ['Canola', 'Extra Virgin Olive', 'Olive', 'Soybean', 'Vegetable', 'White Wine']
  }

  handleSubmit(e){
    this.setState({newRecipe:{
      vinegar: this.refs.vinegar.value,
      oil: this.refs.oil.value
    }}, function(){
      console.log(this.state);
      this.props.newRecipe(this.state.newRecipe);
    })
    e.preventDefault()
  }

  render() {
    let vinegars;
    let oils;
    let aromatics;
    let vinegarOptions = this.props.vinegars.map(vinegar => {
      return <option key={vinegar.name} value={vinegar.name}>{vinegar.name}</option>
    });
    let oilOptions = this.props.oils.map(oil => {
      return <option key={oil.name} value={oil.name}>{oil.name}</option>
    });
    if(this.props.aromatics){
      aromatics = this.props.aromatics.map(aromatic => {
        return (
          <Aromatic key={aromatic.name} name={aromatic.name} />
        )
      });
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Choose a Vinegar</label>
            <br />
            <select ref="vinegar">
              {vinegarOptions}
            </select>
          </div>
          <div>
            <label>Choose an Oil</label>
            <br />
            <select ref="oil">
              {oilOptions}
            </select>
          </div>
          <input type="submit" value="submit" />
          <h4>Choose Aromatics</h4>
          <div>{aromatics}</div>
        </form>
    </div>
    );
  }
}

export default Ingredients;
