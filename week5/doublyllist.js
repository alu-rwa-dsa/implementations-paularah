
// The node class 
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.pre = null;
    }
}

// The doubly linked list class
class doublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // append method
    append(val){
        let newNode = new Node(val);
        if (!this.head){
            this.head =  newNode;
            this.tail = newNode;
        }

        this.tail.next = newNode;
        newNode.pre = this.tail;
        this.tail  = newNode;
        this.size++;

    }

    prepend(val){
        let newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        }

        let hold = this.head;
        newNode.next = this.head;
        this.head.pre = newNode;
        this.head = newNode;
        this.size++;
    }

    popFirst(){
        if (!this.head || this.tail) return undefined;
        let currentHead = this.head;
        let newHead = this.head.next;
        currentHead.next = null;
        newHead.pre = null;
        this.head = newHead;
        this.size--;
        return currentHead.val;
    }

    popLast(){
        if (!this.tail || this.tail) return undefined;
        let currentTail = this.tail;
        let newTail = this.tail.pre;
        currentTail.pre = null;
        newTail.next = null;
        this.tail = newTail;
        return currentTail.val;
    }


}


const test = ()=>{
    const assert = require('assert');
    const list = new doublyLinkedList();
    // testing the append method of our linked list
    list.append(5);
    list.append(6);
    // testing the head property of the linke dlist
    assert.deepStrictEqual(list.head.val, 5);
    // testing the next property
    assert.deepStrictEqual(list.head.next, null);
    // testig the previous property 
    assert.deepStrictEqual(list.head.pre, null);
    // testing the prepend method 
    list.prepend(1);
    assert.deepStrictEqual(list.head.val, 1);
    // testing the pop first method
    assert.deepStrictEqual(list.popFirst, 1);
    // testing the pop last method
    assert.deepStrictEqual(list.popLast, 6)
    
}

test();

