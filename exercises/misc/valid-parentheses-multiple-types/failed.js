/** not working lol */
function validParentheses(parentheses) {
	let roundCount = 0;
	let squareCount = 0;
	let curlyCount = 0;

	for (const parenthesis of parentheses) {
		if (parenthesis === '(') roundCount++;
		if (parenthesis === ')') roundCount--;
		if (parenthesis === '[') squareCount++;
		if (parenthesis === ']') squareCount--;
		if (parenthesis === '{') curlyCount++;
		if (parenthesis === '}') curlyCount--;

		if (roundCount < 0 || squareCount < 0 || curlyCount < 0) break;
	}

	return roundCount === 0 && squareCount === 0 && curlyCount === 0;
}
