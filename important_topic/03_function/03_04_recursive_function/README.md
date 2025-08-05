# **Recursion**

**Recursion** is a technique in programming where a **function calls itself** to solve a problem by breaking it down into smaller, simpler versions of the same problem.

## Core Idea:

> A recursive function **solves a small part of a problem** and then **calls itself** to solve the rest.

## Two essential parts of a recursive function:

1. **Base Case**:
   The stopping condition. When this is true, the function returns without calling itself again.
   → _Prevents infinite recursion._

2. **Recursive Case**:
   The part where the function calls itself with **simpler or smaller input**.

---

### Example: Factorial

```js
function factorial(n) {
  if (n === 0) return 1; // Base Case
  return n * factorial(n - 1); // Recursive Case
}
```

### Warning: Infinite Recursion Example

```js
function hello() {
  console.log("Hello");
  hello(); // No base case!
}
hello(); // Will crash the program
```

---

### Recursion Analogy:

> Like **Russian nesting dolls**: each doll contains a smaller one until you reach the tiniest — the **base case**.

---
