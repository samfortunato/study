const util = require('util');

class Stack {
	#stack = [];

	peek() {
		return this.#stack.at(-1);
	}

	push(value) {
		this.#stack.push(value);
	}

	pop() {
		return this.#stack.pop();
	}

	[util.inspect.custom]() {
		return {
			[util.inspect.custom]: () => `Stack ${util.inspect(this.#stack)}`,
		};
	}
}

const PAIRS = { ')': '(', ']': '[', '}': '{' };

function validParentheses(parentheses) {
	const stack = new Stack();

	for (const parenthesis of parentheses) {
		if (parenthesis === '(' || parenthesis === '[' || parenthesis === '{') {
			stack.push(parenthesis);
		} else {
			if (stack.peek() !== PAIRS[parenthesis]) return false;
		}
	}

	return true;
}
