# JavaScript Strict

**Strict Mode** is a **restricted variant** of JavaScript. **avoid silent errors**, **catch common code mistake**.

## Why Strict Mode?

- Eliminates silent errors
- Catch common code mistake
- Debugging Aid
- Cleaner Code
- Optimization

**Strict Mode** is a **restricted variant** of JavaScript. **avoid silent errors**, **catch common code mistake**.

**Strict Mode** is a **restricted variant** of JavaScript introduced in ECMAScript 5 (ES5) that enforces a stricter set of parsing and error handling. It helps in writing cleaner code, avoiding **silent errors**, and ensuring better performance and security.

Strict Mode can be applied to:

- Entire scripts
- Individual functions

Syntax:

```javascript
"use strict";
```

## Activation

### Global Strict Mode

Must be the first statement in the script.

```javascript
"use strict";
```

### Function-Level Strict Mode

Declared as the first statement inside a function.

```javascript
function myFunction() {
  "use strict";
}
```

## Core Rules and Restrictions

1. Variables must be declared before use.
2. Assignments to undeclared variables throw errors.
3. `this` in functions is `undefined` instead of the global object.
4. Cannot delete variables, functions, or function arguments.
5. Duplicate parameter names in functions are not allowed.
6. Duplicate property names in object literals are not allowed.
7. Octal numeric literals (`012`) are not permitted.
8. The `with` statement is disallowed.
9. Assignments to read-only properties throw errors.
10. Assignments to non-writable object properties throw errors.
11. Assignments to getter-only properties throw errors.
12. `eval()` does not create variables in the surrounding scope.
13. `eval` and `arguments` cannot be used as variable or function names.
14. `arguments.caller` and `arguments.callee` are forbidden.
15. `delete` on non-configurable properties throws an error.
16. Function declarations inside blocks are restricted (in ES5).
17. Future reserved keywords cannot be used: `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static`, `yield`.

These rules make JavaScript code more robust, secure, and optimized for modern engines.

## Use Cases

### **Debugging Aid**

Strict mode surfaces bugs that otherwise remain hidden.

### **Cleaner Code**

Enforces cleaner, more predictable code by removing legacy pitfalls.

### **Security**

Helps prevent some common attacks (e.g., reduces risks with `eval()` and global scope pollution).

### **Optimization**

Some JavaScript engines can better optimize strict mode code due to predictable semantics.

### **Frameworks and Libraries**

Used to enforce better discipline in libraries and large codebases.
