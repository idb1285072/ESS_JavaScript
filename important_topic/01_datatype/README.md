# Data Types in JavaScript

- JavaScript is a dynamically typed Language.
- Data types are broadly categorized into **primitive** and **non-primitive** types.
- Primitive types are: String, Number, Bigint, Boolean, Undefined, Null, Symbol
- Non-primitive types are: Built-in Object (Array, Object, Function), User Defined Object

---

## 1. **Primitive Data Types**

- Primitive Data types

  - Primitive types are **value types** — the actual value is stored in the variable.
  - They are **immutable** and stored in the **stack** memory

  ```js
  let a = 10; // 'a' holds the value 10
  let b = a; // 'b' gets a copy of the value in 'a'

  a = 20; // Changing 'a' does not affect 'b'

  console.log(a); // 20
  console.log(b); // 10
  ```

- **String**:

  - Represents a sequence of characters (e.g., `'Hello'`, `"World"`).
  - Enclosed in single, double, or backticks (template literals).
  - Immutable — once created, they can't be changed.

  ```javascript
  let userName = "Murad";
  let singleQuote = "Hello World";
  let doubleQuote = "Hello World";
  let templateLiteral = `Hello, ${userName}`;
  ```

- **Number**:

  - Represents both integer and floating-point numbers (e.g., `42`, `3.14`).
  - JavaScript does not differentiate between integers and floats.
  - Special values: `NaN` (Not a Number) and `Infinity`/`-Infinity`.
  - Javascript numbers are always one type: double (64-bit floating point).

  ```javascript
  let age = 25; // Integer
  let pi = 3.14; // Floating-point number
  let negativeNumber = -7;
  let c = 3e8; // Exponential Notation
  ```

- **Boolean**:

  - Represents a logical value: `true` or `false`.
  - Often used in conditions and loops.

  ```javascript
  let isActive = true;
  let hasValue = false;
  ```

- **Undefined**:

  - Represents a variable that has been declared but not assigned a value.

  ```javascript
  let uninitialized; // Undefined because it's not assigned yet
  console.log(uninitialized); // undefined
  ```

- **Null**:

  - Represents the intentional absence of any object value.
  - `null` is not the same as `undefined` and is explicitly assigned.
  - typeof null is object

  ```javascript
  let obj = null; // Null value
  let emptyValue = null;
  ```

- **Symbol** (ES6+):

  - Represents a unique and immutable value used for object property keys.
  - Often used to create unique identifiers for object properties.

  ```javascript
  let uniqueID = Symbol("id"); // Symbol
  let sym1 = Symbol("id");
  let sym2 = Symbol("id");
  console.log(sym1 === sym2); // false, each symbol is unique
  ```

- **BigInt** (ES11+):

  - Represents large integers beyond the range of the `Number` type.
  - Useful for situations where precision is required for very large integers.

  ```javascript
  let bigNum = BigInt(123456789012345678901234567890);
  ```

---

## 2. **Non-Primitive Data Types**

- Non-primitive types
  - Non-primitive types are **reference types** - the reference is stored in the variable not the actual data.
  - They are **mutable** and stored in the **heap** memory.
- **Object**:

  - Represents a collection of key-value pairs (properties).
  - Can hold multiple values of different data types.
  - Objects are mutable, meaning their properties can be changed.

  ```javascript
  let person = { name: "Alice", age: 30 }; // Object with properties
  person.age = 31; // Modify object properties
  ```

- **Array** (A type of object):

  - Represents a list-like collection of values, indexed by integers (0, 1, 2, …).
  - Can hold any type of values, including other arrays or objects.
  - Arrays are ordered and have methods like `.push()`, `.pop()`, `.map()`, etc.

  ```javascript
  let numbers = [1, 2, 3, 4]; // Array of numbers
  let mixed = [42, "Hello", true]; // Mixed data type array
  ```

- **Function** (A type of object):

  - Represents a callable object that can be invoked to execute a block of code.
  - Functions are first-class objects in JavaScript, meaning they can be passed around as variables, returned from other functions, etc.

  ```javascript
  function greet() {
    console.log("Hello World");
  }
  greet(); // Calling the function
  ```

---

## 3. **Type Conversion**

JavaScript is **loosely typed**, meaning you can convert between different types implicitly (type coercion) or explicitly (via functions).

1. **Implicit Conversion** (Type Coercion)
2. **Explicit Conversion** (Manual)

### 1. Implicit Conversion (Type Coercion)

JavaScript **automatically converts types** when needed, especially in expressions.

#### Numbers + Strings

```javascript
"5" + 2; // '52'  (Number → String)
"5" - 2; // 3     (String → Number)
"5" * "2"; // 10    (String → Number)
```

#### Boolean Conversion

```javascript
true + 1; // 2
false + 1; // 1
"5" == 5; // true   (Loose equality uses coercion)
0 == false; // true
null == undefined; // true
```

#### Problems with Implicit Conversion:

- Can be **unpredictable** and cause **bugs**
- Prefer **strict comparison** (`===`) to avoid coercion

---

### 2. Explicit Conversion (Manual Type Casting)

You **manually convert** values using JavaScript global functions or operators.

#### To **String**

| Method           | Example            | Result  |
| ---------------- | ------------------ | ------- |
| `String(value)`  | `String(123)`      | `'123'` |
| `.toString()`    | `(123).toString()` | `'123'` |
| Template Literal | `` `${123}` ``     | `'123'` |

```javascript
String(true); // 'true'
(42).toString(); // '42'
`${null}`; // 'null'
```

#### To **Number**

| Method             | Example              | Result |
| ------------------ | -------------------- | ------ |
| `Number(value)`    | `Number("123")`      | `123`  |
| Unary `+` operator | `+"456"`             | `456`  |
| `parseInt()`       | `parseInt("42px")`   | `42`   |
| `parseFloat()`     | `parseFloat("3.14")` | `3.14` |

```javascript
Number(true); // 1
Number(false); // 0
Number("abc"); // NaN
parseInt("100abc"); // 100
parseFloat("3.14px"); // 3.14
+"10" + 5; // 15
```

---

#### To **Boolean**

| Method           | Example      | Result |
| ---------------- | ------------ | ------ |
| `Boolean(value)` | `Boolean(1)` | `true` |
| Double `!!`      | `!!"text"`   | `true` |

#### Truthy Values:

Everything except: `false`, `0`, `-0`, `""`, `null`, `undefined`, `NaN`

```javascript
Boolean("Hello"); // true
Boolean(""); // false
!!123; // true
!!null; // false
```

#### Type Conversion Table

| Value        | `Number()` | `String()`          | `Boolean()` |
| ------------ | ---------- | ------------------- | ----------- |
| `undefined`  | `NaN`      | `'undefined'`       | `false`     |
| `null`       | `0`        | `'null'`            | `false`     |
| `true`       | `1`        | `'true'`            | `true`      |
| `false`      | `0`        | `'false'`           | `false`     |
| `''` (empty) | `0`        | `''`                | `false`     |
| `'123'`      | `123`      | `'123'`             | `true`      |
| `'abc'`      | `NaN`      | `'abc'`             | `true`      |
| `[]`         | `0`        | `''`                | `true`      |
| `[123]`      | `123`      | `'123'`             | `true`      |
| `{}`         | `NaN`      | `'[object Object]'` | `true`      |

#### Best Practices

- Use **strict comparison (`===`)** to avoid implicit coercion.
- Use **explicit conversion** to make code predictable.
- Watch out for `null`, `undefined`, `NaN` — they often behave unexpectedly.

#### Summary

| Conversion Type | Method                              | Best For                |
| --------------- | ----------------------------------- | ----------------------- |
| Implicit        | Automatic (e.g., `'5' - 2`)         | Short expressions       |
| Explicit        | `String()`, `Number()`, `Boolean()` | Clarity and reliability |
| Reliable Checks | Use `===` instead of `==`           | Preventing bugs         |

---

## 4. **Dynamic Typing**

Since JavaScript is **dynamically typed**, variables are not tied to a specific type, and their type can change during execution.

```javascript
let x; // undefined
x = 42; // Number
x = "Hello"; // Now x is a string
```

## 5. **Reference vs Value Types**

```javascript
// Example of value type (primitives)
let a = 10;
let b = a; // b gets a copy of a's value
a = 20;
console.log(a, b); // Output: 20 10

// Example of reference type (objects)
let obj1 = { name: "Alice" };
let obj2 = obj1; // obj2 is a reference to obj1
obj1.name = "Bob";
console.log(obj1.name, obj2.name); // Output: Bob Bob
```

---

## 6. **Type Checking**

By typeof, instanceof operator and isArray() method for Array

### `typeof` Operator

- Return **string**
- Syntax: `typeof operand`

```javascript
console.log(typeof 42); // number
console.log(typeof "hello"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof Symbol()) // symbol
console.log(typeof 45434343433534353n); // bigint
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function () {}); // function
```

> **Quirk:** `typeof null` returns `"object"` (legacy bug in JavaScript).

---

### `instanceof` Operator

- Return `true` or `false`
- Syntax `object instanceof Constructor`

```javascript
console.log([] instanceof Array); // true
console.log({} instanceof Object); // true
console.log(new Date() instanceof Date); // true
```

> Works well for distinguishing custom or built-in objects.
> Doesn’t work with primitives (e.g., `"hello" instanceof String` → false).

---

### `Array.isArray()`

```javascript
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("text")); // false
```

---

### `Object.prototype.toString.call(value)`

- Gives a **precise internal `[[Class]]` tag** of the object or value.
- Syntax: `Object.prototype.toString.call(value)`

```js
console.log(Object.prototype.toString.call([])); // [object Array]
console.log(Object.prototype.toString.call({})); // [object Object]
console.log(Object.prototype.toString.call(null)); // [object Null]
console.log(Object.prototype.toString.call(undefined)); // [object Undefined]
console.log(Object.prototype.toString.call(123)); // [object Number]
console.log(Object.prototype.toString.call(true)); // [object Boolean]
console.log(Object.prototype.toString.call(new Date())); // [object Date]
```

> Highly accurate and preferred for deep type checks (used in libraries like Lodash).

---

### Constructor Property

```javascript
console.log((123).constructor === Number); // true
console.log("a".constructor === String); // true
console.log([].constructor === Array); // true
```

> Can be overridden or unreliable in edge cases (e.g., after object cloning).

---

### Custom Type Checking Functions

You can define utility functions for clarity and reuse:

```javascript
function isString(val) {
  return typeof val === "string";
}

function isPlainObject(val) {
  return Object.prototype.toString.call(val) === "[object Object]";
}
```

---

## Data Types

- Primitive
  - String, Number, BigInt, Symbol, Boolean, null, undefined
  - Value Type
  - Immutable
  - Stack
- Non-primitive
  - Built-in Object (Array, function, Object), User Defined Object
  - Reference Type
  - Mutable
  - Heap (store reference in stack and actual data in heap)
- type conversion
- Dynamic Typed
- Value type vs Reference type
- Type checking
