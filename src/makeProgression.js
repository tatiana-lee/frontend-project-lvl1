import randomNumberGenerator from './randomNumberGenerator.js';

const makeProgression = () => {
  const start = randomNumberGenerator(50);
  const step = randomNumberGenerator(10) + 1;
  const length = randomNumberGenerator(5) + 6;
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
  const getQuestionString = (arr) => {
    const copyArray = [...arr];
    copyArray[hidenEl] = '..';
    return copyArray.join(' ');
  };

  const showQuestion = getQuestionString(array);
  const correctAnswer = array[hidenEl];

  return [correctAnswer, showQuestion];
}

export default makeProgression;
