const SEPARATOR = ','

export function parseStringToNumericArray(str?: string): ReadonlyArray<number> {
  return str
    ? str
        .split(SEPARATOR)
        .map(item => {
          const num = +item
          if (isNaN(num)) throw new Error(`'${item}' is not a number.`)
          return num
        })
        .sort(ascending)
    : []
}

export function stringifySomeNumbers(...args: arg[]): string {
  return args
    .reduce(argsReducer, [])
    .sort(ascending)
    .join(SEPARATOR)
}

function ascending(a: number, b: number) {
  return a - b
}

function argsReducer(prev: number[], curr: arg): number[] {
  if (typeof curr === 'number') return [...prev, curr]
  return curr ? [...prev, ...curr] : [...prev]
}

type arg = number[] | number | undefined
