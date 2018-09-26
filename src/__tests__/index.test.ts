import { parseStringToNumericArray, stringifySomeNumbers } from '~'
import { theFunction } from '~/test-utils'
import { TestData } from '~/types'

describe(theFunction(parseStringToNumericArray), () => {
  type Data = TestData<typeof parseStringToNumericArray>

  describe('given a string with', () => {
    // This is an example of how you might setup a parameterized test
    // with valid data. If, for whatever reason, the type of the
    // SUT (system-under-test) changes in the source, the TypeScript compiler
    // will complain about the change here.
    //
    // Additionally, it would be trivial to add new test cases, since the
    // form of the test remains the same regardless of the cases presented.
    describe('valid data like', () => {
      const validData: Data = [
        ['undefined', [undefined]],
        ['a number', ['1']],
        ['a series of numbers', ['1,2,-3']]
      ]

      it.each(validData)('%s should return', (_, args) => {
        // This is an example of spreading the arguments into
        // the SUT.
        expect(parseStringToNumericArray(...args)).toMatchSnapshot()
      })
    })

    describe('invalid data like', () => {
      const invalidData: Data = [
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

// A More Complex Example
//
// The following SUT requires multiple test cases
// to nail down. Luckily, that's SUPER easy with our new setup.
describe(theFunction(stringifySomeNumbers), () => {
  type Data = TestData<typeof stringifySomeNumbers>

  const data: Data = [
    ['a single argument as an array', [[1, 23, 3]]],
    ['an array followed by individual number arguments', [[1], 2, 3, -1048]],
    ['multiple number arguments', [1, 2, 3]],
    ['a single number argument', [1]],
    ['a list of arguments with an array in the middle', [1, [2, -5, 7], 3]],
    ['undefined', [undefined]],
    ['0', [0]]
  ]

  it.each(data)('given %s returns a sorted list', (_, args) => {
    expect(stringifySomeNumbers(...args)).toMatchSnapshot()
  })
})
