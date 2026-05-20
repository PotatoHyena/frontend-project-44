#!/usr/bin/env node

import playGame from '../src/utils/index.js'
import getCalcRound from '../src/games/brain-calc.js'

const description = 'What is the result of the expression?'

playGame(description, getCalcRound)