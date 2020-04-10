const assert = require('assert');
/**
 * Takes in a list and returns a min heap
 * @param {Array} arr
 * @returns {Array} heap 
 */
function heapify(arr){
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
            if(leftChild < parent) {
             arr[idx] = leftChild;
             arr[leftChildIdx] = parent;   
            }
        }

        if (rightChild  !== null){
            if(rightChild < parent){
                arr[idx] = rightChild;
                arr[rightChildIdx] = parent
            }
        }
        idx ++;
    }
    return arr
}

// Unit Test
const test = () => {
    assert.deepStrictEqual(heapify([3, 1, 9, 15, 4, 2]), [ 1, 3, 2, 15, 4, 9 ])
}
test();
