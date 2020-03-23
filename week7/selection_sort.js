const assert = require('assert');

function selectionSort(arr){
    const swap = (arr, index1, index2) => ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);
    let min;
    for (let i = 0; i < arr.length; i++){
        min = i;
        for (let j = i+1; j < arr.length; j++){
            if (arr[j] < arr[min]) min = j;
        }
        if ( min !== i) swap(arr, i, min)
    }
    return arr;
}


const test = () =>{
    assert.deepStrictEqual(selectionSort([3,5,1,7,9,0]),[ 0, 1, 3, 5, 7, 9 ] )
}

test();
