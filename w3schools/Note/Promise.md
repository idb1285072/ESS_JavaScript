# Promise

- 3 states - **pending**, **fulfilled**, **rejected**
- To solve callback hell and centralize error handling
- Static Method: `Promise.all()`, `Promise.race()`, `Promise.any()`, `Promise.allSettled()`

```js
Promise.all([p1, p2, p3])
  .then((results) => console.log("All done:", results))
  .catch((err) => console.error("Failed:", err));
```

---

# Create Promise

## Basic Constructor Syntax

```js
const promise = new Promise((resolve, reject) => {
  // async logic here
  if (success) {
    resolve(result);
  } else {
    reject(error);
  }
});
```

## Wrapping Callback-based API

```js
function readFileAsync(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}
```

## Using `Promise.resolve()/Promise.reject()`

```js
Promise.resolve("Success"); //fulfilled
Promise.resolve("Failure"); //rejected
```

## Async Function (Synthetic Promise Syntex)

```js
async function fetchData() {
  return "Fetched!"; // implicitly wrapped in Promise.resolve()
}

async function loadUserProfile(userId) {
  try {
    const user = await fetch(`/api/users/${userId}`).then((res) => res.json());
    const profile = await fetch(`/api/profiles/${user.id}`).then((res) =>
      res.json()
    );
    return profile;
  } catch (error) {
    console.error("Failed to load profile:", error);
    throw error;
  }
}
```

## Factory Function Pattern

```js
const createDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
createDelay(1000).then(() => console.log("Waited 1s"));
```

## Promise Constructor with `try/catch` Logic

```js
const robustPromise = new Promise((resolve, reject) => {
  try {
    let result = riskyOperation();
    resolve(result);
  } catch (error) {
    reject(error);
  }
});
```

---

# Consuming Promise (then, catch, finally)

- `then(onResolvedFn, onRejectedFn)`
  - Return a new Promise, allowing the chaining
  - If return a value, it becomes the resolution of the next `.then()`
  - If return a Promise, chaining continues
  - If error, next `.catch()` catches it
- `.catch(fn)` behind the scenes `.then(null, fn)`
  - `.catch()` captures errors from a rejected Promise or any error thrown during the `.then()` chain
- `.finally()` clean up regardless of outcome
  - Hiding loaders, Resetting UI, Logging

```js
function fetchResource() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5
        ? resolve("Fetched successfully")
        : reject("Fetch failed");
    }, 1000);
  });
}

fetchResource()
  .then((result) => console.log("✅", result))
  .catch((error) => console.error("❌", error))
  .finally(() => console.log("🔁 Finished"));
```

## Chaining Promise

```js
const fetchUser = (id) => fetch(`/api/users/${id}`).then((res) => res.json());
const fetchProfile = (user) =>
  fetch(`/api/profile/${user.id}`).then((res) => res.json());

fetchUser(1)
  .then(fetchProfile)
  .then((profile) => displayProfile(profile))
  .catch(handleError);
```

---
