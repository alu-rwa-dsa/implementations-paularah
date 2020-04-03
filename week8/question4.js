"use strict";

/**
 * static file imports from question 2
 * extending the functionality of the BST class to include traversals using inheritance
 */

let question2 = require('./question2.js');


class BinarySearchTree extends question2.BinarySearchTree{
    constructor(){
        super();
    }
    
    /**
     * Uses a queue to keep track of the nodes while transversing
     * returns an array of the values in a node in BFS order
     * @param null
     * @returns Array 
     */
    breadthFirstSearch(){
        let queue = [],
            data = [],
            node = this.root;
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }

    /**
     * Uses helper method recursion design pattern. I find this a more intuitive way to write problems
     * @param null
     * @returns [Array]
     */
    DFS_PreOrder(){
        let data  = [],
            start = this.root;
        function transverse(node){
            data.push(node.value)
            if (node.left) transverse(node.left);
            if (node.right) transverse(node.right);

        }
        transverse(start);
        return data;
    }

    /**
     * @param null
     * @returns [Array]
     */
    DFS_PostOrder(){
        let data = [],
            start = this.root;

        function transverse(node){
            if (node.left) transverse(node.left);
            if (node.right) transverse(node.right);
            data.push(node.value);
        } 
        transverse(start)
        return data;
    }

    /**
     * @param null
     * @returns [Array]
     */
    DFS_InOder(){
        let data = [],
            start = this.root;

        function transverse(node){
            if (node.left) transverse(node.left);
            data.push(node.value);
            if (node.right) transverse(node.right);
        } 
        transverse(start)
        return data;
    }
    
}

module.exports = {
    BinarySearchTree: BinarySearchTree
};