# Spread vs Rest in JavaScript

## Overview

- Both spread and rest operators use the `...` (ellipsis) syntax. But **context-sensitive**.
- The behavior of the operator depends on its context:

  - **Spread**: **Expands** iterable elements into individual components.
  - **Rest**: **Gather** multiple elements into a single array or object, typically in function parameters or destructuring.

- Conceptually, rest **packs** values into an array, while spread **unpacks** them.

---

## Use Cases

### Spread Operator

- Copy arrays or objects
- Concatenate, Merge
- Passing iterable values to function arguments
- Expand values in array or object literals

### Rest Operator

- Destructur array or object
- Rest parameter in **variadic function**[^1] definitions

---

## Related Concepts

### Arguments Object

- arguments object
  - array like object not a true array
  - does not support array methods
  - arrow functions have no `arguments` object of their own
  - rest parameters have more clean and modern syntax

---

## Key Considerations

- Spread operator creates **shallow copies** only; nested structures remain linked by reference

---

[^1]: Variadic function takes any number of arguments
