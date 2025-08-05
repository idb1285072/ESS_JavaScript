## 🔹 1. **Adding/Removing Elements**

| Method      | Description                          |
| ----------- | ------------------------------------ |
| `push()`    | Add to end                           |
| `pop()`     | Remove from end                      |
| `unshift()` | Add to start                         |
| `shift()`   | Remove from start                    |
| `splice()`  | Add/remove elements at any index     |
| `slice()`   | Copy part of array (non-destructive) |

```js
let arr = [1, 2, 3];
arr.push(4);          // [1, 2, 3, 4]
arr.pop();            // [1, 2, 3]
arr.shift();          // [2, 3]
arr.unshift(0);       // [0, 2, 3]
arr.splice(1, 1, 9);  // [0, 9, 3]
arr.slice(1, 3);      // [9, 3]
```

---

## 🔹 2. **Iteration & Transformation**

| Method      | Description                               |
| ----------- | ----------------------------------------- |
| `forEach()` | Run a function on each element            |
| `map()`     | Create new array by transforming elements |
| `filter()`  | Create new array with condition           |
| `reduce()`  | Reduce array to single value              |

```js
[1, 2, 3].forEach(x => console.log(x));

const doubled = [1, 2, 3].map(x => x * 2);      // [2, 4, 6]
const even = [1, 2, 3, 4].filter(x => x % 2 === 0); // [2, 4]
const sum = [1, 2, 3].reduce((a, b) => a + b, 0);   // 6
```

---

## 🔹 3. **Searching**

| Method          | Description                          |
| --------------- | ------------------------------------ |
| `find()`        | First element that matches condition |
| `findIndex()`   | Index of first match                 |
| `includes()`    | Checks if value is present           |
| `indexOf()`     | First index of a value               |
| `lastIndexOf()` | Last index of a value                |
| `some()`        | Returns `true` if **any** match      |
| `every()`       | Returns `true` if **all** match      |

```js
const arr = [5, 12, 8, 130];

arr.find(x => x > 10);       // 12
arr.findIndex(x => x > 100); // 3
arr.includes(8);             // true
arr.some(x => x > 100);      // true
arr.every(x => x < 200);     // true
```

---

## 🔹 4. **Sorting & Reversing**

| Method      | Description                                |
| ----------- | ------------------------------------------ |
| `sort()`    | Sorts array in-place (can take a function) |
| `reverse()` | Reverses the array in-place                |

```js
[3, 1, 4].sort();           // [1, 3, 4]
['b', 'a'].sort();          // ['a', 'b']
[1, 2, 3].reverse();        // [3, 2, 1]
```

---

## 🔹 5. **Combining & Flattening**

| Method     | Description             |
| ---------- | ----------------------- |
| `concat()` | Combine arrays          |
| `flat()`   | Flatten nested arrays   |
| `join()`   | Convert array to string |

```js
[1, 2].concat([3, 4]);           // [1, 2, 3, 4]
[1, [2, [3]]].flat(2);           // [1, 2, 3]
['a', 'b', 'c'].join('-');       // "a-b-c"
```

---

## 🔹 6. **Other Useful Methods**

| Method            | Description                           |
| ----------------- | ------------------------------------- |
| `Array.isArray()` | Check if value is an array            |
| `fill()`          | Fill with static value                |
| `from()`          | Convert iterable to array             |
| `at()`            | Get item at index (supports negative) |

```js
Array.isArray([1, 2]);     // true
[1, 2, 3].fill(0);         // [0, 0, 0]
Array.from('abc');         // ['a', 'b', 'c']
[10, 20, 30].at(-1);       // 30
```

---
