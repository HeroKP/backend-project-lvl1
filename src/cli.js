import readlineSync from 'readline-sync';

const askUserName = () => {
    console.log('Hi ' + readlineSync.question('May I have your name? ') + '!');
};