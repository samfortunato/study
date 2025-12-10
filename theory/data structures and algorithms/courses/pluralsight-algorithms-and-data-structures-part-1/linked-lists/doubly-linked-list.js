class DoublyLinkedListNode {

  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }

}

export class DoublyLinkedList {

  #head;
  #tail;
  #size;

  constructor() {
    this.#head = null;
    this.#tail = null;

    this.#size = 0;
  }

  *[Symbol.iterator]() {
    let currentNode = this.#head;

    while (currentNode) {
      yield currentNode;

      currentNode = currentNode.next;
    }
  }

  size() { return this.#size; }
  getHead() { return this.#head; }
  getTail() { return this.#tail; }

  find(value) {
    // let currentNode = this.#head;

    // while (currentNode) {
    //   if (currentNode.value === value) return currentNode;

    //   currentNode = currentNode.next;
    // }

    // return null;

    let found = null;
    let currentNode = this.#head;

    while (!found && currentNode) {
      if (currentNode.value === value) found = currentNode;
      else currentNode = currentNode.next;
    }

    return found;
  }

  contains(value) {
    // let currentNode = this.#head;

    // while (currentNode) {
    //   if (currentNode.value === value) return true;

    //   currentNode = currentNode.next;
    // }

    // return false;

    // let doesContain = false;
    // let currentNode = this.#head;

    // while (!doesContain && currentNode) {
    //   if (currentNode.value === value) doesContain = true;
    //   else currentNode = currentNode.next;
    // }

    // return doesContain;

    return !!this.find(value);
  }

  values() {
    let currentNode = this.#head;

    return {
      *[Symbol.iterator]() {
        while (currentNode) {
          yield currentNode;

          currentNode = currentNode.next;
        }
      },
    };
  }

  reverseValues() {
    let currentNode = this.#tail;

    return {
      *[Symbol.iterator]() {
        while (currentNode) {
          yield currentNode;

          currentNode = currentNode.prev;
        }
      }
    }
  }

  prepend(value) {
    const newNode = new DoublyLinkedListNode(value, null, this.#head);

    if (this.#head) this.#head.prev = newNode;

    this.#head = newNode;

    if (!this.#tail) this.#tail = this.#head;

    this.#size++;
  }

  append(value) {
    const newNode = new DoublyLinkedListNode(value, this.#tail);

    if (this.#tail) this.#tail.next = newNode;

    this.#tail = newNode;

    if (!this.#head) this.#head = this.#tail;

    this.#size++;
  }

  remove(value) {
    const nodeToRemove = this.find(value);
    let wasRemoved = false;

    if (nodeToRemove) {
      const prevNode = nodeToRemove.prev;
      const nextNode = nodeToRemove.next;

      if (!prevNode) {
        this.#head = nextNode;

        if (this.#head) this.#head.prev = null;
      } else {
        prevNode.next = nextNode;
      }

      if (!nextNode) {
        this.#tail = prevNode;

        if (this.#tail) this.#tail.next = null;
      } else {
        nextNode.prev = prevNode;
      }

      this.#size--;
      wasRemoved = true;
    }

    return wasRemoved;
  }

  removeHead() {
    let removed = this.#head;

    if (this.#head?.next) this.#head.next.prev = null;
    if (this.#head) this.#head = this.#head.next;
    if (removed) this.#size--;
    if (this.#size <= 1) this.#tail = this.#head;

    return removed;
  }

  removeTail() {
    let removed = this.#tail;

    if (this.#tail?.prev) this.#tail.prev.next = null;
    if (this.#tail) this.#tail = this.#tail.prev;
    if (removed) this.#size--;
    if (this.#size <= 1) this.#head = this.#tail;

    return removed;
  }

}

const node1 = new DoublyLinkedListNode(1);
const node2 = new DoublyLinkedListNode(2);
const node3 = new DoublyLinkedListNode(3);

node1.next = node2;
node2.prev = node1;

node2.next = node3;
node3.prev = node2;

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.append(1);
doublyLinkedList.append(2);
doublyLinkedList.append(3);

// for (const node of doublyLinkedList.reverseValues()) {
//   console.log(node);
// }

// console.log({
//   doublyLinkedList,
//   found: doublyLinkedList.find(1),
//   notFound: doublyLinkedList.find(4),
//   contains: doublyLinkedList.contains(1),
//   doesNotContain: doublyLinkedList.contains(4),
//   size: doublyLinkedList.size(),
// });
