const assert = require('assert');


function bbsort(arr){
    const swap = (arr, index1, index2) => ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);
    let swaps;
    for(let i = arr.length; i > 0; i--){
        swaps = false;
        for (let j = 0; j < i-1; j++){
            if (arr[j] > arr[j+1]){
                swap(arr, j, j+1)
                swaps = true;
            }
            
        }
        if (!swaps) break;
    }
    return arr;
} 

const test  = () =>{
    assert.deepStrictEqual(bbsort([7,6, 3, 9,1,2,4,5]), [
        1, 2, 3, 4,
        5, 6, 7, 9
      ]);
}

test();