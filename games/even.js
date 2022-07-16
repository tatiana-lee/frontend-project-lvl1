import readlineSync from 'readline-sync'
import index from '../src/index.js'
import cli from '../src/cli.js'

function even() {
	let { attemps } = index()
	const userName = cli()
	console.log("Answer 'yes' if the number is even, otherwise answer 'no'.")
	while (attemps > 0) {
		const { randomNumber, isEven } = index()
		console.log('Question:', randomNumber)
		const userAnswer = readlineSync.question('Your answer: ')
		const correctAnswer = isEven

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