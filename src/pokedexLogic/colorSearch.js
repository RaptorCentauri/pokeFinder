import axios from 'axios';

const searchColor = async (searchColor) => {
	let colorResults = [];

	try {
		let response = await axios.get(`https://pokeapi.co/api/v2/pokemon-color/${searchColor}/`);

		let pokemons = response.data.pokemon_species;

		for (let pokemon in pokemons) {
			let pokemonID = +pokemons[pokemon].url.split('/')[6]
			colorResults.push(pokemonID)
		}


		colorResults.sort((a,b) => a-b);
		// console.table(colorResults);



		return colorResults;

	} catch (err) {
		console.log(err);
		// return err
	}





}

export default searchColor;
