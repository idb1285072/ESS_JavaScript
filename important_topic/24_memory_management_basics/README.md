# Memory Management in JavaScript

Memory management is the process by which JavaScript allocates space in memory for data, manages its usage, and frees up memory that is no longer needed to avoid memory leaks and keep the program efficient.

- Memory Allocation
- Stack vs Heap Memory
- Garbage Collector (GC)
- Memory Leaks

---

## 1. **Memory Allocation**

When you create variables, objects, arrays, functions, etc., JavaScript automatically allocates memory space to store this data.

- **Primitive types** (like numbers, strings, booleans) are usually stored in the **stack** — a simple and fast region of memory.
- **Objects, arrays, functions** are stored in the **heap** — a larger and more complex memory area for dynamic data.

---

## 2. **Stack vs Heap**

| Aspect            | Stack                                            | Heap                         |
| ----------------- | ------------------------------------------------ | ---------------------------- |
| Stores            | Primitive values (numbers, booleans, etc.)       | Objects, arrays, functions   |
| Memory management | Automatically managed, LIFO (last in, first out) | Managed by garbage collector |
| Size              | Smaller, fixed size                              | Larger, dynamic size         |
| Access speed      | Very fast                                        | Slower compared to stack     |

---

## 3. **Garbage Collection (GC)**

JavaScript has **automatic garbage collection** — meaning it automatically frees memory that’s no longer accessible or needed.

### How it works:

- The garbage collector periodically scans the memory to find **unreachable objects**.
- An object is **reachable** if it can be accessed from:
  - The global scope
  - The call stack (current executing function)
  - Variables or closures referencing it
- If no reference points to an object, it’s considered **garbage** and the memory is reclaimed.

## 4. **References and Values**

- **Primitive types** hold their actual values directly.
- **Objects/arrays/functions** are stored as references — the variable holds a pointer to the location in the heap.

Example:

```js
let a = 10; // 'a' holds value 10
let b = a; // 'b' copies value 10 (independent copy)

let obj1 = { name: "Alice" }; // obj1 references object in heap
let obj2 = obj1; // obj2 references same object

obj2.name = "Bob"; // Changes affect obj1 too
console.log(obj1.name); // "Bob"
```

---

## 5. **Memory Leaks**

JavaScript uses garbage collection to automatically free memory that's no longer in use. But if your code keeps references to objects that aren’t actually needed anymore, the garbage collector can't clean them up. That causes memory to build up unnecessarily.

Even with automatic GC, you can cause **memory leaks** by keeping references to objects that are no longer needed.

```js
<button id="leakyBtn">Click Me</button>
<script>
  const button = document.getElementById("leakyBtn");

  function handleClick() {
    console.log("Button clicked!");
  }

button.addEventListener("click", handleClick);
// Later, the button is removed from DOM
button.remove(); // But the event listener is still active!
</script>
```

Common causes:

- **Global variables** that accumulate unused data.
- **Closures** that unintentionally keep references alive.
- **Timers or event listeners** that are not properly cleaned up.
- **Detached DOM nodes** still referenced in JS.

Leaks cause your app to use more memory over time, slowing down or crashing.

---

## 6. **Best Practices for Memory Management**

- Avoid unnecessary **global variables**.
- **Nullify** references when **objects** are no longer needed:
  ```js
  obj = null;
  ```
- Remove **event listeners** and **clear timers** when done.
- Be mindful of closures capturing large objects.
- Use tools like browser DevTools to monitor memory usage and leaks.
  - `Ctrl`+`Shift`+`J`
  - Memory
  - Take snapshot

## 7. Can value type create memory leaks?

NO. Generally, **value types** in JavaScript (like numbers, strings, booleans, `null`, `undefined`, symbols, and bigints) **do not cause memory leaks** by themselves.

### Why?

- Value types are **stored directly** (in the stack or optimized memory), and they are simple and small.
- When they go out of scope, they are immediately eligible for garbage collection.
- They don’t hold references to other objects, so they don’t keep memory alive.

---

### Memory leaks mostly happen because of:

- **Reference types** (objects, arrays, functions, DOM nodes) that stay referenced somewhere.
- Closures or event listeners holding onto data.
- Detached DOM nodes.
- Timers, caches, or global variables holding large objects.
