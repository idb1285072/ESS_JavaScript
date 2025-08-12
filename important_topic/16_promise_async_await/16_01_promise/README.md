# Promise

A Promise in JavaScript is an object that represents the eventual completion/success
 (or failure) of an asynchronous operation, and the value it produces.

Think of it as a placeholder for a value that you don’t have yet, but will get in the future.

## Promise states

A promise can be in one of these states:

1. **Pending**- **initial state**, **operation is running**
2. **Fulfilled** (or Resolved) - **operation completed successfully** and the Promise now holds a resulting value
3. **Rejected** - **operation failed** and the Promise holds an error

## Why Promise?

- Avoids callback hell
- Enables chaining with `.then()` and `.catch()`
- Providing built-in error handling

## Syntax

```js
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  success ? resolve("Success") : reject("Failure");
});
```

```js
const resolved = Promise.resolve("Already done");
```

```js
const rejected = Promise.reject("Immediate error");
```

```js
Promise.resolve(5)
  .then(x => x * 2)
  .then(result => console.log(result)) // 10
  .catch(err => console.error(err));
```

```js
const fetchData = async () => {
  return "data loaded";
}
```

---

### **`.then()` — Handle Fulfillment**

```js
Promise.resolve("Done")
  .then(result => console.log(result)); // Done
```


### **`.catch()` — Handle Rejection**

```js
Promise.reject("Error")
  .catch(err => console.error(err)); // Error
```


### **`.finally()` — Run Regardless of Outcome**

```js
Promise.resolve("Done")
  .finally(() => console.log("🧹 Cleanup"));
```

### **`async/await` — Syntactic Sugar for Promises**

```js
async function load() {
  try {
    const data = await Promise.resolve("Loaded");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

### **`Promise.all()` — Run in Parallel, Wait for All**

```js
Promise.all([
  Promise.resolve(1),
  Promise.resolve(2)
]).then(results => console.log(results)); // [1, 2]
```


### **`Promise.allSettled()` — Wait for All, Regardless of Outcome**

```js
Promise.allSettled([
  Promise.resolve("Yes. Resolved"),
  Promise.reject("Rejected")
]).then(results => console.log(results));
```


### **`Promise.race()` — First to Settle Wins**

```js
Promise.race([
  Promise.resolve("Fast"),
  new Promise(resolve => setTimeout(() => resolve("Slow"), 1000))
]).then(result => console.log(result)); // Fast
```


### **`Promise.any()` — First Fulfilled Wins (Ignores Rejections)**

```js
Promise.any([
  Promise.reject("Rejected"),
  Promise.resolve("Success")
]).then(result => console.log(result)); // Success
```

## Promise static methods
- `Promise.resolve()`
- `Promise.reject()`
- `Promise.all()` Runs multiple promises in parallel and resolves when all are fulfilled, or rejects if any one fails.
- `Promise.allSettled()` Runs multiple promises in parallel, but always waits for all to finish, giving results for both successes and failures.
- `Promise.race()` Resolves or rejects as soon as any one of the promises settles (first one wins).
- `Promise.any()` Resolves as soon as any one promise fulfills (ignores rejections unless all reject).


## an async function that retries a failing Promise up to 3 times before finally reject
```js
async function retryAsync(fn, retries = 3, delay = 500) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fn(); // Try executing the async function
    } catch (err) {
      if (attempt === retries) throw err; // Final failure
      await new Promise(res => setTimeout(res, delay)); // Wait before retry
    }
  }
}

let count = 0;
const unstableTask = async () => {
  count++;
  if (count < 3) throw new Error("Failed attempt " + count);
  return "Success on attempt " + count;
};
retryAsync(unstableTask)
  .then(console.log)
  .catch(console.error);
```