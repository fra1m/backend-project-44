export { result, NOD };

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
