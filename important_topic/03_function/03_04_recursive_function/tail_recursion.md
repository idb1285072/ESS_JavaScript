# Tail Recursion

**Tail Recursion** is when the **recursive call is the last thing executed** by the function.

```js
function tailRec(n, acc = 1) {
  if (n === 0) return acc;
  return tailRec(n - 1, n * acc); // Recursive call is last
}
```

In tail recursion, **no work is done after the recursive call**. This means:

- No need to store intermediate states.
- In languages with **Tail Call Optimization (TCO)**, this can be optimized to avoid stack overflows.

---

## Non-Tail

**Non-Tail Recursion** is when the recursive call is **not the final operation** — the function still needs to do something **after the call returns**.

```js
function nonTailRec(n) {
  if (n === 0) return 1;
  return n * nonTailRec(n - 1); // ← more work after recursive call
}
```

Requires maintaining the call stack → higher memory usage and risk of stack overflow for deep recursion.

---

## Important: JavaScript & TCO

- ECMAScript spec _allows_ Tail Call Optimization (TCO), but:

  - **Not supported** in most browsers (including Chrome, Firefox).
  - Only **Safari** (in strict mode) supports it.

> So in practice, tail-recursive code in JS **won’t prevent stack overflow**, but is still a **clean, functional style**.

---

## Side-by-Side Example

### Non-Tail Factorial

```js
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1); // Not tail-recursive
}
```

### Tail-Recursive Factorial

```js
function factorialTail(n, acc = 1) {
  if (n === 0) return acc;
  return factorialTail(n - 1, n * acc); // Tail-recursive
}
```
