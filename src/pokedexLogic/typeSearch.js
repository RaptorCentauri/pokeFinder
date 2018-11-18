//Search by specific type
// function typeSearch(type){
//
// 	if (!type){
// 		console.log('no type');
// 		ajaxType.resolve();
// 	}
//
// 	else{
// 	$.ajax({
// 		url: `https://pokeapi.co/api/v2/type/${type}/`,
// 		method: "GET"
// 	}).done(function(data) {
// 		for (var i = 0; i < data.pokemon.length; i++) {
// 			typeArray.push(data.pokemon[i].pokemon.name);
// 		}
// 		console.log(typeArray);
// 		ajaxType.resolve();
// 		}).fail(function(){
// 			$("#results").html("The API is not responding");
// 			$("#status-light").css("background-color", "#ff1c1c");
//
// 		});;
// 	}
// }


import axios from 'axios';

const searchType = async (searchType) => {
	let typeResults = [];

	try {
		let response = await axios.get(`https://pokeapi.co/api/v2/type/${searchType}/`);

		let pokemons = response.data.pokemon;

		for (let pokemon in pokemons) {
			let pokemonID = +pokemons[pokemon].pokemon.url.split('/')[6]
			typeResults.push(pokemonID)

		}

		// console.table(typeResults);
		typeResults.sort((a,b) => a-b);

		return typeResults;

	} catch (err) {
		console.log(err);
		// return err
	}
}

export default searchType;
