import searchColor from './colorSearch';
import searchRegion from './regionSearch';
import searchType from './typeSearch';

const search = async (colorSearch, typeSearch, regionSearch) => {

let colorResult = await searchColor(colorSearch);
let typeResult = await searchType(typeSearch)
let regionResult = await searchRegion(regionSearch)


  let instersection = (...args) => {
      let sortSets = [];
      let sortSizes = []

      for (let arg in args) {
        sortSets.push(new Set(args[arg].sort((a,b) => a-b)))
      }

      for (let set of sortSets) {
        sortSizes.push(set.size)
      }

      let minIndex = sortSizes.indexOf(Math.min(...sortSizes));


      [sortSets[0], sortSets[minIndex]] = [sortSets[minIndex],sortSets[0]]


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

  let final = instersection(regionResult, typeResult, colorResult,);


  // console.log(final);

  return final
}


export default search
