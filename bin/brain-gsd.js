#!/usr/bin/env node

import playGame from '../src/utils/index.js'
import getGcdRound from '../src/games/brain-gcd.js'

const description = 'Find the greatest common divisor of given numbers.'

playGame(description, getGcdRound)

