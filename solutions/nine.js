/**
Write a function that combines two lists by alternatingly taking elements
 */

const mergeArrays = (arr1, arr2) => {
  const finalArray = []
  for (let i = 0; i < arr1.length; i++) {
    finalArray.push(arr1[i], arr2[i])
  }
  return finalArray
}

console.log(mergeArrays(['a', 'b', 'c'], [1, 2, 3]))
