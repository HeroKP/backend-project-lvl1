import playGame from '../bin/play_game.js';

const maxNumber = 15;

const evenGame = () => {
  const questNumber = Math.floor(Math.random() * maxNumber);
  return [questNumber, questNumber % 2 === 0 ? 'yes' : 'no'];
};

export default () => playGame('Answer "yes" if the number is even, otherwise answer "no".', evenGame);
