/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';
import askUserName from '../cli.js';

const maxNumber = 15;
const numberOfIters = 3;

const username = askUserName();

const evenQuiz = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const recursor = (iters = numberOfIters) => {
    const questNumber = Math.floor(Math.random() * maxNumber);
    const rightAnswer = questNumber % 2 === 0 ? 'yes' : 'no';
    const userAnswer = readlineSync.question(`Question: ${questNumber}\nYour Answer: `);
    const correctness = userAnswer === rightAnswer;
    console.log(correctness ? 'Correct!' : `I'm sorry, ${username}. I can't let you do that. "${userAnswer}" was the wrong answer ;(. The correct answer was "${rightAnswer}"
  Let's try again, ${username}.`);
    if (!correctness) console.log('GAME OVER');
    else if (iters > 1) recursor(iters - 1);
    else console.log('CONGRATULATIONS');
  };
  recursor();
};

export { evenQuiz };
