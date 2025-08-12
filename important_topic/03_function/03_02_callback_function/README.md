# Callback Functions in JavaScript

A callback function is a function that is **passed as an argument** to another function, to be executed later.

### Why Callbacks?

- To handle **asynchronous operations** (e.g., events, timers, API calls).
- To **customize behavior** of functions by passing different callbacks.

### Callback Use Case

- 🧭 Order Control (Asynchronous):
  - Callback ensures code runs after async task completes
  - Used in I/O, timers, events, network requests
- 🧠 Custom Logic (Synchronous):
  - Callback passed to a function for dynamic behavior
  - Common in array methods (map, filter, reduce)

### Basic Syntax

```js
function doSomething(callback) {
  // Some operation
  callback(); // Call the passed-in function
}
```

### Callback with Array Method

```js
const numbers = [1, 2, 3];

numbers.forEach(function (number) {
  console.log(number * 2);
});

// Using arrow function
numbers.forEach((number) => console.log(number * 2));
```

### Asynchronous Callback

```js
setTimeout(() => {
  console.log("Executed after 1 second");
}, 1000);
```

### Callback with Parameters

```js
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

greet("Alice", () => {
  console.log("Greeting done.");
});
```

### Callback Hell (Pyramid of Doom)

Multiple nested callbacks can lead to hard-to-read code:

```js
doStep1(() => {
  doStep2(() => {
    doStep3(() => {
      // ...
    });
  });
});
```

> Nested callbacks are used for sequencing only in asynchronous JavaScript. No need nested callback in synchronous JavaScript. So, there is no callback hell in synchronous JavaScript.

**Modern solution:** Use **Promises** or **async/await** to write cleaner asynchronous code.
