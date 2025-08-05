## 🔷 What is a `Map` in JavaScript?

A **`Map`** is a built-in JavaScript object that stores **key-value pairs** and remembers the **original insertion order** of the keys. Unlike plain objects `{}`, a `Map` allows:

* **any value** (objects, functions, primitives) as keys.
* better performance when frequently adding/removing key-value pairs.
* built-in iterable methods like `.forEach()`, `.keys()`, `.values()`, and `.entries()`.

---

## 🔷 Syntax

```javascript
const myMap = new Map();
```

---

## 🔷 Basic Operations

| Operation  | Method            | Example           |
| ---------- | ----------------- | ----------------- |
| Add entry  | `set(key, value)` | `map.set('a', 1)` |
| Get value  | `get(key)`        | `map.get('a')`    |
| Check key  | `has(key)`        | `map.has('a')`    |
| Remove key | `delete(key)`     | `map.delete('a')` |
| Clear all  | `clear()`         | `map.clear()`     |
| Size       | `size` property   | `map.size`        |

---

## 🔷 Example: Basic Usage

```javascript
const userRoles = new Map();

userRoles.set('Alice', 'Admin');
userRoles.set('Bob', 'Editor');
userRoles.set('Charlie', 'Viewer');

console.log(userRoles.get('Bob'));       // Editor
console.log(userRoles.has('Charlie'));   // true
console.log(userRoles.size);             // 3
```

---

## 🔷 Keys Can Be Any Type

```javascript
const objKey = { id: 1 };
const funcKey = function() {};

const map = new Map();
map.set(objKey, 'Object as key');
map.set(funcKey, 'Function as key');
map.set(123, 'Number key');

console.log(map.get(objKey));  // Object as key
console.log(map.get(funcKey)); // Function as key
```

💡 Objects and functions are **preserved as references**, not stringified like in plain objects.

---

## 🔷 Iterating a Map

```javascript
const fruits = new Map([
  ['apple', 10],
  ['banana', 20],
  ['cherry', 30]
]);

// for...of
for (const [key, value] of fruits) {
  console.log(`${key}: ${value}`);
}

// forEach
fruits.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});
```

---

## 🔷 Converting Between Objects and Maps

### Object → Map

```javascript
const obj = { a: 1, b: 2 };
const map = new Map(Object.entries(obj));
```

### Map → Object

```javascript
const objFromMap = Object.fromEntries(map);
```

---

## 🔷 Map vs Object — Comparison

| Feature     | `Map`                 | `Object`                    |
| ----------- | --------------------- | --------------------------- |
| Key types   | Any (objects, etc.)   | Strings, Symbols            |
| Key order   | Insertion order       | Unordered (until ES2015+)   |
| Iterable    | ✅ Yes                 | ❌ No (use `Object.entries`) |
| Size        | `.size` property      | `Object.keys().length`      |
| Performance | Better for large sets | Good for small sets         |
| Use case    | Key-value collections | Structured data             |

---

## 🔷 Real-World Use Case

### 🧠 Example: Caching API responses by request URL

```javascript
const apiCache = new Map();

async function fetchData(url) {
  if (apiCache.has(url)) {
    return apiCache.get(url); // Use cached version
  }
  const response = await fetch(url);
  const data = await response.json();
  apiCache.set(url, data); // Cache it
  return data;
}
```

---

## 🔚 Summary

* `Map` is a flexible, efficient key-value store.
* Keys can be **any type**.
* Maintains **insertion order**.
* Offers **built-in iteration**.
* Great for **lookups, caches, dictionaries**, etc.

---

