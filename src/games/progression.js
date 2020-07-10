import getRandomNum from '../index.js';

const maxNumber = 100;
const minProgLength = 3;
const maxProgLength = 8;
const maxGapLength = 13;

export default {
  makeQnA: () => {
    const progLength = getRandomNum(minProgLength, maxProgLength);
    const gapPosition = getRandomNum(progLength - 1);
    const commonDifference = getRandomNum(maxGapLength);
    const firstElement = getRandomNum(maxNumber);
    const progression = Array.from({ length: progLength }, (_, index) => (index === gapPosition
      ? '...'
      : firstElement + commonDifference * index));
    const neighbour = progression[gapPosition + 1];
    return [progression.join(' '), neighbour - commonDifference];
  },
  instructions: 'What number is missing in the progression?',
};
