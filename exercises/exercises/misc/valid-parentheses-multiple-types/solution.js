function validParentheses(parentheses) {
	const PAIRS = { ')': '(', ']': '[', '}': '{' };
	const stack = [];

	for (const parenthesis of parentheses) {
		if (parenthesis === '(' || parenthesis === '[' || parenthesis === '{') {
			stack.push(parenthesis);
		} else {
			if (stack.pop() !== PAIRS[parenthesis]) return false;
		}
	}

	return true;
}
