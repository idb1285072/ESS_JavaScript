## **1. Core Foundations (JavaScript Engine + Event Loop)**

Before diving into syntax, master how JavaScript actually handles async tasks.
Without this, you’ll be “using” async features without truly *controlling* them.

* **Call Stack & Execution Contexts**

  * How JS executes synchronously by default.
  * Function invocation, stack frames, and popping.

* **Web APIs / Node APIs**

  * Where `setTimeout`, `fetch`, file system calls actually run (not in the JS engine itself).

* **Event Loop & Task Queues**

  * **Macro-tasks** vs **Micro-tasks**.
  * How Promises get priority in the micro-task queue.
  * The order of execution between callbacks, promises, and `setTimeout`.

* **Hands-on drills:**

  * Predict output of mixed sync/async code (classic interview traps).
  * Trace complex sequences with `console.log` and diagrams.

---

## **2. Callbacks (The Root)**

Callbacks are the foundation. Even Promises and async/await build on them.

* **Synchronous callbacks** vs **Asynchronous callbacks**.
* Callback signature conventions (`err, result` in Node.js style).
* Handling errors in callbacks.
* The **callback hell** problem and “pyramid of doom”.
* Control-flow libraries (like `async.js` before Promises were standard).

* **Advanced exercises:**

  * Implement your own `mapAsync` using callbacks.
  * Turn a callback API (like `fs.readFile`) into a Promise manually.

---

## **3. Promises (Abstraction Over Callbacks)**

This is where things get powerful.

* **Promise states**: pending → fulfilled / rejected.

* `.then()`, `.catch()`, `.finally()` chaining.

* How promise chaining **flattens nested callbacks**.

* **Error propagation** in promise chains.

* **Promise.all**, **Promise.allSettled**, **Promise.any**, **Promise.race**.

* Common mistakes:

  * Forgetting to return in a `.then`.
  * Mixing callbacks and promises incorrectly.
  * Swallowing errors.

* **Deep-dive drills:**

  * Implement your own `MyPromise` class from scratch.
  * Write a `retryPromise(fn, retries)` helper.
  * Benchmark `Promise.all` vs sequential awaits.

---

## **4. async/await (Syntactic Sugar)**

Async/await makes promises look synchronous — but you must remember the sugar is still async under the hood.

* Declaring `async` functions and their implicit `Promise` return.

* `await` only works inside `async` functions.

* Sequential vs parallel awaits (the hidden performance trap).

* Proper try/catch for async error handling.

* Top-level await (ES2022+).

* Mixing `for` loops with `await` vs using `Promise.all`.

* **Pro drills:**

  * Convert a promise-heavy codebase into async/await without losing parallelism.
  * Write an `asyncPool` function that limits concurrency.
  * Handle cancellation (AbortController).

---

## **5. Mastery-Level Topics**

Here’s where you go from “knows async” → “rules async.”

* **Promise internals**:

  * How resolution works (thenable assimilation).
  * Why “microtask queue” makes `.then` callbacks run before `setTimeout`.

* **Error handling strategies**:

  * Global unhandled promise rejection tracking.
  * Recovering from async failures gracefully.

* **Performance**:

  * Avoiding accidental sequential execution.
  * Event loop lag and measuring it (`performance.now()` in browser, `perf_hooks` in Node).

* **Interoperability**:

  * Turning streams into async iterables.
  * Using `for await...of`.

* **Patterns & Anti-patterns**:

  * Fire-and-forget with proper safety.
  * Timeouts and cancellation patterns.
  * Avoiding memory leaks from dangling async references.

---

## **6. Build Projects to Cement Mastery**

Nothing replaces applied knowledge. Examples:

* **Parallel image processor** (downloads + resizes in batches with concurrency limits).
* **Retryable API client** with exponential backoff.
* **Custom Task Scheduler** implementing a priority queue using promises.
* **Mini `fetch` polyfill** that supports cancellation and timeout.
