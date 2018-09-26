import { isEmpty } from 'lodash/fp'

// tslint:disable-next-line:ban-types
export function theFunction(fn: Function): string {
  const { name } = fn

  if (isEmpty(name))
    throw new Error('An anonymous function does not have a name.')

  return `${name}()`
}
