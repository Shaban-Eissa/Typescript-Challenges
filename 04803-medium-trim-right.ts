// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<TrimRight<'str'>, 'str'>>,
  Expect<Equal<TrimRight<'str '>, 'str'>>,
  Expect<Equal<TrimRight<'str     '>, 'str'>>,
  Expect<Equal<TrimRight<'     str     '>, '     str'>>,
  Expect<Equal<TrimRight<'   foo bar  \n\t '>, '   foo bar'>>,
  Expect<Equal<TrimRight<''>, ''>>,
  Expect<Equal<TrimRight<'\n\t '>, ''>>,
]


// ============= Your Code Here =============
// Define the whitespace characters
type WhiteSpace = ' ' | '\n' | '\t'

// Recursively trim from start only
type TrimRight<S extends string> =
  S extends `${infer Rest}${WhiteSpace}`
    ? TrimRight<Rest>
    : S