import getRandomNum from '../utils/randomNum.js'
import runGameEngine from '../utils/index.js'

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".'

const getGameData = () => {
  const question = getRandomNum(0, 100)
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no'
  return [question, correctAnswer]
}

const runBrainEven = () => {
  runGameEngine(gameDescription, getGameData)
}

export default runBrainEven
