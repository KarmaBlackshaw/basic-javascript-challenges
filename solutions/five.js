/**
 Write a function that takes a list of strings an prints them, one per line, in a rectangular frame.

 Expected structure

 **********
 * Hello  *
 * World  *
 * in     *
 * a      *
 * frame  *
 **********
 */

const toBox = arr => {
  const maxWordLength = Math.max(...arr.map(x => x.length)) * 2

  console.log('*'.repeat(maxWordLength))
  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i]
    const remainingSpaces = maxWordLength - curr.length - 3
    const spaces = ' '.repeat(remainingSpaces)
    console.log(`* ${curr}${spaces}*`)
  }
  console.log('*'.repeat(maxWordLength))
}

toBox(['Hello', 'World', 'in', 'a', 'frame'])
