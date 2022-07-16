import randomNumberGenerator from './randomNumberGenerator.js';

function index() {
	let attemps = 3;
	const operators = ['+', '-', '*'];

	const randomNumber = randomNumberGenerator(100) + 1;
	const randomOperator = operators[randomNumberGenerator(operators.length)];
	const randomFirstOperand = randomNumberGenerator(100);
	const randomSecondOperand = randomNumberGenerator(50);

	const isEven = (number) => number % 2 === 0;

	return {
		attemps,
		operators,
		randomNumber,
		randomFirstOperand,
		randomOperator,
		randomSecondOperand,
		isEven,
	};
}

export default index;
