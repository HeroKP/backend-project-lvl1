import readlineSync from 'readline-sync';

const defaultIters = 3;

export default (instructions, game, numberOfIters = defaultIters) => {
  const username = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ') || 'Anonymous';
  console.log(`Hi ${username}!`);
  console.log(instructions);

  const iter = (remainingIters = numberOfIters) => {
    if (!remainingIters) return 'CONGRATULATIONS!';

    const [quest, rightAnswer] = game();

    const userAnswer = readlineSync.question(`Question: ${quest}\nYour Answer: `);
    const isAnswerRight = userAnswer === rightAnswer.toString();

    const apology = `I'm sorry, ${username}. I can't let you do that. `;
    const explanation = `"${userAnswer}" was the wrong answer ;(. The correct answer was "${rightAnswer}".`;
    const failureMessage = `${apology} ${explanation} \nLet's try again, ${username}.`;

    return isAnswerRight ? iter(remainingIters - 1) : failureMessage;
  };

  const resultMessage = iter();
  console.log(resultMessage);
};