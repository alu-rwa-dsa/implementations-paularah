/*
Implementation of the queue abstract data type. This is also achived leveraging
on the primary methods of linked list. 
 */

 class Node{
     constructor(val){
         this.val = val;
         this.next = null;
     }
 }

 class Queue{
     constructor(){
         this.first = null;
         this.last = null;
         this.length = 0;
     }
     enque(val){
        let newNode = new Node(val);
         if (!this.first){
             this.first = newNode;
             this.last = this.first;
         }
         this.last.next = newNode;
         this.last = newNode
         this.length ++;

     }
     dequeue(){
         if (!this.first){
             return null;
         }
         let newNode = new Node();
         let value = this.first.val;
         let newFirst = this.first.next;
         this.first = newFirst;
         this.length --;
         return value;
     }
 }

