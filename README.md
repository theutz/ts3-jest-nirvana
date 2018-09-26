# TypeScript 3 + Jest = Nirvana

How to make your life easier with parameterized tests, snapshots, tuples, and more!

## Purpose

The purpose of this tutorial is to illustrate a way to use TypeScript 3 and Jest in such a way that requires the least possible maintenance while still creating useful tests.

Modern editors like VSCode make changing the names and types of variables incredibly easy when writing in TypeScript. However, there's often a temptation to avoid using types in test data because it's annoying. So, we pull out the ol' `// @ts-ignore` flag and carry on.

But using a structure like I'm proposing here provides total consistency in the types you're definiing across both the source _and_ test code, while minimizing the need to re-write tests all the time.

## Installation

```bash
git clone https://github.com/theutz/ts3-jest-nirvana
cd ts3-jest-nirvana
npm install
```

## Running the Project

To mess around with the code, run the following in your command line:

```bash
npm run test:watch
```

This will run Jest in watch mode, which will allow you to see how your changes are affecting the test outcomes.

## Points of Interest

The main files to check out are `src/__tests__/index.ts` and `src/types.ts`. They contain the bulk of the goodness that this tutorial was made for.
