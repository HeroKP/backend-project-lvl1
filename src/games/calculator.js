import playGame from '../bin/play_game.js';
import getRandomNum from '../index.js';

const maxNumber = 1000;

const resolutions = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};
const operations = Object.keys(resolutions);

const calculatorGame = () => {
  const [a, b] = [getRandomNum(maxNumber), getRandomNum(maxNumber)];
  const operation = operations[getRandomNum(operations.length)];
  return [`${a} ${operation} ${b}`, resolutions[operation](a, b)];
};

export default () => playGame('What is the value of this expression?', calculatorGame);
