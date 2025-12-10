class Queue {

  #queue = [];

  // log() {
  //   for (const item of this.#queue) {
  //     console.log({ item });
  //   }
  // }

  size() {
    return this.#queue.length;
  }

  peek() {
    return this.#queue[0];
  }

  enqueue(item) {
    this.#queue.push(item);
  }

  dequeue() {
    return this.#queue.shift();
  }

}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);

const firstIn = queue.dequeue();

queue.dequeue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(10);
queue.enqueue(10);
queue.enqueue(-Infinity);
queue.enqueue(Infinity);
queue.dequeue();

queue.log();

console.log({
  firstIn,
  peeked: queue.peek(),
  size: queue.size(),
});
