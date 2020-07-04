import playGame from './play_game.js';

const maxNumber = 15;
const evenGame = {
  instructions: 'Answer "yes" if the number is even, otherwise answer "no".',
  determineQuest: () => Math.floor(Math.random() * maxNumber),
  findAnswer: (questNumber) => (questNumber % 2 === 0 ? 'yes' : 'no'),
};

export default (numberOfIters) => playGame(evenGame, numberOfIters);
