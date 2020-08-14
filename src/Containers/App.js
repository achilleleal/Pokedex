import React, { Component } from 'react';
import './App.css';
import Header from '../Components/Header';
import 'tachyons';
import PokeCard from '../Components/PokeCard';

class App extends Component {

  // Creates pokemonNumber number value
  constructor() {
		super()
		this.state = {
			pokemonNumber: ''
		}
  }
  
  // Changes the pokemonNumber value to a random value
  getRandPokemonNumber = () => {
    this.setState({pokemonNumber: Math.round(Math.random() * 151).toString()});
  }

  render() {  
    const {pokemonNumber} = this.state; //Extracts pokemonNumber from the state
    console.log(pokemonNumber)
    return (
      <div className='App'>
        {/*Here, we pass the function and the pokemonNumber value as props to each component*/}
        <Header getRandPokemonNumber={this.getRandPokemonNumber}/>
        <PokeCard pokemonNumber={pokemonNumber}/>
      </div>
    );
  }
}


export default App;
