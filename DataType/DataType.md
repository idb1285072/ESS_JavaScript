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

## 3. **Type Conversion**

JavaScript is loosely typed, meaning you can convert between different types implicitly (type coercion) or explicitly (via functions).

- **Implicit Coercion**:

  - JavaScript automatically converts one type to another when needed, such as adding a string to a number or when doing comparisons.

  ```javascript
  let result = "5" + 5; // "55" (string concatenation)
  let sum = "5" - 3; // 2 (numeric subtraction)

  let display = "The sum is: " + 5 + 9;
  let total = 5 + 8 + "5";


  ```

- **Explicit Conversion**:

  - You can convert between types using functions like `String()`, `Number()`, `Boolean()`, etc.

  ```javascript
  let num = Number("123"); // Converts string to number
  let str = String(123); // Converts number to string
  let bool = Boolean(0); // Converts 0 to false
  ```

## 4. **Dynamic Typing**

Since JavaScript is dynamically typed, variables are not tied to a specific type, and their type can change during execution.

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
- type checking