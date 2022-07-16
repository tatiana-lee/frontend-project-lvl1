import readlineSync from 'readline-sync';
import index from '../src/index.js';
import cli from '../src/cli.js';
import getGcd from '../src/getGcd.js';

function gcd() {
  let { attemps } = index();
  const userName = cli();
  console.log('Find the greatest common divisor of given numbers.');

  while (attemps > 0) {
    const { randomFirstOperand, randomSecondOperand } = index();
    console.log('Question:', randomFirstOperand, randomSecondOperand);
    const userAnswer = readlineSync.question('Your answer: ');
    const result = getGcd(randomFirstOperand, randomSecondOperand);
    if (+userAnswer === result) {
      console.log('Correct!');
      attemps -= 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.
Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

export default gcd;
