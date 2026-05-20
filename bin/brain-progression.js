#!/usr/bin/env node

import playGame from '../src/utils/index.js'
import getProgressionRound from '../src/games/brain-progression.js'

const description = 'What number is missing in the progression?'

playGame(description, getProgressionRound)