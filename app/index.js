const calc = require('./calc')
const _ = require('lodash')

const numbersToAdd = [
  3, 4, 10, 2
]

const result = calc.sum(numbersToAdd)

console.log(`The result is: ${result}`)

const lodash_result = _.assign({ 'a': 1 }, { 'b': 2 }, { 'c': 3 });
console.log(`Lodash result : ${JSON.stringify(lodash_result)}`)