import { pickRandom } from './utils'

describe('pickRandom function', () => {
  it('should throw when empty array passed', () => {
    const pickRandomFromEmpty = () => pickRandom([])
    expect(pickRandomFromEmpty).toThrow()
  })
  it('should pick only element of array', () => {
    expect(pickRandom([1])).toBe(1)
  })
  it('should throw when all elements are in exclude list', () => {
    expect(() => pickRandom([2, 2, 2], [2])).toThrow()
    expect(() => pickRandom([1, 2, 3], [1, 2, 3])).toThrow()
    expect(() => pickRandom([1], [1, 2, 3])).toThrow()
  })
  // should pick from list
})
