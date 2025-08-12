# Promise

A promise is an object that represents the eventual success or failure of an asynchronous operation.

### Promise has three states

- pending: **initial state**, **operation is running**
- fulfilled: **operation completed successfully**
- rejected: **operation failed**

### Why Promise?

- avoid callback hell
- supports chaining with `.then()`
- built-in error handling with `.catch()`
- improves **readability** and **maintainability**

### Syntax

```js
const promise = new Promise((resolve, reject) => {
  // async task
  if (success) resolve(value);
  else reject(error);
});
```

```js
promise
  .then((result) => {
    /* handle success */
  })
  .catch((error) => {
    /* handle failure */
  })
  .finally(() => {
    /* cleanup */
  });
```

### Promise Utility Methods

- `Promise.all()`
  - waits for all Promises to resolve
  - rejects immediately if any Promise rejects
- `Promise.race()`
  - resolves/rejects with the first settled Promise
- `Promise.allSettled()`
  - waits for all Promises to settle (fulfilled or rejected)
  - never rejects
- `Promise.any()`
  - waits for first Promise to resolve (ignores rejected Promise until first resolved Promise)
  - If all Promises rejected, rejects with an AggregateError

---

# `async/await`

- Syntactic sugar over **Promises**
- Makes asynchronous code look **synchronous**
- Improves **readability**, **error handling**, and **flow control**

### `async`

```js
async function fetchData() {
  return "Hello"; // implicitly returns a Promise
}
```

- Always returns a **Promise**
- Can use `await` inside

### `await`

```js
async function getUser() {
  const response = await fetch("/api/user"); // pauses until resolved
  const data = await response.json();
  return data;
}
```

- `await` pauses execution until the Promise settles
- Only valid inside `async` functions

---

### Promise vs Callback vs Async/Await

| Feature        | Callback                    | Promise       | Async/Await       |
| -------------- | --------------------------- | ------------- | ----------------- |
| Syntax         | function passed as argument | Chain-based   | Synchronous-style |
| Readability    | ❌ Low                      | ✅ Medium     | ✅✅ High         |
| Error Handling | ❌ Manual                   | ✅ `.catch()` | ✅ `try/catch`    |
| Composition    | ❌ Nested                   | ✅ Chainable  | ✅ Sequential     |
| Debugging      | ❌ Hard                     | ✅ Easier     | ✅✅ Best         |

