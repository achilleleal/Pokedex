import React, { Component } from 'react';


class Card extends Component {
	constructor() {
        super();
        this.state = {
            pokeData: {}
        }
    }

	async componentDidMount() {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151`);
		const data = await response.json();
		console.log(data)
		this.setState({pokeData: data});
	}

	render() {
		const pokeNum = this.props.pokeNum;
		const {pokeData} = this.state;
		console.log(pokeData);
		return(
		<div className='bg--red'>
			<h1 className='f1' style={{color: 'white'}}> {`Nº ${pokeNum}`} </h1>
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt={pokeNum}/>
			<div>
				<h2>{pokeData.name}</h2>
				<p></p>
			</div>
		</div>

		</div>
		);
	}
}

export default Card;