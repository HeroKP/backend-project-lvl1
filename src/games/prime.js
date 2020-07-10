import getRandomNum from '../index.js';

const maxNumber1 = 1000;
const maxNumber2 = 100;

export default {
  makeQnA: () => {
    const questNum = Math.ceil(getRandomNum(maxNumber1, 2) / getRandomNum(maxNumber2, 2)) + 1;
    const isPrime = (testNum) => {
      if (testNum === 2) return true;
      const numberLine = Array
        .from({ length: Math.floor(Math.sqrt(testNum)) }, (_, index) => index + 2);
      const primeLine = numberLine.filter((num) => isPrime(num));
      return !primeLine.some((num) => testNum % num === 0);
    };
    return [questNum, isPrime(questNum) ? 'yes' : 'no'];
  },
  instructions: 'Answer "yes" if given number is prime. Otherwise answer "no".',
};
