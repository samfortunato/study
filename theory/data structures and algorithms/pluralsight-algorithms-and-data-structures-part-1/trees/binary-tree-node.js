export class BinaryTreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

}

const root = new BinaryTreeNode(1);
const left = new BinaryTreeNode(2);
const right = new BinaryTreeNode(3);

root.left = left;
root.right = right;

// console.log({
//   root,
//   left,
//   right,
// });
