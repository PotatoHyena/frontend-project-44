const getRandomNumber = () => Math.floor(Math.random() * 100)

const getGcd = (a, b) => {
  if (b === 0) {
    return a
  }

  return getGcd(b, a % b)
}

const getGcdRound = () => {
  const firstNumber = getRandomNumber()
  const secondNumber = getRandomNumber()

  return {
    question: `${firstNumber} ${secondNumber}`,
    correctAnswer: String(getGcd(firstNumber, secondNumber)),
  }
}

export default getGcdRound
