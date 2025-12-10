class LinkedListNode {

  constructor(value) {
    this.value = value;
    this.next = null;
  }

}

class SinglyLinkedListNode {

  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

}

const head = new LinkedListNode(1);

head.next = new LinkedListNode(2);
head.next.next = new LinkedListNode(3);
