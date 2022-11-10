import readlineSync from 'readline-sync';
import _ from 'lodash';
import whatName from './cli.js';
import {
  result, NOD, randomArray, randomRealAnswer, randomPrimeNums,
} from './index.js';

const even = () => {
  const name = whatName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num = _.random(1, 100);
    const realAnswer = (num % 2 === 0) ? 'yes' : 'no';
    const answer = readlineSync.question(`Question: ${num} `);
    if (result(realAnswer, answer, name) === false) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export { even };

const calculator = () => {
  const name = whatName();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const num1 = _.random(1, 100);
    const num2 = _.random(1, 100);
    let realAnswer = num1 + num2;
    realAnswer = String(realAnswer);
    const answer = readlineSync.question(`Question: ${num1} + ${num2} `);
    if (result(realAnswer, answer, name) === false) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export { calculator };

const findGCD = () => {
  const name = whatName();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const num1 = _.random(1, 100);
    const num2 = _.random(1, 100);
    let realAnswer = NOD(num1, num2);
    realAnswer = String(realAnswer);
    const answer = readlineSync.question(`Question: ${num1} ${num2} `);
    if (result(realAnswer, answer, name) === false) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export { findGCD };

const progression = () => {
  const name = whatName();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const mass = randomArray();
    const realAnswer = randomRealAnswer(mass);
    mass[mass.indexOf(Number(realAnswer))] = '..';
    const answer = readlineSync.question(`Question: ${String(mass).replace(/,/g, ' ')} `);
    if (result(realAnswer, answer, name) === false) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export { progression };

const prime = () => {
  const name = whatName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const primeOrNot = _.random(2, 10);
    const realAnswer = randomPrimeNums(primeOrNot);
    const answer = readlineSync.question(`Question: ${primeOrNot} `);
    if (result(realAnswer, answer, name) === false) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export { prime };
