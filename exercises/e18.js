import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear({asteroids}) {
  const discoveries = asteroids.reduce((acc, year) => {
    return {
      ...acc, 
      [year.discoveryYear]: (acc[year.discoveryYear] ?? 0) +1
    }
  }, {})


}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
