const assert = require('assert');

function insertionSort(arr){
    let frontVal
    let jHold
    for (let i = 1; i < arr.length; i++){
        frontVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > frontVal;  j-- ){
            arr[j+1] = arr[j];
        }
        arr[j+1] = frontVal;
    }
    return arr
}

const test = () =>{
    assert.deepStrictEqual(insertionSort([2,5,1,3]), [1, 2, 3, 5]);
}
test();
