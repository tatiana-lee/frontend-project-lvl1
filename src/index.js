import randomNumberGenerator from './randomNumberGenerator.js'

function index() {
	let attemps = 3
	const operators = ['+', '-', '*']

	const randomNumber = randomNumberGenerator(100)
	const randomOperator = operators[randomNumberGenerator(operators.length)]
	const randomFirstOperand = randomNumberGenerator(100)
	const randomSecondOperand = randomNumberGenerator(100)

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

	const gcdResult = (x, y) => {
		if (y > x) {
			return gcdResult(y, x)
		}
		if (!y) {
			return x
		}
		return gcdResult(y, x % y)
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
		gcdResult,
	}
}

export default index
