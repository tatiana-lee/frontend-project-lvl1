import readlineSync from 'readline-sync'
import index from '../src/index.js'
import cli from '../src/cli.js'

function calc() {
	let { attemps } = index()
	const userName = cli()
	console.log('What is the result of the expression?')
	while (attemps > 0) {
    const { randomFirstOperand, randomOperator, randomSecondOperand, expressionResult } = index()

		console.log('Question:', randomFirstOperand, randomOperator, randomSecondOperand)
		const userAnswer = readlineSync.question('Your answer: ')

		if (+userAnswer === expressionResult(randomOperator)) {
			console.log('Correct!')
			attemps -= 1
		} else {
			console.log(
				`'${userAnswer}' is wrong answer ;(. Correct answer was '${expressionResult(randomOperator)}'.\nLet's try again, ${userName}!`
			)
			break
		}
	}
	
	console.log(`Congratulations, ${userName}!`)
}

export default calc