import readlineSync from 'readline-sync';

export default () => {
  const username = readlineSync.question('May I have your name? ') || 'Anonymous';
  console.log(`Hi ${username}!`);
  return username;
};
