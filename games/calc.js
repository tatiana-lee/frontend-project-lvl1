import index from '../src/index.js';
import cli from '../src/cli.js';
import getCalc from '../src/getCalc.js';
import checkCalc from '../src/checkCalc.js';

function calc() {
  let { attemps } = index();
  const userName = cli();
  console.log('What is the result of the expression?');

  checkCalc(attemps, getCalc, userName);
}

export default calc;
