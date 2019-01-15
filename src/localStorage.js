// will return null if not in local storage
export const getWords = () =>
  JSON.parse(localStorage.getItem('words'))

export const setWords = words =>
  localStorage.setItem('words', JSON.stringify(words))