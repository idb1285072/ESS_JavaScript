# Syllabus of Promise and async/await

- XMLHttpRequest()
- callback
- callback hell
- Promise
  - Life circle
  - Consume Promise - Promise Chain, Error Handle
  - Build Promise

```js
// Microtask queue
console.log("Test start");
setTimeout(() => console.log("0 sec timer"), 0);
Promise.resolve("Resolved promise 1").then((res) => console.log(res));
Promise.resolve("Resolved promise 2").then((res) => {
  for (let i = 0; i < 1000000; i++) {}
  console.log(res);
});
console.log("Test end");
```

# Build Promise

- Promise constructor function
- Executer function -> two callback function: resolve, reject

---

## 🧠 **1. Core Prerequisites (Before `async/await`)**

### ✅ Promises

- What are Promises (`new Promise`)
- States: _pending_, _fulfilled_, _rejected_
- `.then()`, `.catch()`, `.finally()`
- Chaining promises

### ✅ JavaScript Event Loop

- Call Stack
- Web APIs
- Callback queue (macrotasks) vs microtask queue
- How `setTimeout`, `Promise.then`, `queueMicrotask` work

---

## 🚀 **2. `async/await` Basics**

- How `async` makes a function return a Promise
- How `await` pauses execution until a Promise resolves
- Using `try...catch` for error handling
- Returning values from `async` functions
- Awaiting functions that return Promises
- Awaiting non-Promise values (they’re auto-wrapped)

---

## 🔄 **3. Sequential vs Parallel Execution**

- Sequential `await` (one by one)
- Parallel execution with `Promise.all`
- `Promise.allSettled`, `Promise.race`, `Promise.any` in `async` context
- Performance implications

---

## ❗ **4. Error Handling in `async/await`**

- Using `try...catch`
- Catching errors from multiple awaits
- Using `Promise.all` with `try...catch`
- Nested try-catch blocks for finer control

---

## 🛠️ **5. Real-world Patterns & Anti-patterns**

- Awaiting in loops:

  - `for...of` with `await`
  - Why not use `forEach` with `await`

- Async constructors workaround (e.g., using factory methods)
- Using `await` in higher-order functions
- Avoiding unhandled Promise rejections

---

## ⚙️ **6. Integration with APIs and Tools**

- `fetch` and `async/await`
- Working with async functions in:

  - React (e.g., `useEffect`)
  - Node.js (e.g., `fs/promises`)
  - Express middleware

- Async database calls (e.g., MongoDB, PostgreSQL)
- Async file I/O

---

## 🧪 **7. Advanced Concepts**

- Using `async` with `map`, `filter`, etc. (and `Promise.all`)
- Custom Promise wrappers for legacy callbacks
- Writing utilities with `async/await`
- Debouncing/throttling async functions
- Concurrency limits (`p-limit`, async pools)

---

## 📦 **8. Tools & Ecosystem Support**

- Testing async code (Jest, Mocha)
- Linting async errors (ESLint `no-floating-promises`)
- Polyfills for older browsers (if needed)
- Handling long-running or cancelable async operations (e.g., `AbortController`)

---

## 🧠 Bonus: Deep Understanding Topics

- How `await` desugars to `.then()`
- How async/await interacts with the event loop (timing)
- How async/await is compiled in Babel/TypeScript
- Tail call optimization with async functions

---

## 🔁 Suggested Practice Projects

- Build a weather app using `fetch` with async/await
- Implement a retry mechanism for failed API calls
- Write a data loader that limits concurrency (like how React Suspense works internally)
- Batch processing async tasks (e.g., chunked API requests)

---

## ✅ Summary Checklist

| Concept                                          | Mastered? |
| ------------------------------------------------ | --------- |
| Promises (chaining, error handling)              | ✅        |
| Event Loop / Microtasks                          | ✅        |
| `async` and `await` mechanics                    | ✅        |
| Error handling with `try/catch`                  | ✅        |
| Parallel vs sequential async code                | ✅        |
| Async patterns in real-world projects            | ✅        |
| Advanced control (canceling, retrying, batching) | ✅        |

---

