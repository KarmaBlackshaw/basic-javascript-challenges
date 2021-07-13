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
  const nameDictionary = {}

  for (let i = 0; i < users.length; i++) {
    const curr = users[i]

    const vowelCount = curr.name.match(/a|e|i|o|u/ig).length

    if (vowelCount >= 9) {
      nameDictionary[curr.name] = vowelCount
    }
  }

  return nameDictionary
}


perf(getUsernamesWithMoreThan3Vowels)
// console.log(getUsernamesWithMoreThan3Vowels())

