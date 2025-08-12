# 🔄 Event Loop in JavaScript (Detailed Explanation)

---

## ✅ Why Event Loop Exists

JavaScript runs on a **single thread**, meaning it can only execute **one piece of code at a time**.
So how can it handle:

- Timers (`setTimeout`, `setInterval`)
- Promises / `async/await`
- DOM events (click, keypress, etc.)
- I/O operations (e.g. API calls)

> 🧠 Answer: **The Event Loop** coordinates **what gets executed when**, so JS can handle async tasks without blocking the main thread.

---

## 🧱 Components Involved

1. **Call Stack**
   Executes synchronous code (one function at a time, LIFO).
2. **Web APIs / Browser APIs**
   Handles async work (e.g., `setTimeout`, `fetch`) in the background.
3. **Callback Queue (a.k.a. Task Queue)**
   Holds `setTimeout`, `DOM events`, etc. waiting to be pushed to the call stack.
4. **Microtask Queue**
   Holds `Promise` callbacks (`.then`, `catch`, `finally`, `async/await` resolution).
5. **Event Loop**
   Coordinates the movement of tasks into the **Call Stack**.

---

## 🔁 How the Event Loop Works

### Step-by-step:

1. JavaScript starts executing **synchronous code** in the **Call Stack**.
2. When it hits an **async task** like `setTimeout`, it’s sent to a **Web API**.
3. Once the task completes (e.g., timer expires), the **callback** is moved to:

   - **Callback Queue** (e.g., `setTimeout`)
   - **Microtask Queue** (e.g., `Promise.then`)

4. The **Event Loop** checks:

   - Is the **Call Stack** empty?

     - Yes? Then:

       - **First**, run all tasks in the **Microtask Queue** (until empty)
       - **Then**, run one task from the **Callback Queue**

     - No? Wait until the call stack is empty.

---

## 🧪 Example 1: Basic Event Loop

```js
console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");
```

### Output:

```
1
4
3  ← (microtask queue)
2  ← (callback queue)
```

---

## 🧪 Example 2: async/await and Microtasks

```js
async function test() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
}
test();
console.log("C");
```

### Output:

```
A
C
B
```

> ✅ The `await` pauses function execution, and the `.then()` callback goes to the **microtask queue**, which runs after the synchronous code.

---

## 📊 Microtask vs Callback Queue

| Feature           | Microtask Queue         | Callback (Macrotask) Queue   |
| ----------------- | ----------------------- | ---------------------------- |
| Contains          | `Promise.then`, `await` | `setTimeout`, DOM events     |
| Priority          | ✅ Higher               | ❌ Lower                     |
| When it's checked | After every task        | After microtasks are drained |

---

## 🧠 Summary

- **Event Loop** lets JS appear to do multiple things at once
- Manages when tasks are pulled into the **Call Stack**
- Ensures smooth handling of **async operations**
- **Microtasks** (Promises) are handled **before** timers and other callbacks

---

## 🧰 Visual Flow:

```
Main Thread (Call Stack)
    ↓
Web APIs ← async tasks (setTimeout, fetch)
    ↓
Callback Queue ← timers, DOM events
Microtask Queue ← Promises
    ↓
  Event Loop → pushes to Call Stack when it's empty
```
