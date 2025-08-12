# async/await

- `async` makes a function so it always returns a **Promise**
- `await` pauses execution until the Promise resolves or rejects
- `async`/`await` is syntaxic sugar built on top of Promise - it makes asynchronous code read like synchronous code

```js
async function logMessage() {
  console.log("Hello");
}
const result = logMessage();
console.log(result); // Promise { <fulfilled>: undefined }
```

## Syntax

### Declaring `async` functions

```js
async function myFunc() {
  return "Hello";
}
```

```js
const myFunc = async function () {
  return "Hello";
};
```

```js
const myFunc = async () => {
  return "Hello";
};
```

```js
class MyClass {
  async myMethod() {
    return "Hello";
  }
}
```

### `await` syntax inside async functions

**Basic usage**

```js
async function example() {
  const value = await somePromise;
  console.log(value);
}
```

**With non-promise value**

```js
async function example() {
  const value = await 42; // same as Promise.resolve(42)
}
```

**With try/catch**

```js
async function example() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

### Sequential vs Concurrent with `await`

**Sequential**

```js
async function sequential() {
  const a = await task1();
  const b = await task2();
}
```

**Concurrent**

```js
async function concurrent() {
  const [a, b] = await Promise.all([task1(), task2()]);
}
```

### Top-level `await` (ES modules only)

```js
// In an ES module file (.mjs or <script type="module">)
const data = await fetch("/api/data").then((r) => r.json());
console.log(data);
```

### Using `await` in loops

**For...of (sequential)**

```js
for (const item of items) {
  const result = await process(item);
}
```

**For await...of (async iterators)**

```js
for await (const chunk of stream) {
  console.log(chunk);
}
```

---

### Returning values and errors

```js
async function returnsValue() {
  return 123; // Promise.resolve(123)
}

async function throwsError() {
  throw new Error("Oops"); // Promise.reject(...)
}
```

### Mixing `await` with Promise helpers

```js
const results = await Promise.all([task1(), task2(), task3()]);

const settled = await Promise.allSettled([task1(), task2()]);

const first = await Promise.race([slowTask(), fastTask()]);

const any = await Promise.any([promise1, promise2]);
```

### `async function*` — async generators

```js
async function* numbers() {
  yield 1;
  yield await Promise.resolve(2);
}

for await (const num of numbers()) {
  console.log(num);
}
```

### `await` with destructuring

```js
const { name, age } = await getUser();
const [a, b] = await Promise.all([task1(), task2()]);
```

### Immediately Invoked Async Function Expression (Async IIFE)

```js
(async () => {
  const data = await fetchData();
  console.log(data);
})();
```

### **Rule of thumb**:

- You can only use `await` **inside** an `async` function, except in **top-level await** (ESM only).
- Every `async` function **always** returns a Promise, even if you `return` a plain value.
- `await` always pauses until the Promise resolves/rejects, yielding to the event loop.
