import readlineSync from 'readline-sync'
import index from '../src/index.js'
import cli from '../src/cli.js'

function gcd() {
  let { attemps } = index()
	const userName = cli()
	console.log('Find the greatest common divisor of given numbers.')
	while (attemps > 0) {
    const { randomFirstOperand, randomSecondOperand, gcdResult } = index()

		console.log('Question:', randomFirstOperand, randomSecondOperand)
		const userAnswer = readlineSync.question('Your answer: ')
    const result = gcdResult(randomFirstOperand, randomSecondOperand)
		if (+userAnswer === result) {
			console.log('Correct!')
			attemps -= 1
		} else {
			console.log(
				`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`
			)
			break
		}
	}
	
  console.log(`Congratulations, ${userName}!`)
}

export default gcd