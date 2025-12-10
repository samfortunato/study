class DoublyLinkedListNode {

  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }

}

class SortedDoublyLinkedList {

  constructor() {
    this.head = null;
    this.tail = null;

    this.size = 0;
  }

  log() {
    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode.value);

      currentNode = currentNode.next;
    }
  }

  add(value) {
    const newNode = new DoublyLinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;

    } else if (value < this.head.value) {
      newNode.next = this.head;
      this.head.prev = newNode;

      this.head = newNode;

    } else if (value > this.tail.value) {
      this.tail.next = newNode;
      newNode.prev = this.tail;

      this.tail = newNode;

    } else {
      let currentNode = this.head;

      while (currentNode) {
        if (currentNode.value <= value && value <= currentNode.next.value) {
          newNode.prev = currentNode;
          newNode.next = currentNode.next;
          currentNode.next.prev = newNode;
          currentNode.next = newNode;

          break;
        }

        currentNode = currentNode.next;
      }
    }

    this.size++;
  }

}
