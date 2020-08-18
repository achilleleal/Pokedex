import React, { Component } from 'react';
import 'tachyons';

const pokecardBG = '#434343'; //As a variable to be able to change both of the outcome's bg color
class PokeCard extends Component {
    
    render() {
        // Destructures the needed properties from the data, which is a json file.
        const {name, id, types, sprites} = this.props.data;

        //If there is no id or it's undefined, which is the case before the button gets clicked, loads the following:
        if (id === '' || id === undefined) {
            return(
                <div style={{background: pokecardBG}} className='pa4'>
                    <h1 className='f1' style={{color: 'white'}}>Search for a Pokémon!</h1>
                </div>
            )
        
        } else {   
            // Once there is an id, loads the pokemon card.
            const primaryType = types[0].type.name;
            let secondaryType = '';

            try { 
                // If the pokemon has a secondary type, it will be reassigned to its variable to be displayed.
                secondaryType = ' / ' + types[1].type.name;
            } catch {
                // Otherwise, since no other type is found, it will throw an error. The catch block prevents the breaking. 
            }
            
            
            const defColor = () => {
                // Returns a color depending on the global primaryType value. Could be outside as a regular procedure, but as a function it could be tweaked to work with any passed param.
                let typeColor = 'black';
                switch (primaryType) {
                        case 'fire':
                            typeColor = '#CD0702';
                            break;
                        case 'water':
                            typeColor = '#2719DC';
                            break;
                        case 'grass':
                            typeColor = '#045D0A';
                            break;
                        case 'steel':
                            typeColor = '#586167';
                            break;
                        case 'electric':
                            typeColor = '#BDA200';
                            break;
                        case 'normal':
                            typeColor = '#D4AA7D';
                            break;
                        case 'poison':
                            typeColor = '#740284';
                            break;
                        case 'fighting':
                            typeColor = '#D85A00';
                            break;
                        case 'ice':
                            typeColor = '#0FA6A6';
                            break;
                        case 'ground':
                            typeColor = '#7C592B';
                            break;
                        case 'rock':
                            typeColor = '#4B2C09';
                            break;
                        case 'flying':
                            typeColor = '#7FE4E4';
                            break;
                        case 'fairy':
                            typeColor = '#F086C9';
                            break;
                        case 'ghost':
                            typeColor = '#3A0B52';
                            break;
                        case 'dragon':
                            typeColor = '#4F00E1';
                            break;
                        case 'bug':
                            typeColor = '#77CE00';
                            break;
                        case 'psychic':
                            typeColor = '#AA0077';
                            break;
                        case 'dark':
                            typeColor = '#373737';
                            break;
                    default:
                        break;
                }
                return typeColor;
            }

            return(
                <div style={{background: pokecardBG}} className='pa4'>
                    <h1 className='f1' style={{color: 'white'}}> {`Nº ${id}`} </h1>
                    <div className='bg-lightest-blue dib br3 pa3 ma2 grow b--solid b--blue bw2 shadow-5'>
                        <img alt={name} src={sprites.front_default} className='bg-white dib br-100 pa3 ma2 b--solid b--blue bw2'/>
                        <div className='bg-white pa3 br3 b--solid b--blue bw2' style={{textTransform: "capitalize"}}>
                            <h1 className='f1' style={{color: defColor()}}>{name}</h1>
                            <h2>{primaryType}{secondaryType}</h2>
                            <h3><a style={{textDecoration: "none"}} href={`https://bulbapedia.bulbagarden.net/wiki/${name}_(Pok%C3%A9mon)`}>Read more in Bulbapedia</a></h3>
                        </div>
                    </div>
                </div>
            );

        }
    }
}

export default PokeCard;
