import readlineSync from 'readline-sync'
import index from '../src/index.js'
import cli from '../src/cli.js'
import isPrime from '../src/isPrime.js'

function even() {
	let { attemps } = index()
	const userName = cli()
	console.log("Answer 'yes' if the number is prime. Otherwise answer 'no'.")
	while (attemps > 0) {
		const { randomNumber } = index()
    const correctAnswer = isPrime(randomNumber)
		console.log('Question:', randomNumber)
		const userAnswer = readlineSync.question('Your answer: ')

		if (
			(userAnswer === 'yes' && correctAnswer) ||
			(userAnswer === 'no' && !correctAnswer)
		) {
			console.log('Correct!')
			attemps -= 1
		} else if (userAnswer === 'no' && correctAnswer) {
			console.log(
				`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`
			)
			return
		} else {
			console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`)
			return
		}
	}
	
	console.log(`Congratulations, ${userName}!`)
}

export default even