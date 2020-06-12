#!/usr/bin/env node

import askUserName from '../cli.js';
import { evenQuiz } from '../games/even.js';

console.log('Welcome to the Brain Games!');
const username = askUserName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');
evenQuiz(username, 3);
