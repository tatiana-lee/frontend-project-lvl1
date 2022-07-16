import readlineSync from 'readline-sync';
import index from './index.js';

function checkCalc(check, userName) {
  let { attemps } = index();
  while (attemps > 0) {
    const { randomFirstOperand, randomSecondOperand, randomOperator } = index();
    console.log(
      'Question:',
      randomFirstOperand,
      randomOperator,
      randomSecondOperand
    );
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = check(
      randomFirstOperand,
      randomSecondOperand,
      randomOperator
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

export default checkCalc;
