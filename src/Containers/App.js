import React, { Component } from 'react';
import Header from '../Components/Header';
import PokeCard from '../Components/PokeCard';
import './App.css';
import 'tachyons';


class App extends Component {

  constructor() {
		super()
		this.state = {
      data: {} // Creates a data object to store the pokemon info
		}
  }
  
  getRandPokemonNumber = async () => {
    // Fetches the data of a random pokemon within the range (807 is the total pokemon up to gen 7), then adds it to the state's data object
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.round(Math.random() * 807).toString()}`);
    this.setState({data: await resp.json()}) 
  }

  render() {  
    const {data} = this.state; // Extracts the data from the state
    return (
      <div className='App'>
        {/* Passes the function and the data to each component as props*/}
        <Header getRandPokemonNumber={this.getRandPokemonNumber}/>
        <PokeCard data={data}/>
      </div>
    );
  }
}


export default App;

//`https://pokeapi.co/api/v2/pokemon/?limit=151`