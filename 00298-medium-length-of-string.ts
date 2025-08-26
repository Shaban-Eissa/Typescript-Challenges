// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]


// ============= Your Code Here =============
// Helper: build length in tuple
type LengthOfString<
  S extends string,
  T extends any[] = [] // accumulator tuple to track length
> = S extends `${infer First}${infer Rest}`
  ? LengthOfString<Rest, [...T, First]> // add 1 for each character
  : T['length'];
