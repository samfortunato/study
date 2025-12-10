class LinkedListNode {

  constructor(data) {
    this.data = data;
    this.next = null;
  }

}

class LinkedList {

  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }

  size() {
    let currentNode = this.head;
    let size = 0;

    while (currentNode) {
      size++;
      currentNode = currentNode.next;
    }

    return size;
  }

  search(data) {
    let currentNode = this.head;
    let found = null;

    while (currentNode && !found) {
      if (currentNode.data === data) found = currentNode;

      currentNode = currentNode.next;
    }

    return found;
  }

  getNodeAtIndex(idx) {
    let currentIdx = 0;
    let currentNode = this.head;

    while (currentIdx !== idx) {
      currentNode = currentNode.next;
      currentIdx++;
    }

    return currentNode;
  }

  insert(data, idx) {
    if (idx === 0) {
      this.prepend(data);

    } else {
      let currentIdx = 0;
      let currentNode = this.head;

      while (currentIdx < idx - 1) {
        currentIdx++;
        currentNode = currentNode.next;
      }

      const newNode = new LinkedListNode(data);
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
  }

  deleteAt(idx) {
    if (idx === 0) {
      this.head = this.head.next;

    } else {
      let currentIdx = 0;
      let currentNode = this.head;

      while (currentIdx < idx - 1) {
        currentIdx++;
        currentNode = currentNode.next;
      }

      currentNode.next = currentNode.next.next;
    }
  }

  deleteData(data) {
    let currentNode = this.head;

    while (currentNode.next.data !== data) {
      currentNode = currentNode.next;
    }

    currentNode.next = currentNode.next.next;
  }

  prepend(data) {
    const newNode = new LinkedListNode(data);
    newNode.next = this.head;

    this.head = newNode;
  }

  print() {
    const values = [];
    let currentNode = this.head;

    while (currentNode) {
      values.push(currentNode.data);
      currentNode = currentNode.next;
    }

    console.log(values);
  }

}

const linkedList = new LinkedList();
const node1 = new LinkedListNode(1);
const node2 = new LinkedListNode(2);

linkedList.head = node1;
linkedList.head.next = node2;

linkedList.prepend(0);

module.exports = {
  LinkedListNode,
  LinkedList,
};
