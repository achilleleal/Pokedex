import React from 'react';
import 'tachyons';


const Header = ({getRandPokemonNumber}) => {

  return (
    <header>
        <div className='pa2' style={{backgroundColor: '#FF404A' }}>
            <h1 className='f1' style={{color: 'white'}}>Randomdex</h1>
            <img src='http://pngimg.com/uploads/pokeball/pokeball_PNG24.png' alt='Pokeball' width='100'/>
        </div>
        <div id='button-div' className='pa3' style={{backgroundColor: '#FF6B72'}}>
            <button className='br3 pa2' onClick={getRandPokemonNumber} style={{borderColor: '#FF6B72'}}>Get a random Pokémon!</button>
        </div>
    </header>
  );
}

export default Header;