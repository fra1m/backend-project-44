import _ from 'lodash';

export {
  result, NOD, randomArray, randomRealAnswer,
};

const result = (realAnswer, answer, name) => {
  console.log(`Your answer: ${answer}`);
  if (realAnswer === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${realAnswer}'. \nLet's try again, ${name}!`);
  return false;
};

const NOD = (num1, num2) => {
  const maxNum = Math.max(num1, num2);
  const minNum = Math.min(num1, num2);
  const nod = maxNum % minNum;
  if (nod === 0) {
    return minNum;
  }
  return NOD(nod, minNum);
};

const randomArray = () => {
  const n = _.random(5, 10);
  const x = _.random(1, 5);
  const masNums = [];
  masNums.push(x);
  for (let i = 1; i < n; i++) {
    masNums.push(masNums[i - 1] + x);
  }

  return masNums;
};

const randomRealAnswer = (mass) => {
  const missedIndex = _.random(0, mass.length - 1);
  const realAnswer = mass[missedIndex];

  return String(realAnswer);
};
