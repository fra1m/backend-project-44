import readlineSync from 'readline-sync';
import _ from 'lodash';
import whatName from './cli.js';

const even = () => {
  const name = whatName();
  console.log('Answer \'yes\' if number even otherwise answer \'no\'.');
  for (let i = 0; i < 3; i++) {
    const num = _.random(1, 100);
    const realAnswer = (num % 2 === 0) ? 'yes' : 'no';
    const answer = readlineSync.question(`Qustion: ${num} `);
    console.log(`Your answer: ${answer}`);
    if (realAnswer === answer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${realAnswer}'. \nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
export default even;
