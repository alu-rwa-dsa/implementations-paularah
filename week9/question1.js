const assert = require('assert');

/**
 * Checks if an array is a valid binary heap
 * @param {Array} arr
 * @returns {Boolean} 
 */
function checkMinHeap(arr){
    let parent, leftChild, leftChildIdx, rightChild, rightChildIdx, length = arr.length, idx = 0;
    while(idx < length){
        parent = arr[idx];
        leftChildIdx = idx * 2 + 1;
        rightChildIdx = idx * 2 + 2;
        if (leftChildIdx < length){
            leftChild = arr[leftChildIdx];
        }else{
            leftChild = null;
        }

        if (rightChildIdx < length){
            rightChild = arr[rightChildIdx];
        }else{
            rightChild = null;
        }

        if (leftChild !== null){
            if(leftChild < parent) return false
        }

        if (rightChild  !== null){
            if(rightChild < parent) return false
        }
        idx ++;
    }
    return true
}

const test = () => {
    assert.deepStrictEqual(checkMinHeap([1, 3, 2, 9, 4, 15]), true)
    assert.deepStrictEqual(checkMinHeap([14, 3, 1, 9, 4, 15]), false)
}

test();