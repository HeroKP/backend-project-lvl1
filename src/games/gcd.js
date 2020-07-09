import getRandomNum from '../index.js';
import playGame from '../bin/play_game.js';

const maxNumber = 11;

const gcdGame = () => {
  const a = getRandomNum(maxNumber) * getRandomNum(maxNumber);
  const b = getRandomNum(maxNumber) * getRandomNum(maxNumber);
  const findGcd = (x, y) => {
    if (x === y) return x;
    const [min, max] = [Math.min(x, y), Math.max(x, y)];
    return findGcd(min, max - min);
  };
  return [`${a} ${b}`, findGcd(Number(a), Number(b))];
};

export default () => playGame('Find the greatest common divisor of the given numbers.', gcdGame);
