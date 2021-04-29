/**
 * List the user_id of users whose name containers 9 or more vowels
 *
 * Expected structure
 *
 * {
 *  name_1: vowel_count,
 *  name_2: vowel_count
 * }
 *
 * Performance: Execution time must not exceed 0.5 ms
 */

const perf = require('./utils/perf')
const users = require('./data/users')

const getUsernamesWithMoreThan3Vowels = () => {
  // code here...
}

console.log(getUsernamesWithMoreThan3Vowels())
perf(getUsernamesWithMoreThan3Vowels)
