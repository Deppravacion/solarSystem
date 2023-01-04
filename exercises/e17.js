
export function minBy(array, cb) {
  let min = array[0]; 
  for ( let elm of array) {
    if (cb(elm) < min.age) {
      return min = elm 
    }
    undefined
  }
}   

export function maxBy(array, cb) {
  let min = array[0]; 
  for ( let elm of array) {
    if (cb(elm) > min.age) {
      return min = elm 
    }
    undefined
  }
}
