// Infer the arguments tuple from a function.
export type Arguments<T> = T extends (...args: infer A) => unknown ? A : unknown

// Setup a regular structure for the test data.
export type TestData<T> = Array<[string, Arguments<T>]>
