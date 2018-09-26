import { isEmpty } from 'lodash/fp'

// A simple utility function to pull the `.name` property
// off of a function in order to create a consistently formatted
// top-level description.
//
// Using a utility like this allows you to make sure your snapshot
// and test names stay up-to-date with the code if you rename
// the function.
//
// tslint:disable-next-line:ban-types
export function theFunction(fn: Function): string {
  const { name } = fn

  if (isEmpty(name))
    throw new Error('An anonymous function does not have a name.')

  return `${name}()`
}
