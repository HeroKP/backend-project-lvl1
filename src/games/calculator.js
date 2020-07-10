import getRandomNum from '../index.js';

const maxNumber = 1000;

const resolutions = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};
const operations = Object.keys(resolutions);

export default {
  makeQnA: () => {
    const [a, b] = [getRandomNum(maxNumber), getRandomNum(maxNumber)];
    const operation = operations[getRandomNum(operations.length)];
    return { question: `${a} ${operation} ${b}`, rightAnswer: resolutions[operation](a, b) };
  },
  instructions: 'What is the value of this expression?',
};
