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

		if (
			(userAnswer === 'yes' && isEven) ||
			(userAnswer === 'no' && !isEven)
		) {
			console.log('Correct!')
			attemps -= 1
		} else if (userAnswer === 'no' && isEven) {
			console.log(
				`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`
			)
			break
		} else {
			console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`)
			break
		}
	}
	
	if (attemps === 0) {
		console.log(`Congratulations, ${userName}!`)
	}
}

export default even
