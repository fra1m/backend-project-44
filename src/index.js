const result = (realAnswer, answer, name) => {
  console.log(`Your answer: ${answer}`);
  if (realAnswer === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${realAnswer}'. \nLet's try again, ${name}!`);
  return false;
};
export default result;
