import { DoublyLinkedList } from '../linked-lists/doubly-linked-list.js';

class Queue {

  #queue = new DoublyLinkedList();

  // log() {
  //   for (const item of this.#queue) {
  //     console.log({ item });
  //   }
  // }

  size() {
    return this.#queue.size();
  }

  peek() {
    return this.#queue.getHead();
  }

  enqueue(item) {
    this.#queue.append(item);
  }

  dequeue() {
    return this.#queue.removeHead();
  }

}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(10);

const dequeued = queue.dequeue();

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

const dequeuedEmpty = queue.dequeue();

console.log({
  front: queue.peek(),
  size: queue.size(),
  dequeued,
  dequeuedEmpty,
});

queue.log();
