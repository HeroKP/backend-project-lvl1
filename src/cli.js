import readlineSync from 'readline-sync';

export default () => {
  const username = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ') || 'Anonymous';
  console.log(`Hi ${username}!`);
  return username;
};
