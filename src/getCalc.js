function getCalc(operator, a, b) {
	switch (operator) {
		case '+':
			return a + b;
		case '-':
			return a - b;
		case '*':
			return a * b;
		default:
			break;
	}
}

export default getCalc;
