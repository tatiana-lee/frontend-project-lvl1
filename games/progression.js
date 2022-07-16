import readlineSync from 'readline-sync';
import index from '../src/index.js';
import cli from '../src/cli.js';
import makeProgression from '../src/makeProgression.js';

function progression() {
  let { attemps } = index();
  const userName = cli();
  console.log('What number is missing in the progression?');
  while (attemps > 0) {
    const [correctAnswer, question, getProgressionResult] = makeProgression();
    console.log('Question:', question);
    const userAnswer = readlineSync.question('Your answer: ');
    const result = getProgressionResult(userAnswer);
    if (result) {
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

export default progression;
