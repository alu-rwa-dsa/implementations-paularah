const assert = require('assert');

function binarySearch(arr, val, left=0, right=(arr.length-1)) {

    let middle = Math.floor(((right-left)/2) + left)
  
    switch (true) {
      case arr[middle] === val:
        return true
      case right - left === 0:
        return false
      case arr[middle] < val:
        return binarySearch(arr, val, middle+1, right)
      case arr[middle] > val:
        return binarySearch(arr, val, left, middle)
    }T
  }


const test = () =>{
    assert.deepStrictEqual(binarySearch([1,2,3,4,5,6], 2), true);
}
test();