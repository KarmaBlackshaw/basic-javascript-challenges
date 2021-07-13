/**
 * List the user_id of users with duplicate emails
 *
 * Expected structure
 *
 * {
 *  email_1: [user_id1, user_id2, user_id3],
 *  email_2: [user_id4, user_id5, user_id6]
 * }
 *
 * Performance: Execution time must not exceed 0.3 ms
 */

const perf = require('./utils/perf')
const users = require('./data/users')

const getDupes = () => {
  const dupeEmailsDictionary = {}
  const dupeEmailsFinalDictionary = {}

  for (let i = 0; i < users.length; i++) {
    const curr = users[i]

    if (dupeEmailsDictionary[curr.email] === undefined) {
      dupeEmailsDictionary[curr.email] = []
    }

    dupeEmailsDictionary[curr.email].push(curr.id)

    if (dupeEmailsDictionary[curr.email].length > 1) {
      if (dupeEmailsFinalDictionary[curr.email] === undefined) {
        dupeEmailsFinalDictionary[curr.email] = []
      }

      dupeEmailsFinalDictionary[curr.email].push(...dupeEmailsDictionary[curr.email])
    }
  }

  return dupeEmailsFinalDictionary
}

perf(getDupes)
// console.log(getDupes())
