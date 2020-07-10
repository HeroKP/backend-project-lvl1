const maxNumber = 15;

export default {
  makeQnA: () => {
    const questNumber = Math.floor(Math.random() * maxNumber);
    return [questNumber, questNumber % 2 === 0 ? 'yes' : 'no'];
  },
  instructions: 'Answer "yes" if the number is even, otherwise answer "no".',
};
