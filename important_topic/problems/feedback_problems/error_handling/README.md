In JavaScript, an **error** is an object that represents an **unexpected issue** in code execution.

- All errors inherit from the **`Error`** object.
- Common built-in error types include: `SyntaxError`, `ReferenceError`, `TypeError`, `RangeError`, `URIError`, `EvalError`, and `AggregateError`.

---

### SyntaxError

**SyntaxError** in JavaScript occurs when the code **does not follow the correct syntax rules** and cannot be parsed.

- It is thrown **at parse time**, so the script may not run at all.
- Common causes: missing brackets, extra commas, invalid tokens, or wrong statements.

**Examples**

```js
if (true {       // SyntaxError
  console.log("Hello");
}
```

```js
let x = 10,, 20; // SyntaxError: Unexpected token ','
```

```js
const 1abc = 5;  // SyntaxError: Invalid or unexpected token
```

```js
let for = 5;     // SyntaxError: Unexpected token 'for'
```

---

### ReferenceError

A **ReferenceError** occurs when you **access a variable or function that hasn’t been declared** in the current scope.

- It’s a **runtime error**, thrown when the code tries to reference something unknown.

---

**Examples**

```js
console.log(x); // ReferenceError: x is not defined
```

```js
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 5;
```

```js
let name = "Alice";
console.log(nmae); // ReferenceError: nmae is not defined
```

```js
function greet() {
  let msg = "Hello";
}
console.log(msg); // ReferenceError: msg is not defined
```

```js
sayHi(); // ReferenceError: sayHi is not defined
```

---

Here’s a **clear explanation of TypeError in JavaScript** with examples:

---

### TypeError

**Examples**

```js
let num = 5;
num(); // TypeError: num is not a function
```

```js
let obj = null;
console.log(obj.name); // TypeError: Cannot read properties of null (reading 'name')
```

```js
let x;
console.log(x.value); // TypeError: Cannot read properties of undefined (reading 'value')
```

```js
const PI = 3.14;
PI = 3; // TypeError: Assignment to constant variable
```

```js
let num = 5;
num.push(10); // TypeError: num.push is not a function
```

```js
let str = "hello";
let obj = new str(); // TypeError: str is not a constructor
```

```js
"use strict";
function greet() {
  console.log(this.name);
}
greet.call(null); // TypeError: Cannot read properties of null
```

**Key Points**

- Common in **property access, function calls, assignments, and constructor misuse**.
- Can be prevented by **type checks** (`typeof`, `Array.isArray`) or **optional chaining (`?.`)**.

---

### RangeError

A **RangeError** occurs when a value is **outside the allowable range for a particular operation**.

- It is usually thrown by built-in functions or constructors when you pass an invalid numeric or length value.

**Examples**

```js
let arr = new Array(-1); // RangeError: Invalid array length
```

```js
let str = "hello";
str.length = -5; // RangeError: Invalid string length
```

```js
let num = 1;
num.toPrecision(500); // RangeError: toPrecision() argument must be between 1 and 100
```

```js
function recurse() {
  return recurse();
}
recurse(); // RangeError: Maximum call stack size exceeded
```

```js
let buffer = new ArrayBuffer(1024);
let view = new Uint8Array(buffer, 0, 2048); // RangeError: Invalid typed array length
```

---

**Key Points**

- RangeError occurs when a **value is out of allowable numeric or length bounds**.
- Common with: **arrays, strings, numbers, recursion, and typed arrays**.
- Can be prevented by **validating input values** and controlling recursion depth.

### URIError

A **`URIError`** occurs when a global URI handling function is used **incorrectly**, usually with **malformed or invalid URI components**.

- Triggered by functions like `encodeURI`, `decodeURI`, `encodeURIComponent`, `decodeURIComponent`.

---

### **Common Causes & Examples**

```js
decodeURI("%"); // URIError: URI malformed
```

```js
decodeURIComponent("%E0%A4"); // URIError: URI malformed
```

```js
encodeURI("\uD800"); // URIError: URI malformed
```

```js
encodeURIComponent("\uD800"); // URIError: URI malformed
```

---

### `EvalError`

- `EvalError` is a **built-in error type** in JavaScript.
- It indicates **problems with the `eval()` function**.
- **Modern JS rarely throws it**, as most issues that used to trigger `EvalError` now throw **other error types** like `SyntaxError` or `ReferenceError`.

---

**Examples**

```js
try {
  throw new EvalError("Custom eval error");
} catch (e) {
  console.log(e.name); // "EvalError"
  console.log(e.message); // "Custom eval error"
}
```

```js
// Modern browsers usually throw SyntaxError instead
eval("var a = ;"); // SyntaxError: Unexpected token ;
```

**Key Points**

- `EvalError` **exists mainly for backward compatibility**.
- In **modern JavaScript**, most errors from `eval()` are **SyntaxError** or **ReferenceError**, not EvalError.
- You can still **manually throw an EvalError** if needed for custom error handling.

---

### `AggregateError`

- `AggregateError` is a **built-in error type** that represents **multiple errors wrapped in a single error object**.
- Commonly used with **`Promise.any()`**, which rejects with an `AggregateError` if **all promises fail**.

**Syntax**

```js
new AggregateError(errors, message);
```

- `errors` → an iterable of errors
- `message` → optional descriptive string

**Examples**

```js
try {
  throw new AggregateError(
    [new Error("Error 1"), new Error("Error 2")],
    "Multiple errors occurred"
  );
} catch (e) {
  console.log(e.name); // "AggregateError"
  console.log(e.message); // "Multiple errors occurred"
  console.log(e.errors); // [Error: Error 1, Error: Error 2]
}
```

```js
const p1 = Promise.reject("Fail 1");
const p2 = Promise.reject("Fail 2");

Promise.any([p1, p2])
  .then((result) => console.log(result))
  .catch((e) => {
    console.log(e instanceof AggregateError); // true
    console.log(e.errors); // ["Fail 1", "Fail 2"]
  });
```

---

**Key Points**

- Aggregates **multiple errors into one object**.
- Useful for **parallel promise operations** where you want to handle **all failures at once**.
- Access individual errors via the `.errors` property.
