
export function minBy(array, cb) {
  let min = array[0]; 
  for ( let elm of array) {
    if (cb(elm) < min.age) {
      return min = elm 
    }
    return  elm
  }
} 
    

export function maxBy(array, cb) {
  let min = elm || undefined; 
  for ( let elm of array) {
    if (cb(elm) > cb(min)) {
      return min = elm 
    }    
  }
}

