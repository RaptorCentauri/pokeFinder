import axios from 'axios';

const searchID = async (searchID) => {
	let idResults = [];


	if(!searchID){
		let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);

		let allPokemon = response.data.results;

		for (let pokemon of allPokemon) {
			let response = await axios.get(pokemon.url);
			console.log(response.data);
			idResults.push(response.data)
		}

		return  idResults
	}



	try {
    for (let id of searchID) {
      let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      idResults.push(response.data)
    }

    return idResults

	} catch (err) {
		console.log('EEER', err);
		// return err
	}





}

export default searchID;
