import "babel-polyfill";

import {render} from 'react-dom';
import React from 'react';

import colorSearch from '../pokedexLogic/colorSearch';
import searchType from '../pokedexLogic/typeSearch';
import searchRegion from '../pokedexLogic/regionSearch';
import search from '../pokedexLogic/search.js'


import getColorChoices from '../pokedexLogic/getColorChoices'
import getRegionChoices from '../pokedexLogic/getRegionChoices'
import getTypeChoices from '../pokedexLogic/getTypeChoices'
// import searchType from '../pokedexLogic/typeSearch';

class App extends React.Component{
    state = {
      colorsChoices: [],
      typeChoices: [],
      regionChoices: [],
      searchResults: []
    }

    componentDidMount = () => {
      getColorChoices()
      .then(colors => this.setState({colorsChoices: colors}));

      getTypeChoices()
      .then(types => this.setState({typeChoices: types}));

      getRegionChoices()
      .then(regions => this.setState({regionChoices: regions}));


      // colorSearch('red')
      // // .then()
      //
      // searchType('fire')
      //
      // searchRegion('kanto')
      // .then(result => this.setState({searchResults: result}))

      search('blue', 'water', 'kanto')
      // .then(result => this.setState({searchResults: result}))
      // .then(result => console.log(result))


    }




    render(){
        return(
            <div className='App'>
              PokeFinder!
              <br></br>
              {this.state.colorsChoices}
              <br></br>
              {this.state.typeChoices}
              <br></br>
              {this.state.regionChoices}
              <br></br>
              {this.state.searchResults.length}
            </div>
        );
    }
}

render(<App/>,window.document.getElementById('root'));
