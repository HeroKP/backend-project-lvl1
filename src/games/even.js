/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

const evenQuiz = (username, iters) => {
  const questNumber = Math.floor(Math.random() * 15);
  const rightAnswer = questNumber % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${questNumber}`);
  const userAnswer = readlineSync.question('Your Answer: ');
  const correctness = userAnswer === rightAnswer;
  console.log(correctness ? 'Correct!' : `I'm sorry, ${username}. I can't let you do that. "${userAnswer}" was the wrong answer ;(. The correct answer was "${rightAnswer}"
Let's try again, ${username}`);
  if (correctness && iters > 1) evenQuiz(username, iters - 1);
  console.log(correctness ? 'Congratulations!' : 'GAME OVER');
};

export { evenQuiz };
