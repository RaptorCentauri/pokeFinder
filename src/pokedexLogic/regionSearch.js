
import axios from 'axios';

const searchRegion = async (searchRegion) => {
	let regionResults = [];

	try {
		let response = await axios.get(`https://pokeapi.co/api/v2/pokedex/${searchRegion}/`);

		// console.log(response);

		let pokemons = response.data.pokemon_entries;

		for (let pokemon in pokemons) {
			regionResults.push(pokemons[pokemon].entry_number)
		}

		// console.table(regionResults);
		regionResults.sort((a,b) => a-b);

		return regionResults;

	} catch (err) {
		console.log(err);
		// return err
	}
}

export default searchRegion;
