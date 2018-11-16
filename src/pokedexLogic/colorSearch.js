//Search by specific color
function colorSearch(color){
	console.log('running color search');
	if (!color){
		console.log('no color');
		ajaxColor.resolve();
	}

	else{
		$.ajax({
			url: `https://pokeapi.co/api/v2/pokemon-color/${color}/`,
			method: "GET"
		}).done(function(data) {
			// console.log(data);
			for (var i = 0; i < data.pokemon_species.length; i++) {
				colorArray.push(data.pokemon_species[i].name);
			}
			console.log(colorArray);
			ajaxColor.resolve();
		}).fail(function(){
			$("#results").html("The API is not responding");
			$("#status-light").css("background-color", "#ff1c1c");
		});;
	}
}
