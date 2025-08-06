# Recursion vs Normal Loops

## Normal Loops

> Loop is used to handle repetitive tasks.

- Flat, repetitive tasks (e.g., counting, array traversal)
- Known structure and predictable depth
- The problem is iterative in nature (e.g., counting, traversing arrays).
- You want better performance and lower memory usage
- Examples: pagination logic, filtering array, summing numbers

## Recursion

> Recursion is a technique in programming where a function calls itself to solve a problem by breaking it down into smaller, simpler versions of the same problem.

- Hierarchical or nested problems with **unknown or dynamic depth**
- Examples: Traverse DOM tree, render dynamic nested menus, file systems
- Cleaner logic

---

## Key Points

- Recursion consumes stack → risk of overflow
- If performance matters and the task can be done with a loop, prefer loops.
  But if the recursive approach is cleaner and avoids deeply nested loops, use recursion with a base case.
