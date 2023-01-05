import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear({asteroids}) {
  function maxBy(array, cb) {
    let min = array[0]
    let result = parseInt(min[0]) ?? 0
    for ( let elm of array) {
      if (cb(elm) > cb(min)) {
        min = elm
        return result;
      }    
    }
    return result;
  }
  const discoveries = asteroids.reduce((acc, year) => {
    
    return {
      ...acc, 
      [year.discoveryYear]: (acc[year.discoveryYear] ?? 0) +1
    }
  }, {})
  const yearArray = Object.entries(discoveries); yearArray
  const myCB = (item) => item[0];
  return maxBy(yearArray, myCB);   
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
