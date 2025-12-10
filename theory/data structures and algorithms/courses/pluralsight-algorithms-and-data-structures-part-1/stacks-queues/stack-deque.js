import { Deque } from './deque.js';

class Stack {

  #stack = new Deque();

  // log() {
  //   this.#stack.log();
  // }

  size() {
    return this.#stack.size();
  }

  peek() {
    return this.#stack.peekTail();
  }

  push(item) {
    this.#stack.enqueueTail(item);
  }

  pop() {
    return this.#stack.dequeueTail();
  }

}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(10);

const popped = stack.pop();

stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();

// stack.log();

console.log({
  popped,
  top: stack.peek(),
  size: stack.size(),
});
