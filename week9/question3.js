class MinBinaryHeap{
    constructor(){
        this.values = [];
    }

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
    if (this.values.length <= 1) return null;
     let min = this.values[0], 
         lastVal = this.values.pop();
    this.values[0] = lastVal;

     return min;
    }

    heapifyDown(){
        let idx = 0,
            element = this.values[idx],
            swap = null,
            leftChildIdx,
            rightChildIdx,
            leftChild,
            rightChild;
        while (true){
            leftChildIdx = (2 * idx) + 1;
            rightChildIdx = (2 * idx) + 2;
            leftChild = leftChildIdx < this.values.length ? this.values[leftChildIdx] : null;
            rightChild = rightChildIdx < this.values.length ? this.values[leftChildIdx] : null;
            swap = leftChild < rightChild ? leftChildIdx : rightChildIdx; 
            if (!swap) break;
            if (swap < element){
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
            }
            
    }
}
}

let heap = new MinBinaryHeap();

heap.insert(1)
heap.insert(4)
heap.insert(2)
heap.insert(9)
heap.insert(3)
heap.insert(15)

console.log(heap.values)
