"use strict";

/**
 * Implementation of the Binary Search Tree Data Structure 
 */

 
class Node{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }


    /**
     * creates a new node with the value and inserts it into a BST
     * @param {Integer} val
     * @returns {Object}  
     */
    insert(val){
        let newNode = new Node(val);
        if(this.root === null) {
            this.root = newNode;
            return this;
        }
        let start = this.root;
        try{
            while(true){
                if (start.value === val) throw new Error;
                if(val < start.value){
                    if(start.left === null){
                        start.left = newNode;
                        return this;
                    }
                    start = start.left;
                }
                
                if (val > start.value){
                    if (start.right === null){
                        start.right = newNode;
                        return this;
                    }
                    start = start.right;
                }
            }
        }catch(err){
            console.error('Error: Invalid input to binary search tree!');
        }
         
    }

    /**
     * Checks in a value is presnt in te node of a binary search tree
     * @param {Interger} val
     * @returns {Boolean} 
     */
    search(val){
        if (this.root === null) return undefined;
        let start = this.root;
        while (start){
            if (val === start.value){
                return true
            }
            if (val < start.value){
                start = start.left;
            }
            else{
                start = start.right;
            }
        }
        return false;
    }

    /**
     * takes in a an array and returns a binary search tree
     * @param {Array} arr
     * @return {Object} BST object 
     */
    create(arr){
        for (let i of arr){
            this.insert(i);
        }
        return this;
    }

}

module.exports = {
    Node: Node,
    BinarySearchTree: BinarySearchTree
}