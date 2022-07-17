import startGame from '../src/startGame.js';
import randomNumberGenerator from '../src/randomNumberGenerator.js';

const isEven = (number) => number % 2 === 0;

const gameDiscription = "Answer 'yes' if the number is even, otherwise answer 'no'.";

const even = () => {
  const randomNumber = randomNumberGenerator(200) + 1;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  const question = `Question: ${randomNumber}`;
  return [question, correctAnswer];
};

const gameEven = () => startGame(even, gameDiscription);

export default gameEven;
