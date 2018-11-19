import axios from 'axios';

const searchID = async (searchID) => {

  // console.table(searchID);
	let idResults = [];

	try {
    for (let id of searchID) {
			// console.log(id);
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
