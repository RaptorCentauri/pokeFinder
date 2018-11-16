// //Get Type Choices from API
// $.ajax({
// 	url: "https://pokeapi.co/api/v2/type/",
// 	method: "GET"
// }).done(function(data) {
// 		for (i=0; i<data.results.length; i++ ){
// 			typeChoices.push(data.results[i].name);
// 		}
// }).fail(function(){
// 	$("#results").html("The API is not responding");
// 				$("#status-light").css("background-color", "#ff1c1c");
// });


import axios from 'axios';

const getTypeChoices = async () => {
	let typeChoices = [];

	try {
		let response = await axios.get(`https://pokeapi.co/api/v2/type/`);


		let types = response.data.results;

    // console.log('res', types);


		for (let type in types) {
			typeChoices.push(types[type].name)
		}

    // console.log(typeChoices);
		return typeChoices;

	} catch (err) {
		return err
	}


}

export default getTypeChoices;
