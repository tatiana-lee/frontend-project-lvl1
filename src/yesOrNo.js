import readlineSync from 'readline-sync';
import index from './index.js';

function yesOrNo(check, userName) {
  let { attemps } = index();

  while (attemps > 0) {
    const { randomNumber } = index();
    console.log('Question:', randomNumber);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = check(randomNumber) ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      attemps -= 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}

export default yesOrNo;
