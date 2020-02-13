/*
 The stack abstarct data type implementation using linked list.
 This is achieved by using the popFirst and prepend primary methods of 
 a linked list
 */
const assert = require('assert')

//  A ndoe class 
 class Node{
     constructor(val){
        //  the node class has value and the next as it attributes
         this.val = val;
         this.next = null;
     }
 }

 class Stack{
     constructor(){
        //  equivalent to the head of a linked list
        this.first = null;
        //  equivalent to the tail of a linked list
        this.last = null;
        // the length of the stack
        this.length = 0;
        
     }

     push(val){
        //  make a new node that references the value
         let newNode = new Node(val);
        //  set the next property of the newNode to the first node
         newNode.next = this.first
        //  Make the new node the first node
         this.first = newNode;
        //  Increement and return the length 
         return ++this.length;
     }
     
     pop(){

        // dealing with the egde case of an empty stack
        // return null ? !this.first:{}
        if (!this.first){
            return null;
        }
         let newFirst = this.first.next;
        //  severe the link between the head and the rest of nodes
        this.first.next = null;
        // save of value in the first node
        let value = this.first.val;
        // make the second node the first node
        this.first = newFirst;
        // decrement the length 
        this.length--;
        // and return the value of the previous first node
        return value;
     }
     peek(){
         // dealing with the egde case of an empty stack
        if (!this.first){
            return null;
        } 
        else{
            return this.first.val;
        }
     }

 }


let myStack = new Stack();
myStack.push(4);
let actual = myStack.first.val; 
assert.deepStrictEqual(actual, 4);
actual = myStack.first;
console.log(myStack);
// console.log(actual);
// assert.deepStrictEqual(actual.prototype, { val: 4, next: null })


