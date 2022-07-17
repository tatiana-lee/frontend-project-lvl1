import readlineSync from 'readline-sync';
import cli from './cli.js';

const startGame = (game, gameDiscription) => {
  const rounds = 3;
  const userName = cli();
  console.log(gameDiscription);

  for (let i = 1; i <= rounds; i += 1) {
    const [question, correctAnswer] = game();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
