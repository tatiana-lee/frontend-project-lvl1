import makeProgression from '../src/makeProgression.js';
import startGame from '../src/startGame.js';

const gameDiscription = 'What number is missing in the progression?';

const progression = () => {
  const [correctAnswer, showQuestion] = makeProgression();
  const question = `Question: ${showQuestion}`;
  return [question, correctAnswer];
};

const gameProgression = () => startGame(progression, gameDiscription);

export default gameProgression;
