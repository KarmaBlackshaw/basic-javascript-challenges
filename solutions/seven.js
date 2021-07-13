/**
Write a function that translates a text to Pig Latin and back. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’.
 */

const translate = str => {
  const wordsArray = str.split(' ')
  const isPigLatin = wordsArray.every(x => {
    const lastTwoLetters = x.substring(x.length - 2)
    return lastTwoLetters === 'ay'
  })

  const arr = []

  for (let i = 0; i < wordsArray.length; i++) {
    const curr = wordsArray[i]
    let word

    if (isPigLatin) {
      const ayless = curr.slice(0, -2)
      word = ayless[ayless.length - 1] + ayless.slice(0, -1)
    } else {
      const firstLetter = curr[0]
      const reduced = curr.substr(1, curr.length)
      word = reduced + firstLetter + 'ay'
    }

    arr.push(word)
  }

  return arr.join(' ').toUpperCase()
}

const aa1 = translate('Ackpay ymay oxbay ithway ivefay ozenday iquorlay ugsjay')
const aa2 = translate('The quick brown fox')
console.log(aa1, aa2)
