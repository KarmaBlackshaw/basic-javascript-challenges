/**
 * Group users into an array of 5
 *
 * Expected structure
 *
 * [
 *  [{...}, {...}, {...}, {...}, {...}],
 *  [{...}, {...}, {...}, {...}, {...}],
 * ]
 *
 * Performance: Execution time must not exceed 0.02 ms
 */

const perf = require('./utils/perf')
const users = require('./data/users')

const group = () => {
  const finalArray = []
  let arr = []

  const userLength = users.length
  for (let i = 0; i < userLength; i++) {
    const curr = users[i]

    arr.push(curr)

    if (arr.length === 5 || i === (userLength - 1)) {
      finalArray.push(arr)
      arr = []
    }
  }

  return finalArray
}

perf(group)
// console.log(group())
