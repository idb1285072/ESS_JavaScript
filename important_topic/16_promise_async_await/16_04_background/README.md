## Summary

- Single threaded
- Execute top to bottom
- Every function call creates an **execution context** and pushes it onto the **call stack**
- When the function returns or completes, its frame is popped and control returns to the frame below
- This makes JavaScript **synchronous by default** - nothing else runs until the current top frame finishes - blocking. (unless async API, promise)

## Execution context (what’s inside a stack frame)

When a function is invoked the engine creates an execution context. Conceptually it contains:

- Scope / Lexical Environment — references to variables and outer scope (used for closures).
- Variable Environment — local variables and parameters.
- This binding — value of this for that call.
- Reference to the caller / return address — where to resume after return.
- Internal bookkeeping (e.g., where to continue in the function).

There are two phases for creating an execution context:

- Creation phase — engine sets up the environment:
  - Allocates space for variables and function declarations (hoisting).
  - Sets arguments, this, outer reference.
- Execution phase — runs the function body, assigning values, executing statements.

## Hoisting & creation phase (how variables/functions exist before execution)

```js
console.log(foo); // undefined
console.log(bar()); // "baz"
var foo = "hello";
function bar() {
  return "baz";
}
```

- var foo is hoisted → the binding exists during creation phase and is initialized to undefined.
- function bar is hoisted as a fully initialized function object (callable at runtime).
- So the engine’s creation phase sets those up before actual code runs.
- `let`/`const` are not initialized during the same hoisting step - they exist in a TDZ until the declaration runs.

```js
console.log(x);
let x = 1;
```

## Asynchronous

- JavaScript Engine
  - Call stack
  - Heap
- Host environment
  - Browser: setTimeout, fetch, DOM events, Web APIs
  - Node: file system, http, timers, streams
  - Macro-task queue: asynchronous
  - Micro-task queue: promise
    Even though Promise is native, it needs a host API (like setTimeout) to be truly asynchronous.

```js
console.log("start");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => {
  console.log("promise");
  setTimeout(() => console.log("timeout inside promise"), 0);
});

console.log("end");
/*
start
end
promise
timeout
timeout inside promise
*/
```
