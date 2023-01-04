
export function minBy(array, cb) {
  let min = array[0]
  for ( let elm of array) {
    if (cb(elm) < cb(min)) {
      return min = elm 
    }    
  }
}     

export function maxBy(array, cb) {
  let min = array[0]
  for ( let elm of array) {
    if (cb(elm) > cb(min)) {
      return min = elm 
    }    
  }
}

