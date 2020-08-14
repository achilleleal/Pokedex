import React, { Component } from 'react';
import Card from './Card';
import 'tachyons';

class PokeCard extends Component {
    //TODO: Change Card.js to a class and mpve componentDidMount to it. 

    //Checks if pokemon = 0. Since 0 is false, not 0 is true, hence !0. 
    render() {
        const pokeNumber = this.props.pokemonNumber;
        if (pokeNumber === '') {
            return(
            <div>
                <h1 className='f1' style={{color: 'white'}}>Search for a Pokémon</h1>
            </div>
            )
        } else {
            return (
            <div>
                <Card pokeNum={pokeNumber}/>
            </div>
            );
        }
    }
}

export default PokeCard;
