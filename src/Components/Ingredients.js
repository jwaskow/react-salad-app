import React, { Component } from 'react';
import Aromatic from './Aromatic';

// function Recipe(props) {
//   const showRecipe = props.showRecipe
//   console.log(showRecipe);
//   if (!props.showRecipe) {
//     return null;
//   }
//   return (
//     <div>
//       1.  Add a teaspoon of Dijon Mustard to the cup of an immersion blender. {"\n"}
//       2.  Add the {this.state.vinegar} vinegar to the cup. {"\n"}
//       3.  Add the' + aromaticString + ' to the {this.state.vinegar} vinegar and mustard. {"\n"}
//       4.  While blending, begin slowly pouring the {this.state.oil} oil into the mixture.
//       Once a stable emulsion forms, slightly increase the speed of pouring the {this.state.oil} oil. {"\n"}
//       5.  When all of the oil is blended, season to taste with salt and pepper and mix.  Vinaigrette will hold its emulsion for about 2 weeks.
//     </div>
//   )
// }

class Ingredients extends Component {
  constructor(){
    super();
    this.state = {
      vinegar: '',
      oil: '',
      showRecipe: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static defaultProps = {
    vinegars: ['Apple Cider', 'Balsamic', 'Champagne', 'Red Wine', 'Sherry', 'White Wine'],
    oils: ['Canola', 'Extra Virgin Olive', 'Olive', 'Soybean', 'Vegetable', 'White Wine'],
    aromatics: ['Shallot', 'Garlic', 'Parsley', 'Basil', 'Oregano', 'Honey', 'Lemon Juice', 'Raspberries', 'Cherries']
  }

  handleSubmit(e){
    // this.setState({showRecipe: true})
    this.setState({[e.target.name]: e.target.value}, function () {
      console.log(this.state);
    })
    e.preventDefault()
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value}, function () {
      console.log(this.state);
    })
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
    let aromaticOptions = this.props.aromatics.map(aromatic => {
      return <div>{aromatic.name} <input type="checkbox" onChange={this.handleChange} key={aromatic.name} value={aromatic.name} /></div>
    });
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Choose a Vinegar</label>
            <br />
            <select name="vinegar" ref="vinegar" onChange={this.handleChange}>
              {vinegarOptions}
            </select>
          </div>
          <div>
            <label>Choose an Oil</label>
            <br />
            <select name="oil" ref="oil" onChange={this.handleChange}>
              {oilOptions}
            </select>
          </div>
          <input type="submit" value="submit" />
          <h4>Choose Aromatics</h4>
          <div>{aromaticOptions}</div>
        </form>
        <div>
          1.  Add a teaspoon of Dijon Mustard to the cup of an immersion blender. {"\n"}
          2.  Add the {this.state.vinegar} vinegar to the cup. {"\n"}
          3.  Add the' + aromaticString + ' to the {this.state.vinegar} vinegar and mustard. {"\n"}
          4.  While blending, begin slowly pouring the {this.state.oil} oil into the mixture.
          Once a stable emulsion forms, slightly increase the speed of pouring the {this.state.oil} oil. {"\n"}
          5.  When all of the oil is blended, season to taste with salt and pepper and mix.  Vinaigrette will hold its emulsion for about 2 weeks.
        </div>
    </div>
    );
  }
}

export default Ingredients;
