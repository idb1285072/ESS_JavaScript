## Iterable
- Iterable can be iterated over with `for ... of` loops.
- Sequence of elements like **String**, **Array**, **Set**, **Map**, **Typed Array**.
- Iterator Object must implements a `next()` method.
- `next()` method must return an object with two properties
  - `value` - can be omitted if `done` is `true`
  - `done` - `true` if iterator has completed, `false` if iterator has produced new value
- Iterables must implement the Symbol.iterator method
