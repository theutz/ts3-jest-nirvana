import { map, pipe, split, toNumber } from 'lodash/fp'

export function parseStringToNumericArray(
  str?: string
): ReadonlyArray<number> | null {
  return !!str
    ? pipe(
        split(','),
        map(item => {
          const num = toNumber(item)
          if (isNaN(num)) throw new Error(`'${item}' is not a number.`)
          return num
        })
      )(str)
    : null
}
