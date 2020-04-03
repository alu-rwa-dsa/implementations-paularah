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
     * leveraging on the helper method recursion
     * 
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

let bst = new BinarySearchTree;
bst.insert(2);
bst.insert(5);
bst.insert(7);
bst.insert(1);
bst.insert(4);
console.log(bst.DFS_InOder());