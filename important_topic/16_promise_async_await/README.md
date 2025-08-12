# Promise and async/await

- `.finally()` runs after the Promise is settled, regardless of result
- useful for cleanup tasks like hiding loaders or closing resources

- `await`
  - must be inside an async function (or top level in ES2022+, only valid in ES modules)
  - pauses the execution until the Promise settles
  - does not block the entire JavaScript thread - it pauses only the async function

---

## Promise Static Methods

### `Promise.all(iterable)`

- Waits for **all Promises to fulfill**.
- If **any Promise rejects**, rejects immediately with that reason.
- Resolves with an array of all results if all succeed.

### `Promise.allSettled(iterable)`

- Waits for **all Promises to settle** (fulfill or reject).
- Never rejects.
- Resolves with an array of objects describing each Promise’s outcome:

  - `{ status: "fulfilled", value: ... }`
  - `{ status: "rejected", reason: ... }`

### `Promise.any(iterable)`

- Waits for the **first fulfilled** Promise.
- Ignores rejected Promises until one fulfills.
- If **all Promises reject**, rejects with an `AggregateError` containing all reasons.

### `Promise.race(iterable)`

- Resolves or rejects as soon as **any Promise settles** (fulfills or rejects).
- Result/value is from the **first settled** Promise (no waiting for others).
