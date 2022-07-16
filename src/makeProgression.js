import randomNumberGenerator from './randomNumberGenerator.js';

function makeProgression() {
	const start = randomNumberGenerator(50);
	const step = randomNumberGenerator(10);
	const length = randomNumberGenerator(5) + 5;
	const hidenEl = randomNumberGenerator(length);
	const progr = () => {
		const result = [];
		let el = start;
		let end = length;
		while (end > 0) {
			result.push(el);
			el += step;
			end -= 1;
		}
		return result;
	};

	const array = progr();
	const copyArray = [...array];
	const getQuestionString = (arr) => {
		arr[hidenEl] = '..';
		return arr.join(' ');
	};
	const question = getQuestionString(copyArray);
	const correctAnswer = array[hidenEl];

	const getProgressionResult = (answer) => +answer === array[hidenEl];

	return [correctAnswer, question, getProgressionResult];
}

export default makeProgression;
