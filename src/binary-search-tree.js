const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// class Node {
//   constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//   }
// }

class BinarySearchTree {
  constructor(){
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    this.tree = addWithin(this.tree, data);

    function addWithin(node, data) {
      if(!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return hasNode(this.tree, data);

    function hasNode (node, data) {
      if(!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      return data < node.data ? hasNode(node.left, data) : hasNode(node.right, data);
    }
  }


  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
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