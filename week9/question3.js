// in-built node assertion for testing
const assert = require('assert');


class MinBinaryHeap{
    constructor(){
        this.values = [];
    }

    /**
     * 
     * @param {Integer} val
     * @returns {Object} heap 
     */
    insert(val){
        this.values.push(val);
        this.bubble();
    }

    bubble(){
        let idx = this.values.length - 1,
            element = this.values[idx],
            parentIdx,
            parent;
        while(idx > 0){
            parentIdx = Math.floor((idx - 1)/2);
            parent = this.values[parentIdx];
            if (element >= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }

    }

    extractMin(){
        let min = this.values[0]
        let lastVal = this.values.pop();
        if (this.values.length > 1){
        this.values[0] = lastVal;
        this.heapifyDown();
        }
        return min;
    }

    /**
     * Restores the original heap property after the root node has been removed and replaced with the last node
     * https://en.wikipedia.org/wiki/Heap_(data_structure)
     *  
     */
    heapifyDown(){
        let idx = 0,
            element = this.values[idx],
            swap,
            leftChildIdx,
            rightChildIdx,
            leftChild,
            rightChild;
        while (true){
            swap = null;
            leftChildIdx = (2 * idx) + 1;
            rightChildIdx = (2 * idx) + 2;
            leftChild = leftChildIdx < this.values.length ? this.values[leftChildIdx] : null;
            rightChild = rightChildIdx < this.values.length ? this.values[rightChildIdx] : null;
            if (leftChild <= rightChild && leftChild < element && leftChild !== null){
                swap = leftChildIdx
            }
            if (leftChild >= rightChild && rightChild < element && rightChild !== null){
                swap = rightChildIdx;
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap; 
        }         
    }

    getMinimum(){
        return this.values[0];
    }

    delete(index){
        this.values.splice(index, 1);
        this.bubble();
        this.heapifyDown();
    }

}


const test = () =>{
    let heap = new MinBinaryHeap();
    heap.insert(1)
    heap.insert(4)
    heap.insert(2)
    heap.insert(15)
    heap.insert(9)
    heap.insert(3)
    // Testing the insertion method
    assert.deepStrictEqual(heap.values, [ 1, 4, 2, 15, 9, 3 ])
    
    // Testing get minimum
    assert.deepStrictEqual(heap.getMinimum(), 1);
    // Testing the extract mininmum method 
    heap.extractMin();
    assert.deepStrictEqual(heap.values, [ 2, 4, 3, 15, 9 ])

    //Testig deleting
    heap.delete(2)
    assert.deepStrictEqual(heap.values, [ 2, 4, 15, 9])
}

test();
