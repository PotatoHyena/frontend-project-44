import runGameEngine from '../utils/index.js';
import getRandomNum from '../utils/randomNum.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const question = getRandomNum(1, 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [String(question), correctAnswer];
};

const runBrainEven = () => {
  runGameEngine(gameDescription, getGameData);
};

export default runBrainEven;