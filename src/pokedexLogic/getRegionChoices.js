import axios from 'axios';

const getRegionChoices = async () => {
	let regionChoices = [];

	try {
		let response = await axios.get(`https://pokeapi.co/api/v2/region/`);

    console.log(response);

		let regions = response.data.results;

		for (let region in regions) {
			regionChoices.push(regions[region].name)
		}

		return regionChoices;

	} catch (err) {
		return err
	}


}

export default getRegionChoices;
