# Static Method of Promise

## ✅ `Promise.all()`

- **Waits for all promises to fulfill**
- If **any promise rejects**, the whole thing **rejects**
- Returns a single promise that resolves to an **array of results**

### Example:

```js
Promise.all([p1, p2, p3])
  .then((results) => console.log(results))
  .catch((err) => console.error(err));
```

### Use Case:

- When all tasks are required (e.g., load multiple APIs before rendering)

---

## ✅ `Promise.race()`

- Returns the result of the **first settled promise**
  (fulfilled or rejected)
- Ignores the rest

### Example:

```js
Promise.race([p1, p2, p3])
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
```

### Use Case:

- Timeout handling or picking the fastest response

---

## ✅ `Promise.allSettled()`

- **Waits for all promises to settle**
  (either fulfill or reject)
- Returns an array of `{ status, value/reason }` for each

### Example:

```js
Promise.allSettled([p1, p2, p3]).then((results) => {
  results.forEach((r) => console.log(r.status, r.value || r.reason));
});
```

### Use Case:

- When you want to know the outcome of **every promise**, even if some fail

---

## ✅ `Promise.any()`

- Returns the **first fulfilled promise**
- **Ignores rejections** unless **all fail**, then rejects with `AggregateError`

### Example:

```js
Promise.any([p1, p2, p3])
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
```

### Use Case:

- Use the **first success** among many options

---

## 🧠 Summary Table

| Method                 | Resolves When                         | Rejects When                  | Returns                 |
| ---------------------- | ------------------------------------- | ----------------------------- | ----------------------- |
| `Promise.all()`        | All promises fulfilled                | Any one fails                 | Array of results        |
| `Promise.race()`       | First settles (fulfilled or rejected) | Immediately on first settle   | First result or error   |
| `Promise.allSettled()` | All settle (fulfilled or rejected)    | ❌ Never rejects              | Array of status objects |
| `Promise.any()`        | First fulfilled                       | All reject (`AggregateError`) | First success           |

---
