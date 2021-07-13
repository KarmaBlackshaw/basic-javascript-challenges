/**
Given an array of integers, compute a total score based on the following rules:<br/>
a. Add 1 point for every even number in the array<br/>
b. Add 3 points for every odd number in the array<br/>
c. Add 5 points for every time you encounter an 8 in the array

 */

const getSum = arr => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i]

    if (curr === 8) {
      sum += 5
    } else if (curr % 2 === 0) {
      sum += 1
    } else {
      sum += 3
    }
  }

  return sum
}

console.log(getSum([1, 2, 3, 4, 5]))
console.log(getSum([8, 5, 2]))
