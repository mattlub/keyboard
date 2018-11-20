import { keyMap } from './consts'

// random int >= 0, < n
export const randomInt = n => Math.floor(Math.random() * n)

// pick random element from array, excluding certain elements
export const pickRandom = (arr, toExclude = []) => {
  if (arr.length === 0) {
    throw new Error('cannot pick something from empty array!')
  }
  if (toExclude.length === 0) {
    return arr[randomInt(arr.length)]
  }
  const possibilities = arr.filter(e => !toExclude.includes(e))
  return pickRandom(possibilities)
}

export const toArabic = str => {
  return str.split('').map(c => keyMap[c] || c).join('')
}