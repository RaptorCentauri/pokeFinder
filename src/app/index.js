import "babel-polyfill";
import getColorChoices from '../pokedexLogic/getColorChoices'
import getTypeChoices from '../pokedexLogic/getTypeChoices'
import getRegionChoices from '../pokedexLogic/getRegionChoices'




import React from 'react';
import {render} from 'react-dom';

class App extends React.Component{
    state = {
      colorsChoices: ['foo', 'bar'],
      typeChoices: ['foo', 'bar'],
      regionChoices: ['foo', 'bar'],
    }

    componentDidMount = () => {
      getColorChoices()
      .then(colors => this.setState({colorsChoices: colors}));

      getTypeChoices()
      .then(types => this.setState({typeChoices: types}));

      getRegionChoices()
      .then(regions => this.setState({regionChoices: regions}));


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
            </div>
        );
    }
}

render(<App/>,window.document.getElementById('root'));
