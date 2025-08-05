# Callback function
- A callback function is a function passed as an argument to another function.

---
### Why?
- Asynchronous Handling (Non-blocking behavior)
  - Fetching data from APIs
  - Reading Files
  - Delaying actions e.g. setTimeout
- Flow Control
- Custom Logic Injection
- Code Reusability & Decoupling
- Event-driven Architecture? (UI like Angular, React)

---

### Related Topics

1. Higher-Order Functions: take other functions as arguments or return them
2. Asynchronous Programming: handle tasks without blocking execution.
3. Promises: handle callback hell with more readable .then() chaining.
4. Async/Await
- Built on top of Promises.
- Allows asynchronous code to look synchronous, improving readability.
5. Event Loop
- Core of how JavaScript manages asynchronous tasks.
- Understanding callbacks requires understanding how the event loop queues and executes tasks.
6. Error-First Callbacks
- Common in Node.js: function(err, result) { ... }
- Helps handle errors predictably in asynchronous patterns.
7. Functional Programming Principles
- Concepts like immutability, pure functions, and first-class functions.
- Callbacks contribute to declarative, side-effect-free coding.
8. Middleware Architecture (especially in Express.js)
- Functions passed along the request/response chain via next() callbacks.
- Encourages modular, layered logic
