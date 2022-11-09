import readlineSync from 'readline-sync';
import _ from 'lodash';
import whatName from './cli.js';
import {
  result, NOD, randomArray, randomRealAnswer,
} from './index.js';

export {
  even, calculator, findGCD, progression,
};

const even = () => {
  const name = whatName();
  console.log('Answer \'yes\' if number even otherwise answer \'no\'.');
  for (let i = 0; i < 3; i++) {
    const num = _.random(1, 100);
    const realAnswer = (num % 2 === 0) ? 'yes' : 'no';
    const answer = readlineSync.question(`Qustion: ${num} `);
    if (result(realAnswer, answer, name) === false) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const calculator = () => {
  const name = whatName();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i++) {
    const num1 = _.random(1, 100);
    const num2 = _.random(1, 100);
    let realAnswer = num1 + num2;
    realAnswer = String(realAnswer);
    const answer = readlineSync.question(`Qustion: ${num1} + ${num2} `);
    if (result(realAnswer, answer, name) === false) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const findGCD = () => {
  const name = whatName();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i++) {
    const num1 = _.random(1, 100);
    const num2 = _.random(1, 100);
    let realAnswer = NOD(num1, num2);
    realAnswer = String(realAnswer);
    const answer = readlineSync.question(`Qustion: ${num1} ${num2} `);
    if (result(realAnswer, answer, name) === false) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const progression = () => {
  const name = whatName();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i++) {
    const mass = randomArray();
    const realAnswer = randomRealAnswer(mass);
    mass[mass.indexOf(Number(realAnswer))] = '..';
    const answer = readlineSync.question(`Qustion: ${mass} `);
    if (result(realAnswer, answer, name) === false) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};