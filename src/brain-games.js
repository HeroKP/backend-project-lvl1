import readlineSync from 'readline-sync';
import playGame from './bin/playGame.js';
import calculator from './games/calculator.js';
import even from './games/even.js';
import gcd from './games/gcd.js';
import prime from './games/prime.js';
import progression from './games/progression.js';

const username = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ') || 'Anonymous';

const games = {
  Calculator: calculator,
  Even: even,
  'Greatest Common Denominator': gcd,
  Prime: prime,
  Progression: progression,
};

const gameNames = Object.keys(games);

const playGames = () => {
  const gameNumber = readlineSync.keyInSelect(gameNames, 'Which game would you like to play?');
  if (gameNumber === -1) return;
  const chosenGame = games[gameNames[gameNumber]];
  playGame(username, chosenGame);
  playGames();
};

playGames();

export default () => playGames;
