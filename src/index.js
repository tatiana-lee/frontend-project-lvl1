import randomNumberGenerator from './randomNumberGenerator.js'

function index() {
	let attemps = 3
	const operators = ['+', '-', '*']

	const randomNumber = randomNumberGenerator(100)
	const randomOperator = operators[randomNumberGenerator(operators.length)]
	const randomFirstOperand = randomNumberGenerator(10)
	const randomSecondOperand = randomNumberGenerator(10)

	const expressionResult = (randomOperator) => {
		switch (randomOperator) {
			case '+':
				return randomFirstOperand + randomSecondOperand
			case '-':
				return randomFirstOperand - randomSecondOperand
			case '*':
				return randomFirstOperand * randomSecondOperand
			default:
				break
		}
	}

	const isEven = randomNumber % 2 === 0

	return {
		attemps,
		operators,
		randomNumber,
		randomFirstOperand,
		randomOperator,
		randomSecondOperand,
		isEven,
		expressionResult,
	}
}

export default index
