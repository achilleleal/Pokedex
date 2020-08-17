import React, { Component } from 'react';
import Header from '../Components/Header';
import PokeCard from '../Components/PokeCard';
import './App.css';
import 'tachyons';


class App extends Component {

  // Creates pokemonNumber number value
  constructor() {
		super()
		this.state = {
      data: {}
		}
  }

  // Changes the pokemonNumber value to a random value
  getRandPokemonNumber = async () => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.round(Math.random() * 807).toString()}`);
    this.setState({data: await resp.json()}) 
  }

  render() {  
    // const {pokemonNumber} = this.state; //Extracts pokemonNumber from the state
    const {data} = this.state;
    return (
      <div className='App'>
        {/*Here, we pass the function and the pokemonNumber value as props to each component*/}
        <Header getRandPokemonNumber={this.getRandPokemonNumber}/>
        <PokeCard  data={data}/>
      </div>
    );
  }
}


export default App;

//`https://pokeapi.co/api/v2/pokemon/?limit=151`