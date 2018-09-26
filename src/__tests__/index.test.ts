import { parseStringToNumericArray } from '~'
import { theFunction } from '~/test-utils'
import { TestData } from '~/types'

describe(theFunction(parseStringToNumericArray), () => {
  describe('given a string with', () => {
    type SUT = typeof parseStringToNumericArray

    const validData: TestData<SUT> = [
      ['undefined', [undefined]],
      ['a number', ['1']],
      ['a series of numbers', ['1,2,3']]
    ]

    const invalidData: TestData<SUT> = [
      ['a single non-numeric value', ['one']],
      ['a mix of valid and invalid values', ['1,2,three,4']]
    ]

    it.each(validData)('%s should return', (_, [str]) => {
      expect(parseStringToNumericArray(str)).toMatchSnapshot()
    })

    it.each(invalidData)('%s should throw', (_, [str]) => {
      expect(() => {
        parseStringToNumericArray(str)
      }).toThrowErrorMatchingSnapshot()
    })
  })
})
