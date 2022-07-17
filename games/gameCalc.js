import getCalc from '../src/getCalc.js';
import randomNumberGenerator from '../src/randomNumberGenerator.js';
import startGame from '../src/startGame.js';

const gameDiscription = 'What is the result of the expression?';
const getCorrectAnswer = (num1, num2, operator) => getCalc(num1, num2, operator);

const calc = () => {
  const operators = ['+', '-', '*'];

  const randomNumber1 = randomNumberGenerator(80) + 20;
  const randomNumber2 = randomNumberGenerator(20) + 1;
  const randomOperator = operators[randomNumberGenerator(operators.length)];

  const correctAnswer = getCorrectAnswer(randomNumber1, randomNumber2, randomOperator);
  const question = `Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`;

  return [question, correctAnswer];
};

const gameCalc = () => startGame(calc, gameDiscription);

export default gameCalc;
