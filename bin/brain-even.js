#!/usr/bin/env node

import playGame from '../src/utils/index.js'
import getEvenRound from '../src/games/brain-even.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

playGame(description, getEvenRound)