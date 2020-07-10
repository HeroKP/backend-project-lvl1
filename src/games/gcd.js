import getRandomNum from '../index.js';

const maxNumber = 11;

export default {
  makeQnA: () => {
    const a = getRandomNum(maxNumber) * getRandomNum(maxNumber);
    const b = getRandomNum(maxNumber) * getRandomNum(maxNumber);
    const findGcd = (x, y) => {
      if (x === y) return x;
      const [min, max] = [Math.min(x, y), Math.max(x, y)];
      return findGcd(min, max - min);
    };
    return [`${a} ${b}`, findGcd(Number(a), Number(b))];
  },
  instructions: 'Find the greatest common divisor of the given numbers.',
};
