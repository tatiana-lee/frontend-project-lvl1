import getGcd from '../src/getGcd.js';
import randomNumberGenerator from '../src/randomNumberGenerator.js';
import startGame from '../src/startGame.js';

const gameDiscription = 'Find the greatest common divisor of given numbers.';

const gcd = () => {
  const randomFirstOperand = randomNumberGenerator(100) + 1;
  const randomSecondOperand = randomNumberGenerator(50) + 1;
  const correctAnswer = getGcd(randomFirstOperand, randomSecondOperand);
  const question = `Question: ${randomFirstOperand} ${randomSecondOperand}`;
  return [question, correctAnswer];
};

const gameGcd = () => startGame(gcd, gameDiscription);

export default gameGcd;
