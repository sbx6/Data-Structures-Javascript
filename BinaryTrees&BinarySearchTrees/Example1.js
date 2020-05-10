/*
    A binary tree is a linked data structure where each node points to two child nodes (at most).
    The child nodes are called the left child and right child.

    Unlike other linear data structures that we looked, it's a hierarchical data structure.
    Here are the properties of a binary tree:
    	* Each node can point to two children at most.
		* The top most element in the tree is called root.
		* Two Children are usually referred as Left Child and Right Child.
		* The nodes which don't point to any children are called leaf nodes.
		* Non-leaf nodes are called internal nodes. Root is also an internal node if it's not a leaf node.


	The most common binary tree is called a Binary Search Tree(BST).
	A binary tree is a BST if the key of the node is greater than all the nodes in its left subtree and is smaller than all the nodes in its right subtree.


	We will try to implementing some functions of BST to see how It's working.
*/

function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function BST() {
    this._root = null;
}

BST.prototype.insert = function(data) {
    var node = new Node(data);

    // If it's the first node
    if(this._root === null) {
        this._root = node;
        return;
    }

    var current = this._root;

    while(current) {
        if(data < current.data) {
            if(current.left === null) {
                current.left = node;
                return;
            }
            current = current.left;
        } else if (data > current.data) {
            if(current.right === null) {
                current.right = node;
                return;
            }
            current = current.right;
        } else {
            // Duplicates are not supported at this stage
            return;
        }
    }
};

BST.prototype.contains = function(data) {
    var current = this._root;

    while(current) {
        if(data === current.data) {
            return true;
        }

        if(data < current.data) {
            current = current.left
        } else {
            current = current.right;
        }
    }

    return false;
};

// Returns keys in pre-order traversal
BST.prototype.preOrder = function() {
    var output = [];

    function preOrderImpl(node) {
        if (node === null) {
            return;
        }

        // Visit the node itself.
        output.push(node.data);

        // Visit left subtree
        preOrderImpl(node.left);

        // Visit the right subtree
        preOrderImpl(node.right);
    }

    // Call the internal function
    // with Root as the starting point.
    preOrderImpl(this._root);

    return output;
}

// Returns Keys in the InOrder traversal
BST.prototype.inOrder = function() {
    var output = [];

    function inOrderImpl(node) {
        if (node === null) {
            return;
        }

        // Visit left subtree
        inOrderImpl(node.left);

        // Visit the node itself.
        output.push(node.data);

        // Visit the right subtree
        inOrderImpl(node.right);
    }

    // Call the internal function
    // with Root as the starting point.
    inOrderImpl(this._root);

    return output;
}

// Returns Keys in the Post Order traversal
BST.prototype.postOrder = function() {
    var output = [];

    function postOrderImpl(node) {
        if (node === null) {
            return;
        }

        // Visit left subtree
        postOrderImpl(node.left);

        // Visit the right subtree
        postOrderImpl(node.right);

        // Visit the node itself.
        output.push(node.data);
    }

    // Call the internal function
    // with Root as the starting point.
    postOrderImpl(this._root);

    return output;
}

BST.prototype.maximum = function(node) {
    while (node.right) {
        node = node.right;
    }

    return node.data;
}

BST.prototype.remove = function(key) {
    this.removeImpl(key, this._root);
}

BST.prototype.removeImpl = function removeImpl(key, node) {
    if (node != null) {
        if (key < node.data) {
            // Key might be in the left subtree.
            node.left = this.removeImpl(key, node.left);
        } else if (key > node.data) {
            node.right = this.removeImpl(key, node.right);
        } else {
            // Node found.
            // Let's see if it has two children.
            if (node.left && node.right) {
                // Replace current node with
                // predecessor data
                node.data = this.maximum(node.left);
                node.left = this.removeImpl(node.data, node.left);
            } else {
                // Only 1 child.
                // Let's return the child that's valid.
                node = node.left || node.right;
            }
        }
    }

    return node;
}

// var bst = new BST();
// console.log('Inserting into BTS: 5');
// bst.insert(5);
//
// console.log('BST contains 5? Returns ' + bst.contains(5));
// console.log('BST contains 6? Returns ' + bst.contains(6));

/*
    Testing preOrder, inOrder and postOrder
 */

// var data = [50, 40, 70, 60, 20, 99, 45];
// var bst = new BST();
//
// for (var i = 0; i < data.length; i++) {
//     bst.insert(data[i]);
// }
//
// console.log("Pre-Order = " + bst.preOrder());
// console.log("In-Order = " + bst.inOrder());
// console.log("Post-Order = " + bst.postOrder());

/*
    Removing
 */

var data = [50, 40, 70, 60, 20, 99, 45];
var bst = new BST();

for (var i = 0; i < data.length; i++) {
    bst.insert(data[i]);
}

console.log("In-Order = " + bst.inOrder());

bst.remove(40);
console.log("In-Order BST after removing 40 = "
    + bst.inOrder());

bst.remove(70);
console.log("In-Order BST after removing 70 = "
    + bst.inOrder());