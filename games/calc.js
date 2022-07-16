import readlineSync from 'readline-sync';
import index from '../src/index.js';
import cli from '../src/cli.js';
import getCalc from '../src/getCalc.js';

function calc() {
	let { attemps } = index();
	const userName = cli();
	console.log('What is the result of the expression?');
	while (attemps > 0) {
		const {
			randomFirstOperand,
			randomOperator,
			randomSecondOperand,
		} = index();

		console.log(
			'Question:',
			randomFirstOperand,
			randomOperator,
			randomSecondOperand
		);
		const userAnswer = readlineSync.question('Your answer: ');
		const correctAnswer = getCalc(
			randomOperator,
			randomFirstOperand,
			randomSecondOperand
		);

		if (+userAnswer === correctAnswer) {
			console.log('Correct!');
			attemps -= 1;
		} else {
			console.log(
				`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`
			);
			return;
		}
	}
	console.log(`Congratulations, ${userName}!`);
}

export default calc;
