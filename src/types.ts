export type Arguments<T> = T extends (...args: infer A) => unknown ? A : unknown

export type TestData<T> = Array<[string, Arguments<T>]>
