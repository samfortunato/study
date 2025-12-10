import { BinaryTreeNode } from './binary-tree-node.js';

class BinarySearchTree {

  root = null;

  contains(value) {
    return !!this.find(value);
  }

  find(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        break;

      } else if (value < currentNode.value) {
        currentNode = currentNode.left;

      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
    }

    return currentNode;
  }

  findNodeAndItsParent(value) {
    let parent = null;
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        break;

      } else if (value < currentNode.value) {
        parent = currentNode;
        currentNode = currentNode.left;

      } else if (value > currentNode.value) {
        parent = currentNode;
        currentNode = currentNode.right;
      }
    }

    return [currentNode, parent];
  }

  add(value) {
    if (!this.root) {
      this.root = new BinaryTreeNode(value);
    } else {
      this.#add(value, this.root);
    }
  }

  remove(value) {
    let [node, parent] = this.findNodeAndItsParent(value);
    let wasRemoved = false;

    if (node && !node.right) {
      if (!parent) {
        this.root = node.left;

      } else if (parent.value < node.value) {
        parent.right = node.left;

      } else if (parent.value > node.value) {
        parent.left = node.left;
      }

    } else if (node && !node.right.left) {
      if (!parent) {
        this.root = node.right;

      } else if (parent.value < node.value) {
        parent.right = node.right;

      } else if (parent.value > node.value) {
        parent.left = node.right;
      }

    } else {
      let leftMost = node.right.left;
      let leftMostParent = node.right;

      while (leftMost.left) {
        leftMostParent = leftMost;
        leftMost = leftMostParent.left;
      }

      leftMostParent.left = leftMost.right;
      leftMost.left = node.left;
      leftMost.right = node.right;

      if (!parent) {
        this.root = leftMost;

      } else {
        if (parent.value < node.value) {
          parent.right = leftMost;
        } else if (parent.value > node.value) {
          parent.left = leftMost;
        }
      }
    }

    return wasRemoved;
  }

  clear() {
    this.root = null;
  }

  preOrderTraverse(action) {
    this.#preOrderTraverse(action, this.root);
  }

  inOrderTraverse(action) {
    this.#inOrderTraverse(action, this.root);
  }

  postOrderTraverse(action) {
    this.#postOrderTraverse(action, this.root);
  }

  #add(value, node) {
    if (value < node.value) {
      if (!node.left) node.left = new BinaryTreeNode(value);
      else this.#add(value, node.left);

    } else if (value >= node.value) {
      if (!node.right) node.right = new BinaryTreeNode(value);
      else this.#add(value, node.right);
    }
  }

  #preOrderTraverse(action, node) {
    if (node) {
      action(node.value);

      this.#preOrderTraverse(action, node.left);
      this.#preOrderTraverse(action, node.right);
    }
  }

  #inOrderTraverse(action, node) {
    if (node) {
      this.#inOrderTraverse(action, node.left);

      action(node.value);

      this.#inOrderTraverse(action, node.right);
    }
  }

  #postOrderTraverse(action, node) {
    if (node) {
      this.#postOrderTraverse(action, node.left);
      this.#postOrderTraverse(action, node.right);

      action(node.value);
    }
  }

}

const binarySearchTree = new BinarySearchTree();
const binarySearchTreeCopy = new BinarySearchTree();

// how to copy a tree into another tree
// (new tree ends up being identical to the first tree, in values and structure):
binarySearchTree.preOrderTraverse((node) => binarySearchTreeCopy.add(node.value));

// print values in sort order (from least to greatest):
binarySearchTree.inOrderTraverse((node) => console.log(node.value));
