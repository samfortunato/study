import { Deque } from './deque.js';

class Queue {

  #queue = new Deque();

  // log() {
  //   this.#queue.log();
  // }

  size() {
    return this.#queue.size();
  }

  peek() {
    return this.#queue.peekHead();
  }

  enqueue(item) {
    this.#queue.enqueueTail(item);
  }

  dequeue() {
    return this.#queue.dequeueHead();
  }

}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(5);
queue.enqueue(3);

const dequeued = queue.dequeue();

console.log({
  dequeued,
  size: queue.size(),
  top: queue.peek(),
});

// queue.log();
