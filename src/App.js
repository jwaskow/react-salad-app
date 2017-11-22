import React, { Component } from 'react';
import AppTitle from './Components/AppTitle';
import Ingredients from './Components/Ingredients';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      vinegars: [],
      recipe: {}
    }
  }

  componentWillMount(){
    this.setState(
      {
        appTitle: 'Salad Dressing Generator',
        titleMessage: "Don't fret over your vinaigrette!",
        vinegars: [
          {name: 'Apple Cider'},
          {name: 'Balsamic'},
          {name: 'Champagne'},
          {name: 'Red Wine'},
          {name: 'Sherry'},
          {name: 'White Wine'},
        ],
        oils: [
          {name: 'Canola'},
          {name: 'Extra Virgin Olive'},
          {name: 'Olive'},
          {name: 'Soybean'},
          {name: 'Vegetable'},
          {name: 'White Wine'},
        ],
        aromatics: [
          {name: 'Shallot'},
          {name: 'Garlic'},
          {name: 'Parsley'},
          {name: 'Basil'},
          {name: 'Oregano'},
          {name: 'Honey'},
          {name: 'Lemon Juice'},
          {name: 'Rasoberries'},
          {name: 'Cherries'},
        ]
      });
    }

handleNewRecipe(newRecipe){
  console.log(newRecipe);
}

  render() {
    return (
      <div className="App">
        <AppTitle appTitle={this.state.appTitle} titleMessage={this.state.titleMessage}/>
        <Ingredients newRecipe={this.handleNewRecipe.bind(this)} vinegars={this.state.vinegars} oils={this.state.oils} aromatics={this.state.aromatics}/>
      </div>
    );
  }
}

export default App;
