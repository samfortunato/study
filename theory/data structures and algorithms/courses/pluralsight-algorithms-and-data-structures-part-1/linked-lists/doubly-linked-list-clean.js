class DoublyLinkedListNode {

  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }

}

class DoublyLinkedList {

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

  find(value) {
    let found = null;
    let currentNode = this.#head;

    while (!found && currentNode) {
      if (currentNode.value === value) found = currentNode;
      else currentNode = currentNode.next;
    }

    return found;
  }

  contains(value) {
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

}
