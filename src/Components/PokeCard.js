import React, { Component } from 'react';
import 'tachyons';

class PokeCard extends Component {
    //Checks if pokemon = 0. Since 0 is false, not 0 is true, hence !0. 
    render() {
        // const pokeNumber = this.props.pokeNumber;
        const {name, id, types, sprites} = this.props.data;
        if (id == '' || id == undefined) {
            return(
            <div style={{background: '#434343'}} className='pa4'>
                <h1 className='f1' style={{color: 'white'}}>Search for a Pokémon!</h1>
            </div>
            )
        } else {  

            const primaryType = types[0].type.name;
            let secondaryType = '';

            try {
                secondaryType = ' / ' + types[1].type.name;
            } catch {
            }
            
            const defColor = () => {
                let typeColor = 'black';
                switch (primaryType) {
                        case 'fire':
                            typeColor = '#CD0702'
                            break;
                        case 'water':
                            typeColor = '#2719DC'
                            break;
                        case 'grass':
                            typeColor = '#045D0A'
                            break;
                        case 'steel':
                            typeColor = '#586167'
                            break;
                        case 'electric':
                            typeColor = '#BDA200'
                            break;
                        case 'normal':
                            typeColor = '#D4AA7D'
                            break;
                        case 'poison':
                            typeColor = '#740284'
                            break;
                        case 'fighting':
                            typeColor = '#D85A00'
                            break;
                        case 'ice':
                            typeColor = '#0FA6A6'
                            break;
                        case 'ground':
                            typeColor = '#7C592B'
                            break;
                        case 'rock':
                            typeColor = '#4B2C09'
                            break;
                        case 'flying':
                            typeColor = '#7FE4E4'
                            break;
                        case 'fairy':
                            typeColor = '#F086C9'
                            break;
                        case 'ghost':
                            typeColor = '#3A0B52'
                            break;
                        case 'dragon':
                            typeColor = '#4F00E1'
                            break;
                        case 'bug':
                            typeColor = '#77CE00'
                            break;
                        case 'psychic':
                            typeColor = '#AA0077'
                            break;
                        case 'dark':
                            typeColor = '#373737'
                            break;
                    default:
                        break;
                }
                return typeColor
            }

            return(
                <div style={{background: '#434343'}} className='pa4'>
                    <h1 className='f1' style={{color: 'white'}}> {`Nº ${id}`} </h1>
                    <div className='tc bg-lightest-blue dib br3 pa3 ma2 grow b--solid bw2 shadow-5 b--blue'>
                        <div className='bg-white dib br-100 pa3 ma2 bw2'> 
                            <img alt={id} src={sprites.front_default}/>
                        </div>
                        <div className='bg-white pa3 br3' style={{textTransform: "capitalize"}}>
                            <h1 className='f1' style={{color: defColor()}}>{name}</h1>
                            {/* <h2> Primary type: {primaryType}</h2>
                            <h2> Secondary type: {secondaryType}</h2> */}
                            <h2>{primaryType}{secondaryType}</h2>
                            <h3><a style={{textDecoration: "none"}} href={`https://bulbapedia.bulbagarden.net/wiki/${name}_(Pok%C3%A9mon)`}>Read more in Bulbapedia</a> </h3>
                        </div>
                    </div>
                </div>
            );

        }
    }
}

export default PokeCard;
