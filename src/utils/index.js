import readlineSync from 'readline-sync';
import greet from '../src/utils/cli.js';

const numberOfRounds = 3;

const runGameEngine = (gameDescription, getGameData) => {
 const name = greet();
  
  console.log(gameDescription);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, correctAnswer] = getGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGameEngine;