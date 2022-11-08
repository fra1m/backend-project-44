import readlineSync from 'readline-sync';

const whatName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  return `Hello ${name}!`;
};
export default whatName;
