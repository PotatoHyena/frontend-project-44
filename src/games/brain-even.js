const getRandomNumber = () => Math.floor(Math.random() * 100)

const isEven = number => number % 2 === 0

const getEvenRound = () => {
  const question = getRandomNumber()
  const correctAnswer = isEven(question) ? 'yes' : 'no'

  return { question, correctAnswer }
}

export default getEvenRound