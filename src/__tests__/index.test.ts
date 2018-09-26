import { parseStringToNumericArray } from '~'
import { theFunction } from '~/test-utils'
import { TestData } from '~/types'

describe(theFunction(parseStringToNumericArray), () => {
  type SUT = typeof parseStringToNumericArray

  describe('given a string with', () => {
    // This is an example of how you might setup a parameterized test
    // with valid data. If, for whatever reason, the type of the
    // SUT (system-under-test) changes in the source, the TypeScript compiler
    // will complain about the change here.
    //
    // Additionally, it would be trivial to add new test cases, since the
    // form of the test remains the same regardless of the cases presented.
    describe('valid data like', () => {
      const validData: TestData<SUT> = [
        ['undefined', [undefined]],
        ['a number', ['1']],
        ['a series of numbers', ['1,2,3']]
      ]

      it.each(validData)('%s should return', (_, args) => {
        // This is an example of spreading the arguments into
        // the SUT.
        expect(parseStringToNumericArray(...args)).toMatchSnapshot()
      })
    })

    describe('invalid data like', () => {
      const invalidData: TestData<SUT> = [
        ['a single non-numeric value', ['one']],
        ['a mix of valid and invalid values', ['1,2,three,4']]
      ]

      // This is an example of destructuring the arguments to be used individually.
      it.each(invalidData)('%s should throw', (_, [str]) => {
        expect(() => {
          parseStringToNumericArray(str)
        }).toThrowErrorMatchingSnapshot()
      })
    })
  })
})
