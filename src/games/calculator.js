import playGame from './play_game.js';
import getRandomNum from '../index.js';

const maxNumber = 1000;

const resolutions = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};
const operations = Object.keys(resolutions);

const calculatorGame = {
  instructions: 'What is the value of this expression?',
  determineQuest: () => {
    const a = getRandomNum(maxNumber);
    const b = getRandomNum(maxNumber);
    const operation = operations[getRandomNum(operations.length)];
    return `${a} ${operation} ${b}`;
  },
  findAnswer: (expression) => {
    const [a, operation, b] = expression.split(' ');
    return resolutions[operation](Number(a), Number(b));
  },
};

export default () => playGame(calculatorGame);
