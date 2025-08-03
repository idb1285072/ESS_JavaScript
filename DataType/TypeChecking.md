# ✅ **Type Checking in JavaScript**

## 🔹 1. `typeof` Operator

- Return **string**
- Syntax: `typeof operand`

```javascript
console.log(typeof 42); // number
console.log(typeof "hello"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object ❗
console.log(typeof Symbol()) // symbol
console.log(typeof 45434343433534353n); // bigint
console.log(typeof {}); // object
console.log(typeof []); // object ❗
console.log(typeof function () {}); // function ✅
```

> ⚠️ **Quirk:** `typeof null` returns `"object"` (legacy bug in JavaScript).

---

## 🔹 2. `instanceof` Operator

- Return `true` or `false`
- Syntax `object instanceof Constructor`

### ✅ Example:

```javascript
console.log([] instanceof Array); // true
console.log({} instanceof Object); // true
console.log(new Date() instanceof Date); // true
```

> ✅ Works well for distinguishing custom or built-in objects.
> ⚠️ Doesn’t work with primitives (e.g., `"hello" instanceof String` → false).

---

## 🔹 3. `Array.isArray()`

```javascript
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("text")); // false
```

---

## 🔹 4. `Object.prototype.toString.call(value)`

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

> ✅ Highly accurate and preferred for deep type checks (used in libraries like Lodash).

---

## 🔹 5. Constructor Property

```javascript
console.log((123).constructor === Number); // true
console.log("a".constructor === String); // true
console.log([].constructor === Array); // true
```

> ⚠️ Can be overridden or unreliable in edge cases (e.g., after object cloning).

---

## 🔹 6. Custom Type Checking Functions

You can define utility functions for clarity and reuse:

```javascript
function isString(val) {
  return typeof val === "string";
}

function isPlainObject(val) {
  return Object.prototype.toString.call(val) === "[object Object]";
}
```
