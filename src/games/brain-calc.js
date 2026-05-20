const getRandomNumber = () => Math.floor(Math.random() * 100)

const getRandomOperation = () => {
  const operations = ['+', '-', '*']
  const index = Math.floor(Math.random() * operations.length)
  return operations[index]
}

const calculate = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    default:
      throw new Error(`Unknown operation: ${operation}`)
  }
}

const getCalcRound = () => {
  const firstNumber = getRandomNumber()
  const secondNumber = getRandomNumber()
  const operation = getRandomOperation()

  return {
    question: `${firstNumber} ${operation} ${secondNumber}`,
    correctAnswer: String(calculate(firstNumber, secondNumber, operation)),
  }
}

export default getCalcRound
