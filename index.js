const faker = require('faker')
const _sample = require('lodash/sample')
const write = require('write')

const address = []
for (let i = 0; i < 5; i++) {
  address.push(faker.address.streetAddress())
}

const arr = []
let id = 1
for (let i = 0; i < 1000; i++) {
  const email = faker.internet.email()
  arr.push({
    id,
    address: _sample(address),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    email
  })
  id++

  if (Math.random() > 0.8) {
    arr.push({
      id,
      address: _sample(address),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      email
    })
    id++
  }
}

// write('./data/users.json', JSON.stringify(arr, null, 1))
