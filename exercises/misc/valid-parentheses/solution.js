function validParentheses(parentheses) {
	let collapse = 0;

	for (const parenthesis of parentheses) {
		if (parenthesis === '(') collapse++;
		if (parenthesis === ')') collapse--;

		if (collapse < 0) break;
	}

	return collapse === 0;
}
