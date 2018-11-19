import "babel-polyfill";

import {render} from 'react-dom';
import React from 'react';

import getColorChoices from '../pokedexLogic/getColorChoices'
import getRegionChoices from '../pokedexLogic/getRegionChoices'
import getTypeChoices from '../pokedexLogic/getTypeChoices'
import search from '../pokedexLogic/search.js'
import searchID from '../pokedexLogic/searchID.js'

import ChoiceButtons from './components/choiceButtons.js'

// import searchType from '../pokedexLogic/typeSearch';

class App extends React.Component{
    state = {
      colorChoices: [],
      typeChoices: [],
      regionChoices: [],
      searchResults: [],
      chosenColor: null,
      chosenType: null,
      chosenRegion: null
    }


  componentDidUpdate = async (prevProps, prevState) => {
    if(prevState.chosenColor != this.state.chosenColor || prevState.chosenType != this.state.chosenType || prevState.chosenRegion != this.state.chosenRegion){
      if(this.state.chosenColor || this.state.chosenType || this.state.chosenRegion){
        let ids = await search(this.state.chosenColor, this.state.chosenType, this.state.chosenRegion)
        // console.log(ids);
        let results = await searchID(ids)
        this.setState({searchResults: results})
      }
      else{
        this.setState({searchResults: []})
      }

    }
  }

    componentDidMount = async () => {
      let colorChoices = await getColorChoices()
      this.setState({colorChoices: colorChoices})

      let typeChoices = await getTypeChoices()
      this.setState({typeChoices: typeChoices});

      let regionChoices = await getRegionChoices()
      this.setState({regionChoices: regionChoices});
    }

    handleChooseColor = (color) => {color != this.state.chosenColor ? this.setState({chosenColor: color}) : this.setState({chosenColor: null}) }
    handleChooseType = (type) => {type != this.state.chosenType ? this.setState({chosenType: type}) : this.setState({chosenType: null}) }
    handleChooseRegion = (region) => {region != this.state.chosenRegion ? this.setState({chosenRegion: region}) : this.setState({chosenRegion: null}) }





    // handleChooseType = (type) => this.setState({chosenType: type})
    // handleChooseRegion = (region) => this.setState({chosenRegion: region})



    render(){
        return(
            <div className='App'>
              PokeFinder!
              <div>
                COLOR:
              {this.state.chosenColor}
            </div>
            <div>
              TYPE:
              {this.state.chosenType}
            </div>
            <div>
              REGION:
              {this.state.chosenRegion}
              </div>

              <div>
              {this.state.colorChoices.map((color, index) =>   <ChoiceButtons handleClick={()=>{this.handleChooseColor(color)}} name={color} key={index}/>)}
            </div>
            <div>
              {this.state.typeChoices.map((type, index) =>   <ChoiceButtons handleClick={()=>{this.handleChooseType(type)}} name={type} key={index}/>)}
            </div>
            <div>
              {this.state.regionChoices.map((region, index) =>   <ChoiceButtons handleClick={()=>{this.handleChooseRegion(region)}} name={region} key={index}/>)}
            </div>


              <div>
                RESULT:
                {this.state.searchResults.map((result, index) =>   <ChoiceButtons name={result.name} key={index}/>)}
              </div>






            </div>
        );
    }
}

render(<App/>,window.document.getElementById('root'));
