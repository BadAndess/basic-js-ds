const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
}

  root() {
    //throw new NotImplementedError('Not implemented');
    return this.tree;
  }

  add(value) {
    this.root = addWithin(this.root, value);

    function addWithin(node, value) {
        if (!node) {
            return new Node(value);
        }

        if (node.value === value) {
            return node;
        }

        if (value < node.value) {
            node.left = addWithin(node.left, value)
        } else {
            node.right = addWithin(node.right, value)
        }

        return node;
    }
  }

  has(value) {
    return searchWithin(this.root, value);

        function searchWithin(node, value) {
            if (!node) {
                return false;
            }

            if (node.value === value) {
                return true;
            }

            return value < node.value ?
                searchWithin(node.left, value) :
                searchWithin(node.right, value);
        }
  }

  find(value) {
   
  }

  remove(value) {
    
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};