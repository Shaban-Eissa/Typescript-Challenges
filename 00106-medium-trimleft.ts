// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
  Expect<Equal<TrimLeft<''>, ''>>,
  Expect<Equal<TrimLeft<' \n\t'>, ''>>,
]


// ============= Your Code Here =============
// Define the whitespace characters
type WhiteSpace = ' ' | '\n' | '\t'

// Recursively trim from start only
type TrimLeft<S extends string> = 
  S extends `${WhiteSpace}${infer Rest}` 
    ? TrimLeft<Rest>             // remove leading whitespace
      : S                       // stop recursion
