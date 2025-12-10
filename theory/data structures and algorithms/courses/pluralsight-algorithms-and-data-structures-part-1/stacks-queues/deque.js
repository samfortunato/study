import { DoublyLinkedList } from '../linked-lists/doubly-linked-list.js';

export class Deque {

  #deque = new DoublyLinkedList();

  log() {
    for (const node of this.#deque) {
      console.log({ node });
    }
  }

  size() {
    return this.#deque.size();
  }

  peekHead() {
    return this.#deque.getHead();
  }

  peekTail() {
    return this.#deque.getTail();
  }

  enqueueHead(item) {
    this.#deque.prepend(item);
  }

  enqueueTail(item) {
    this.#deque.append(item);
  }

  dequeueHead() {
    return this.#deque.removeHead();
  }

  dequeueTail() {
    return this.#deque.removeTail();
  }

}

const deque = new Deque();
const deque2 = new Deque();

deque.enqueueHead(1);
deque.enqueueHead(2);
deque.enqueueTail(3);
deque.dequeueTail();
deque.dequeueHead();
deque.enqueueHead(-1);
deque.enqueueHead(-1);
deque.enqueueHead(-1);

// console.log({
//   head: deque.peekHead(),
//   tail: deque.peekTail(),
//   size: deque.size(),
//   doesHeadEqualTail: deque.peekHead() === deque.peekTail(),
// });

// deque.log();
// deque2.log();
