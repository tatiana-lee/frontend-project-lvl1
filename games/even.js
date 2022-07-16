import index from '../src/index.js';
import cli from '../src/cli.js';
import yesOrNo from '../src/yesOrNo.js';

function even() {
	const { attemps, isEven } = index();
	const userName = cli();
	console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
	yesOrNo(attemps, isEven, userName);
}

export default even;
