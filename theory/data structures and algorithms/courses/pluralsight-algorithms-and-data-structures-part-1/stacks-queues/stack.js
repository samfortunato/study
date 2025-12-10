class Stack {

  #stack = [];

  // log() {
  //   for (const item of this.#stack) {
  //     console.log({ item });
  //   }
  // }

  size() {
    return this.#stack.length;
  }

  peek() {
    return this.#stack[this.#stack.length - 1];
  }

  push(item) {
    this.#stack.push(item);
  }

  pop() {
    return this.#stack.pop();
  }

}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

const thirdItemPopped = stack.pop();
const secondItem = stack.peek();

stack.push(10);
stack.push(11);
stack.push(104);

console.log({
  stack,
  thirdItemPopped,
  secondItem,
  size: stack.size(),
});

// stack.log();
