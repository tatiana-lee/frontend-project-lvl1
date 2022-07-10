import readlineSync from 'readline-sync'

function even() {
  let gameTries = 3
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + userName + '!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  while (gameTries > 0) {
    let randomNumber = Math.floor(Math.random() * 100)
    console.log('Question:', randomNumber)
    const userAnswer = readlineSync.question('Your answer: ')
    if ((userAnswer === 'yes' && randomNumber % 2 === 0) || (userAnswer === 'no' && randomNumber % 2 !== 0)) {
      console.log('Correct!')
      gameTries -= 1
    } else if (userAnswer === 'no' && randomNumber % 2 === 0) {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, " + userName + '!')
      break
    } else {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, " + userName + '!')
      break
    }
  }
  if (gameTries === 0) {
    console.log('Congratulations, ' + userName + '!');
  }
}

export default even