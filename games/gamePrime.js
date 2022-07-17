import isPrime from '../src/isPrime.js';
import startGame from '../src/startGame.js';
import randomNumberGenerator from '../src/randomNumberGenerator.js';

const getCorrectAnswer = (n) => (isPrime(n) ? 'yes' : 'no');

const gameDiscription = "Answer 'yes' if the number is prime. Otherwise answer 'no'.";

const prime = () => {
  const randomNumber = randomNumberGenerator(100) + 1;
  const correctAnswer = getCorrectAnswer(randomNumber);
  const question = `Question: ${randomNumber}`;
  return [question, correctAnswer];
};

const gamePrime = () => startGame(prime, gameDiscription);

export default gamePrime;
