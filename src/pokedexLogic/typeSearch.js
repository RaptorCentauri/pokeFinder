import axios from 'axios';

const searchType = async (searchType) => {
	let typeResults = [];

	try {
		let response = await axios.get(`https://pokeapi.co/api/v2/type/${searchType}/`);

		let pokemons = response.data.pokemon;


		// console.log(pokemons);

		for (let pokemon in pokemons) {
			// console.log(pokemons[pokemon]);


			let pokemonID = +pokemons[pokemon].pokemon.url.split('/')[6]
			typeResults.push(pokemonID)

		}

		return typeResults;

	} catch (err) {
		console.log('EEEE', err);
		// return err
	}
}

export default searchType;
