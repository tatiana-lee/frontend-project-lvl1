import cli from '../src/cli.js';
import getCalc from '../src/getCalc.js';
import checkCalc from '../src/checkCalc.js';

function calc() {
  const userName = cli();
  console.log('What is the result of the expression?');

  checkCalc(getCalc, userName);
}

export default calc;
