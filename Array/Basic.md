# JavaScript Arrays

## 1. What is an Array?

In JavaScript, an **array** is a special type of object used to store **ordered collections** of values. Arrays allow you to group multiple values under a single variable and access them via **numeric indices**.

### Key Characteristics:

* Arrays can store **heterogeneous data types** (e.g., numbers, strings, objects, even other arrays).
* Elements are ordered and indexed starting at 0.
* Arrays are **dynamic**; their size can grow or shrink as needed.

---

## 2. Creating Arrays

You can create arrays in several ways:

### 2.1 Using Array Literals (Preferred)

```js
const fruits = ['apple', 'banana', 'cherry'];
```

### 2.2 Using the Array Constructor

```js
const numbers = new Array(1, 2, 3);
```

* If called with a single numeric argument, it creates an array of that length but empty slots:

```js
const emptySlots = new Array(3); // [ <3 empty items> ]
```

### 2.3 Using `Array.of()`

Creates an array from the arguments provided:

```js
const arr = Array.of(5); // [5]
```

---

## 3. Accessing and Modifying Array Elements

* Access elements by index (0-based):

```js
console.log(fruits[0]); // "apple"
```

* Modify elements by assigning a new value at an index:

```js
fruits[1] = 'blueberry'; // fruits is now ['apple', 'blueberry', 'cherry']
```

* Length property gives the number of elements:

```js
console.log(fruits.length); // 3
```

---

## 4. Array Properties and Methods

### 4.1 Important Properties

* `length`: Reflects the number of elements (including empty slots in sparse arrays).

### 4.2 Commonly Used Methods

| Method      | Description                                                             | Example                              |
| ----------- | ----------------------------------------------------------------------- | ------------------------------------ |
| `push()`    | Adds one or more elements to the end                                    | `arr.push(4)`                        |
| `pop()`     | Removes and returns the last element                                    | `arr.pop()`                          |
| `shift()`   | Removes and returns the first element                                   | `arr.shift()`                        |
| `unshift()` | Adds one or more elements to the beginning                              | `arr.unshift(0)`                     |
| `slice()`   | Returns a shallow copy of a portion of the array                        | `arr.slice(1, 3)`                    |
| `splice()`  | Adds/removes elements at any position                                   | `arr.splice(2, 1, 'new')`            |
| `forEach()` | Executes a callback for each element                                    | `arr.forEach(x => console.log(x))`   |
| `map()`     | Creates a new array with results of calling a function on every element | `arr.map(x => x * 2)`                |
| `filter()`  | Creates a new array with elements passing a test                        | `arr.filter(x => x > 2)`             |
| `reduce()`  | Reduces the array to a single value                                     | `arr.reduce((sum, x) => sum + x, 0)` |
| `find()`    | Returns first element matching a condition                              | `arr.find(x => x > 5)`               |
| `indexOf()` | Returns index of an element or -1 if not found                          | `arr.indexOf('apple')`               |

---

## 5. Arrays are Objects

* Arrays in JavaScript are a special kind of object.
* You can add custom properties to arrays:

```js
const arr = [1, 2, 3];
arr.customProp = 'Hello';
console.log(arr.customProp); // "Hello"
```

* But array methods and behavior are optimized for numeric indices.

---

## 6. Sparse Arrays and Holes

* JavaScript arrays can be **sparse** — some indices might be empty ("holes"):

```js
const sparse = [];
sparse[5] = 'hello'; // Indices 0 to 4 are empty slots
```

* Such holes behave differently in methods like `forEach()` (they skip holes).

---

## 7. Multidimensional Arrays

* Arrays can contain arrays as elements:

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix[1][2]); // 6
```

---

## 8. Array Iteration

* You can iterate arrays using loops:

```js
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

* Or using modern iteration constructs:

```js
for (const element of arr) {
  console.log(element);
}
```

* Or functional methods like `.forEach()`, `.map()`, etc.

---

## 9. Checking if a Variable is an Array

* Since arrays are objects, `typeof` returns `'object'`. To check for arrays use:

```js
Array.isArray(arr); // true or false
```

---

## 10. Performance and Best Practices

* Use array literals whenever possible for clarity.
* Avoid manually changing the length property unless intentional.
* Use array methods to maintain immutability (e.g., use `map`, `filter` rather than modifying original arrays).
* Be mindful of sparse arrays as some methods skip holes.
* Prefer `for...of` or array iteration methods for readable code.

---

## Summary

| Aspect         | Description                                                    |
| -------------- | -------------------------------------------------------------- |
| Type           | Special kind of object                                         |
| Indexing       | Zero-based                                                     |
| Mutability     | Mutable; elements can be changed, added, or removed            |
| Data Types     | Can hold mixed types                                           |
| Common Methods | push, pop, shift, unshift, slice, splice, map, filter, reduce  |
| Array Check    | Use `Array.isArray()`                                          |
| Use Case       | Ordered collections with fast indexed access and flexible size |

---
