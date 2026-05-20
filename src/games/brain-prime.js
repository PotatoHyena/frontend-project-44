const getRandomNumber = () => Math.floor(Math.random() * 100)

const isPrime = (number) => {
  if (number < 2) {
    return false
  }

  if (number === 2) {
    return true
  }

  if (number % 2 === 0) {
    return false
  }

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return false
    }
  }

  return true
}

const getPrimeRound = () => {
  const question = getRandomNumber()
  const correctAnswer = isPrime(question) ? 'yes' : 'no'

  return {
    question,
    correctAnswer,
  }
}

export default getPrimeRound