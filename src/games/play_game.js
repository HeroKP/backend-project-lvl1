import readlineSync from 'readline-sync';

const defaultIters = 3;

export default ({ instructions, determineQuest, findAnswer }, numberOfIters = defaultIters) => {
  const username = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ') || 'Anonymous';
  console.log(`Hi ${username}!`);
  console.log(instructions);

  const iter = (remainingIters = numberOfIters) => {
    if (!remainingIters) return 'CONGRATULATIONS!';

    const currentQuest = determineQuest();
    const rightAnswer = findAnswer(currentQuest);
    const userAnswer = readlineSync.question(`Question: ${currentQuest}\nYour Answer: `);
    const isAnswerRight = userAnswer === rightAnswer.toString();

    const apology = `I'm sorry, ${username}. I can't let you do that. `;
    const explanation = `"${userAnswer}" was the wrong answer ;(. The correct answer was "${rightAnswer}".`;
    const failureMessage = `${apology} ${explanation} \nLet's try again, ${username}.`;

    return isAnswerRight ? iter(remainingIters - 1) : failureMessage;
  };

  const resultMessage = iter();
  console.log(resultMessage);
};
