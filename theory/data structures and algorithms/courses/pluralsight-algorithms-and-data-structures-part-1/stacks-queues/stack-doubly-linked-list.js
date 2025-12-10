import { DoublyLinkedList } from '../linked-lists/doubly-linked-list.js';

class Stack {

  #stack = new DoublyLinkedList();

  // log() {
  //   for (const item of this.#stack) {
  //     console.log({ item });
  //   }
  // }

  size() {
    return this.#stack.size();
  }

  peek() {
    return this.#stack.getTail();
  }

  push(item) {
    this.#stack.append(item);
  }

  pop() {
    return this.#stack.removeTail();
  }

}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

const popped = stack.pop();

stack.push(4);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();

console.log({
  size: stack.size(),
  top: stack.peek(),
  popped,
});

// stack.log();
