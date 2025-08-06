# Loops

Loops are used to handle repeated task

- for loops are best when we know or can calculate **the exact number of iteration**
- while loops are ideal when we **don't know the exact number of iterations**
- do...while loops are perfect when we don't know the exact number of iterations and we need **execute the loop block at least once**
- for...in loops (Key/index) are used for **Object**, Array (shouldn't use because of order)
- for...of loops (Value) are used for **Array, String, Map, Set**

---

### `for` Loop

**Best for:** Known number of iterations or index-based traversal.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

- Use when you know **how many times** to loop.
- Ideal for **arrays**, **ranges**, or **counters**.
- Keeps loop control (init, condition, increment) in one line.

---

### `while` Loop

**Best for:** Unknown number of iterations, condition checked **before** each run.

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

- Use when the loop should run **only if** a condition is true.
- Great for **waiting on a condition** or **user input**.
- May not run at all if the condition is false initially.

---

### `do...while` Loop

**Best for:** At least one guaranteed execution, condition checked **after** each run.

```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

- Use when the loop **must run once**, even if the condition is false.
- Useful for **menus**, **retry logic**, or **prompt-based input**.
- Can be risky if the condition never becomes false.

---
