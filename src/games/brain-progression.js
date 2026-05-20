const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const getProgression = (start, step, length) => {
  const progression = []

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }

  return progression
}

const getProgressionRound = () => {
  const length = getRandomNumber(5, 10)
  const start = getRandomNumber(1, 20)
  const step = getRandomNumber(1, 10)
  const hiddenIndex = getRandomNumber(0, length - 1)

  const progression = getProgression(start, step, length)
  const correctAnswer = String(progression[hiddenIndex])

  progression[hiddenIndex] = '..'

  return {
    question: progression.join(' '),
    correctAnswer,
  }
}

export default getProgressionRound