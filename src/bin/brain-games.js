#!/usr/bin/env node
/* eslint-disable no-unused-vars */

import readlineSync from 'readline-sync';
import playGame from './playGame.js';
import calculator from '../games/calculator.js';
import even from '../games/even.js';
import gcd from '../games/gcd.js';
import prime from '../games/prime.js';
import progression from '../games/progression.js';

const username = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ') || 'Anonymous';

const games = {
  Calculator: calculator,
  Even: even,
  'Greatest Common Denominator': gcd,
  Prime: prime,
  Progression: progression,
};

const gameNames = Object.keys(games);
const affirmativeResponses = ['yes', 'Yes', 'yep', 'Yep', 'sure', 'Sure', 'Go go power rangers!'];

const playGames = () => {
  const gameNumber = readlineSync.keyInSelect(gameNames, 'Which game would you like to play?');
  if (gameNumber === -1) return;
  const chosenGame = games[gameNames[gameNumber]];
  playGame(username, chosenGame);
  playGames();
};

playGames();
