const people = [
  { name: "jon", age: 29 },
  { name: "rachel", age: 25 },
  { name: "peter", age: 30 },
  { name: "andrey", age: 22 },
];

export function minBy(array, cb) {
  let minimum
  for ( let elm of array) {
    let min = elm
    if (cb(elm) < cb(min)) {
      return min = elm 
    }   
    return minimum = min 
  }
  return minimum
}     

export function maxBy(array, cb) {
  let max = array[0]
  for ( let elm of array) {
    if (cb(elm) > cb(max)) {
      return max = elm 
    }    
  }
}

console.log(minBy(people, person => person.age))