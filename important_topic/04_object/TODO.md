## 🧱 OBJECT MASTERY ROADMAP 

Here's a full roadmap to reach **Master Level** in JavaScript Objects:

---

### 🔹 1. **Object Basics (Solid Foundation)**

✅ Learn:

* Object literals `{ key: value }`
* Dot notation vs bracket notation
* Nested objects
* Property access, addition, deletion
* Shorthand properties (`{ name }` instead of `{ name: name }`)

🧠 Practice:

* Create product objects, user profiles, etc.
* Access deeply nested properties

```js
const user = {
  name: "Alice",
  age: 30,
  address: {
    city: "NY",
    zip: "10001",
  }
};
console.log(user.address.city);
```

---

### 🔹 2. **Object Methods**

✅ Learn:

* Adding functions inside objects
* `this` keyword inside methods
* `function` vs arrow function in object methods (very important)

🧠 Practice:

* Make an object with `start`, `stop`, `reset` methods (e.g., a stopwatch)

```js
const counter = {
  count: 0,
  increment() {
    this.count++;
  }
};
```

---

### 🔹 3. **Dynamic Property Keys & Computed Keys**

✅ Learn:

* How to use variables as property keys
* Bracket notation with dynamic keys
* Computed keys in object literals

```js
const key = "age";
const person = { [key]: 25 }; // { age: 25 }
```

---

### 🔹 4. **Object Destructuring**

✅ Learn:

* Destructuring values from objects
* Nested destructuring
* Renaming during destructuring
* Default values

🧠 Practice:

* Destructure complex API responses

```js
const { name, address: { city } } = user;
```

---

### 🔹 5. **Object Spread and Rest**

✅ Learn:

* Copying and merging objects with `...`
* Extracting remaining properties

```js
const user = { name: "Bob", age: 40, role: "admin" };
const { role, ...rest } = user; // rest = { name, age }
```

---

### 🔹 6. **Object Utility Methods**

✅ Learn and practice:

| Method                 | Purpose                 |
| ---------------------- | ----------------------- |
| `Object.keys()`        | Get all keys            |
| `Object.values()`      | Get all values          |
| `Object.entries()`     | Key-value pairs         |
| `Object.assign()`      | Merge objects           |
| `Object.fromEntries()` | Convert array to object |

🧠 Practice:

* Build a function that takes an object and converts keys to uppercase

---

### 🔹 7. **Object.freeze() & Object.seal()**

✅ Learn:

* Prevent modifications to objects
* When to use immutable objects

```js
const settings = Object.freeze({ darkMode: true });
settings.darkMode = false; // ❌ won't change
```

---

### 🔹 8. **Prototypes & Inheritance**

✅ Learn:

* How JavaScript uses **prototype chains**
* `__proto__` vs `prototype`
* Inheriting from objects
* Constructor functions and `new`

🧠 Practice:

* Create a `Car` constructor and inherit to `ElectricCar`

---

### 🔹 9. **Classes and OOP in JS (class syntax)**

✅ Learn:

* `class`, `constructor`, `super()`
* Method inheritance, static methods
* Private/protected fields (`#` syntax)

🧠 Practice:

* Model a real-world system: `User`, `Admin`, `Moderator`

```js
class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, ${this.name}`);
  }
}
```

---

### 🔹 10. **Object.create() and Custom Prototypes**

✅ Learn:

* Creating objects with custom prototypes
* Use cases for `Object.create(null)`

🧠 Practice:

* Build a prototype-based inheritance chain manually

---

### 🔹 11. **Deep vs Shallow Copy**

✅ Learn:

* Why copying objects is not always simple
* Use structuredClone(), lodash.cloneDeep, or recursive functions

---

### 🔹 12. **JSON and Object Conversion**

✅ Learn:

* `JSON.stringify()` and `JSON.parse()`
* Serialization and deserialization
* Handling circular references

🧠 Practice:

* Convert objects to JSON for storage or API use

---

### 🔹 13. **Advanced Patterns (optional but powerful)**

✅ Learn:

* Factory functions
* Mixins
* Singleton patterns
* Proxy and Reflect (meta-programming)

---

## 🧪 Bonus Projects to Cement Object Mastery

* 🧮 **Build a calculator object** with methods like `add`, `subtract`, `reset`
* ⏱️ **Create a Timer object** with `start()`, `pause()`, `reset()`
* 🛍️ **Shopping Cart object** — add, remove, update items
* 🧩 **Factory Pattern** for creating multiple types of users

---

## 🧠 Resources to Learn

* MDN Web Docs: [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
* Eloquent JavaScript (Chapter: Data Structures)
* You Don’t Know JS (Book series)
* Real-world coding problems on LeetCode & Codewars using objects

---
