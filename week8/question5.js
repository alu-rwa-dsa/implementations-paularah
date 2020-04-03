"use strict";

let BinarySearchTree = require('./question4').BinarySearchTree;

let assert = require('assert');

function creatBST(arr){
    let bst = new BinarySearchTree,
        values;
    for(let i of arr){
        bst.insert(i)
    }
    values = bst.DFS_InOder();
    return values
}



/**
 * Unit test 
 */
const test = () =>{
    assert.deepStrictEqual(creatBST([2, 5, 7, 1, 4]), [1, 2, 4, 5, 7]);
}

test();