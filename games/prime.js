import cli from '../src/cli.js';
import isPrime from '../src/isPrime.js';
import yesOrNo from '../src/yesOrNo.js';

function even() {
  const userName = cli();
  console.log("Answer 'yes' if the number is prime. Otherwise answer 'no'.");
  yesOrNo(isPrime, userName);
}

export default even;
