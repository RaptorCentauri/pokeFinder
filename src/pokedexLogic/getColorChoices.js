// Get Color Choices from API
// $.ajax({
// 	url: "https://pokeapi.co/api/v2/pokemon-color/",
// 	method: "GET"
// }).done(function(data) {
// 	// console.log(data);
// 	for (i=0; i<data.results.length; i++ ){
// 		colorChoices.push(data.results[i].name);
// 	}
// 	console.log(colorChoices);
// }).fail(function(){
// 	$("#results").html("The API is not responding");
// 				$("#status-light").css("background-color", "#ff1c1c");
// });


import axios from 'axios';

const getColorChoices = async () => {
	let colorChoices = [];

	try {
		let response = await axios.get(`https://pokeapi.co/api/v2/pokemon-color/`);

		let colors = response.data.results;

		for (let color in colors) {
			colorChoices.push(colors[color].name)
		}

		return colorChoices;

	} catch (err) {
		return err
	}



}

export default getColorChoices;
