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
		console.log('Question:', randomNumber)
		const userAnswer = readlineSync.question('Your answer: ')
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no'

		if (userAnswer === correctAnswer) {
			console.log('Correct!')
			attemps -= 1
		} else {
			console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`)
			return
		}
	}
	
	console.log(`Congratulations, ${userName}!`)
}

export default even