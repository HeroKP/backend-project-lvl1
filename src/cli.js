import readlineSync from 'readline-sync';

export default () => {
  console.log(`Hi ${readlineSync.question('May I have your name? ')}!`);
};
