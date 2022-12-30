import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  let yearArr = [];
  let totalsArr = [];
  
  const roids = data.asteroids
  const pushYearArr = roids.map(roid => yearArr.push(roid.discoveryYear))
  const numberOfOccurances = yearArr.reduce((acc, cval) => {
    acc[cval] = acc[cval] + 1 || 1
    return acc
  }, {})
  const pushTotalsArr = totalsArr.push(numberOfOccurances)
  const highScore = Object.values(totalsArr[0]).reduce((acc, cval) => cval>acc ? cval : acc)
  const objEntries = Object.entries(totalsArr[0])
  const filterHighScore = objEntries.filter(elm => elm[1] === highScore )
  const convertGreatestDicoveryYear = filterHighScore[0]
  const greatestDicoveryYear = parseInt(convertGreatestDicoveryYear[0])
  
  
  return greatestDicoveryYear
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
