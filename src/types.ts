// Setup a regular structure for the test data.
//
// In this arrangement, the first element of the array is always
// a `string` description of the arguments to be used
// in the `name` parameter of the test.
//
// The arguments are passed as an array, which can be spread into
// the parameters of the system-under-test. They can also be destructured
// to use individually, if desired.
export type TestData<T> = Array<[string, Arguments<T>]>

// Return the type of the arguments as a tuple if T is a function.
export type Arguments<T> = T extends (...args: infer A) => unknown ? A : unknown
