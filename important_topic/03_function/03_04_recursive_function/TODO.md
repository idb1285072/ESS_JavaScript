## 🔰 1. **Foundations of Recursion**

Before deep diving, you need to solidify these concepts:

- **What is recursion?**

  - Function calling itself.
  - Base case & recursive case.

- **Call stack**

  - How JavaScript manages function calls.

📘 **Learn:**

- Writing simple recursive functions (e.g., factorial, countdown).
- Stack overflow and why infinite recursion fails.
- Tail vs. non-tail recursion.

---

## 🧪 2. **Classic Recursive Patterns**

These are must-master templates:

### 🔁 Iterative vs Recursive Comparison

- Practice converting loops to recursion and vice versa.

### 📚 Classic Problems:

- Factorial
- Fibonacci
- Power of number
- Greatest Common Divisor (GCD)
- Reverse string/array
- Flatten nested arrays
- Palindrome check
- Sum of digits

---

## 🧩 3. **Recursion with Data Structures**

### 🐍 Arrays

- Recursive map, filter, reduce
- Flatten deeply nested arrays
- Finding elements recursively

### 🌲 Objects

- Traverse deeply nested objects
- Count keys/values recursively
- Deep cloning (recursive clone)

### 🌳 Trees

- Binary tree traversal (pre-order, in-order, post-order)
- N-ary trees
- Depth-first vs breadth-first (implement DFS recursively)
- Find node, count nodes, sum nodes recursively

### 🧭 Graphs

- DFS recursive implementation
- Detect cycles using recursion

---

## 🛠️ 4. **Advanced Recursive Techniques**

### 🎯 Backtracking

- N-Queens Problem
- Sudoku Solver
- Maze solving
- Word search in grid

### 💡 Divide and Conquer

- Merge sort
- Quick sort
- Binary search (recursive version)
- Closest pair of points

### ⚙️ Memoization & DP (Dynamic Programming)

- Top-down DP with memoization
- Recursive Fibonacci with memoization
- Coin change
- Longest Common Subsequence (LCS)

---

## 🧠 5. **Tail Call Optimization (TCO)**

- Understand JavaScript's tail call optimization (note: not all engines support it fully).
- Rewrite functions to be tail-recursive where possible.

---

## 🔬 6. **Mastery Challenges (for deep recursion thinking)**

- Implement parser (e.g., parse JSON-like string)
- Recursive descent parser
- Build expression evaluator (e.g., `3 + (2 * (4 - 1))`)
- Functional composition recursively
- Create a recursive template engine

---

## 🧪 7. **Testing & Debugging Recursive Functions**

- Tracing the call stack
- Visualizing recursion (use tools like debugger or drawing trees)
- Avoiding stack overflows (e.g., use iteration where better)

---

## 🛡️ 8. **Best Practices**

- Limit recursion depth
- Handle large inputs (tail recursion or iteration)
- Always define a clear base case
- Use memoization or caching wisely
- Avoid unnecessary function calls

---

## 🚀 Tools & Resources

- **JavaScript Visualizer** (e.g., [pythontutor.com](https://pythontutor.com/javascript.html))
- **LeetCode / HackerRank / Codewars** (search recursive problems)
- **Books**: “Eloquent JavaScript” (Chapter on Recursion), “Grokking Algorithms”

---

# Recursive Functions in JavaScript

### 1. What is Recursion?

**Recursion** is a programming technique where a function calls **itself** in order to solve a problem by breaking it down into smaller, simpler instances of the same problem.

---

### 2. Key Characteristics

- A recursive function must have a **base case** — a condition under which it stops calling itself.
- Each recursive call should progress towards the base case to avoid infinite recursion.
- Useful for problems naturally defined in terms of smaller subproblems (e.g., factorial, Fibonacci, tree traversal).

---

### 3. Basic Structure of a Recursive Function

```js
function recursiveFunction(parameters) {
  if (baseCaseCondition) {
    return baseCaseValue; // Stop recursion
  } else {
    // Recursive case: function calls itself with modified parameters
    return recursiveFunction(modifiedParameters);
  }
}
```

---

### 4. Example: Factorial

Factorial of a number `n` (written `n!`) is the product of all positive integers up to `n`.

```js
function factorial(n) {
  if (n <= 1) return 1; // Base case: factorial(1) = 1
  return n * factorial(n - 1); // Recursive case
}

console.log(factorial(5)); // Output: 120
```

---

### 5. Example: Fibonacci Sequence

Fibonacci sequence: each number is the sum of the two preceding ones.

```js
function fibonacci(n) {
  if (n <= 0) return 0; // Base case 1
  if (n === 1) return 1; // Base case 2
  return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}

console.log(fibonacci(6)); // Output: 8
```

---

### 6. Tips for Writing Recursive Functions

- **Always define a clear base case** to prevent infinite recursion.
- Ensure recursive calls make progress toward the base case.
- Be aware of **call stack size** limitations; deep recursion may cause stack overflow.
- Sometimes recursion can be converted to **iteration** for efficiency.

---

### 7. Tail Recursion (Advanced)

- A recursive call is **tail-recursive** if it is the last action in the function.
- Some JavaScript engines optimize tail recursion to prevent growing the call stack.

```js
function tailFactorial(n, acc = 1) {
  if (n <= 1) return acc;
  return tailFactorial(n - 1, n * acc);
}
```

---

# Examples

## 1. Factorial Calculation

**Problem:** Calculate factorial of a positive integer.

```js
function factorial(n) {
  if (n <= 1) return 1; // Base case
  return n * factorial(n - 1); // Recursive case
}

console.log(factorial(6)); // 720
```

**Use case:** Math computations, combinatorics.

---

## 2. Fibonacci Sequence

**Problem:** Compute the nth Fibonacci number.

```js
function fibonacci(n) {
  if (n <= 0) return 0; // Base case 1
  if (n === 1) return 1; // Base case 2
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(7)); // 13
```

**Use case:** Algorithms, dynamic programming foundation.

---

## 3. Flatten Nested Arrays

**Problem:** Convert arbitrarily nested arrays into a flat array.

```js
function flatten(arr) {
  let result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item)); // Recursive call
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(flatten([1, [2, [3, 4], 5], 6]));
// Output: [1, 2, 3, 4, 5, 6]
```

**Use case:** Data processing, normalization.

---

## 4. Directory Traversal (File System)

**Problem:** Recursively list all files in a directory tree.

```js
const fs = require("fs");
const path = require("path");

function listFiles(dirPath) {
  let results = [];
  const items = fs.readdirSync(dirPath);

  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stats = fs.statSync(fullPath);
    if (stats.isDirectory()) {
      results = results.concat(listFiles(fullPath)); // Recursive call
    } else {
      results.push(fullPath);
    }
  }
  return results;
}

// Usage (Node.js environment):
// console.log(listFiles('/your/directory/path'));
```

**Use case:** File system utilities, build tools.

---

## 5. Sum of Nested Object Values

**Problem:** Sum all numeric values in a nested object structure.

```js
function sumValues(obj) {
  let total = 0;
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      total += obj[key];
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      total += sumValues(obj[key]); // Recursive call
    }
  }
  return total;
}

const data = {
  a: 1,
  b: { c: 2, d: { e: 3 } },
  f: 4,
};

console.log(sumValues(data)); // 10
```

**Use case:** Data aggregation, analytics.

---
