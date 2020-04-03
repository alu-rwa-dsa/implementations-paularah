"use strict";

/**
 * Iplementation of the Binary Search Tree Data Structure 
 */

 

/*
 * @params Integer
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

    /*
    * @params Interger 
    * @returns {BST object}
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

    search(val){
        if (this.root === null) return undefined;
        let start = this.root;
        let found = false;
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
}

module.exports = {
    Node: Node,
    BinarySearchTree: BinarySearchTree
}