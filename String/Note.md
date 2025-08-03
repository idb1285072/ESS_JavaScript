# String

- **Immutability**: Strings cannot be changed — every method returns a new string.
- **Surrogate Pair**: UTF-16 have High Surrogate (first part of the pair) and Low Surrogate (second part of the pair)

# String Methods

### `.charAt(index)`

- return a single charatcter at the specified index
- zero-based index
- return `""` if index is out of range
- handle only UTF-16 code units, not full Unicode characters (like emoji)
- default index `0`

### `.at(index)`

- Negative index
- return `undefined` if index is out of range
- default index `0`

### `[]`

- return `undefined` if index is out of range

### `.charCodeAt(index)`

- Returns a numeric UTF-16 code unit (0–65535) at the given index.
- Returns the 16-bit number (not character) at that position
- return `NaN` if index is out of range
- Like charAt, it doesn’t handle full Unicode code points

### `.codePointAt(index)`

- return `undefined` if index is out of range
- Unicode support

### `slice(start, end)`, `substring(start, end)`, `substr(start, length)`

- slice: negative indexing, out-of-bound("")
- substring: swap if(start>end), negative->0

---

### `[]` bracket notation, `charAt()`, `at()`

- `[]` bracket notation
  - IndexOutOfRange: `undefined`
- `charAt(index)`
  - IndexOutOfRange: `""`
  - UTF-16 support, not Unicode
- `at(index)`
  - Negative indexing
  - IndexOutOfRange: `undefined`

### `charCodeAt()`, `CodePointAt()`

- `charCodeAt(index)`
  - UTF-16 Code
  - IndexOutOfRange: `NaN`
- `codePointAt()`
  - Unicode
  - IndexOutOfRange: `undefined`

### `slice()`, `substring()`, `substr()`

- `slice(start, end)`
  - Negative index
- `substring(start, end)`
  - swap if start>end
  - Negative index -> 0
- `substr(start, length)`
  - deprecated

### `split()`

- split(separetor, limit?)
- return a array

### `search()`, `indexOf()`

- `indexOf()`
  - literal/string
  - return -1 if no match
- `search()`
  - RegEx/string so **Pattern**
  - return first match index

### `match()`, `matchAll()`

- `match()`
  - return array with metadata
- `matchAll()`
  - return Object with metadata
  - must use `/g` global flag
- 1 match with metadata: match
- all match without metadata: match with global flag
- all match with metadata: matchAll
