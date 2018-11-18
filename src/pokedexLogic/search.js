import searchColor from './colorSearch';
import searchRegion from './regionSearch';
import searchType from './typeSearch';

const search = async (colorSearch, typeSearch, regionSearch) => {

let colorResult = await searchColor(colorSearch);
let typeResult = await searchType(typeSearch)
let regionResult = await searchRegion(regionSearch)

  let instersection = (...args) => {
      let sortSets = [];

      for (let arg in args) {
        sortSets.push(new Set(args[arg]))
      }

      let [sortPrime, ...sortRest] = sortSets;

      let intersectedSet = new Set();

      for (let setItem of sortPrime) {
          if (sortRest.every((e) => e.has(setItem))) {
                  intersectedSet.add(setItem)
          }
      }

      let intersectedArray = [...intersectedSet];
      return intersectedArray

  }


  let final = instersection(colorResult, regionResult, typeResult);
  console.log(final);
}


export default search
