# JavaScript Array Methods

## 1. Mutator Methods (Modify the Original Array)

These methods change the array itself.

### 1.1 `push(...elements)`

- Adds one or more elements to the **end** of the array.
- Returns the new length.

```js
const arr = [1, 2];
const newLength = arr.push(3, 4); // arr = [1, 2, 3, 4]
console.log(newLength); // 4
```

---

### 1.2 `pop()`

- Removes the **last** element.
- Returns the removed element.

```js
const arr = [1, 2, 3];
const last = arr.pop(); // arr = [1, 2]
console.log(last); // 3
```

---

### 1.3 `shift()`

- Removes the **first** element.
- Returns the removed element.

```js
const arr = [1, 2, 3];
const first = arr.shift(); // arr = [2, 3]
console.log(first); // 1
```

---

### 1.4 `unshift(...elements)`

- Adds one or more elements to the **beginning**.
- Returns the new length.

```js
const arr = [2, 3];
const newLength = arr.unshift(0, 1); // arr = [0, 1, 2, 3]
console.log(newLength); // 4
```

---

### 1.5 `splice(start, deleteCount, ...items)`

- Changes array by **removing** and/or **inserting** elements at `start`.
- Returns an array of removed elements.

```js
const arr = ["a", "b", "c", "d"];
const removed = arr.splice(1, 2, "x", "y");
// arr = ['a', 'x', 'y', 'd']
// removed = ['b', 'c']
```

---

### 1.6 `reverse()`

- Reverses the array **in place**.
- Returns the reversed array.

```js
const arr = [1, 2, 3];
arr.reverse(); // [3, 2, 1]
```

---

### 1.7 `sort(compareFunction?)`

- Sorts array **in place**.
- By default, sorts elements as strings in ascending Unicode order.
- Can pass a `compareFunction` to customize sorting.

```js
const arr = [3, 1, 2];
arr.sort(); // [1, 2, 3] (default)
arr.sort((a, b) => b - a); // [3, 2, 1] (descending numeric sort)
```

---

## 2. Accessor Methods (Do not modify original array)

These return new values/arrays without changing the original.

### 2.1 `concat(...arraysOrValues)`

- Returns a new array by concatenating the original with other arrays or values.

```js
const arr1 = [1, 2];
const arr2 = [3, 4];
const result = arr1.concat(arr2, 5); // [1, 2, 3, 4, 5]
```

---

### 2.2 `slice(begin?, end?)`

- Returns a **shallow copy** of a portion of the array.
- Does not modify the original.
- `begin` is inclusive, `end` is exclusive.

```js
const arr = ["a", "b", "c", "d"];
const part = arr.slice(1, 3); // ['b', 'c']
```

---

### 2.3 `includes(value, fromIndex?)`

- Returns `true` if the array contains `value`.
- `fromIndex` optional starting point.

```js
const arr = [1, 2, 3];
arr.includes(2); // true
arr.includes(4); // false
```

---

### 2.4 `indexOf(searchElement, fromIndex?)`

- Returns first index of `searchElement` or -1 if not found.

```js
const arr = ["a", "b", "a"];
arr.indexOf("a"); // 0
arr.indexOf("b", 1); // 1
```

---

### 2.5 `lastIndexOf(searchElement, fromIndex?)`

- Returns last index of `searchElement` or -1 if not found.

```js
const arr = ["a", "b", "a"];
arr.lastIndexOf("a"); // 2
```

---

## 3. Iteration Methods (Do not modify original array)

Used to process or transform array elements.

### 3.1 `forEach(callback(currentValue, index, array))`

- Executes a function on each element.
- Does **not** return anything.
- Skips holes in sparse arrays.

```js
const arr = [1, 2, 3];
arr.forEach((val, idx) => {
  console.log(idx, val);
});
```

---

### 3.2 `map(callback)`

- Returns a **new array** where each element is the result of the callback.
- Original array remains unchanged.

```js
const arr = [1, 2, 3];
const doubled = arr.map((x) => x * 2); // [2, 4, 6]
```

---

### 3.3 `filter(callback)`

- Returns a **new array** with only elements that pass the test (callback returns true).

```js
const arr = [1, 2, 3, 4];
const evens = arr.filter((x) => x % 2 === 0); // [2, 4]
```

---

### 3.4 `reduce(callback(accumulator, currentValue, index, array), initialValue?)`

- Reduces array to a **single value**.
- `callback` takes accumulator and current element.
- `initialValue` optional; if omitted, first element is used as accumulator.

```js
const arr = [1, 2, 3, 4];
const sum = arr.reduce((acc, val) => acc + val, 0); // 10
```

---

### 3.5 `reduceRight(callback, initialValue?)`

- Same as `reduce` but processes array from **right to left**.

---

### 3.6 `find(callback)`

- Returns **first element** that satisfies the condition, else `undefined`.

```js
const arr = [5, 12, 8, 130, 44];
const found = arr.find((x) => x > 10); // 12
```

---

### 3.7 `findIndex(callback)`

- Returns **index** of first element satisfying condition, else -1.

---

### 3.8 `some(callback)`

- Returns `true` if **any** element satisfies condition.

```js
const arr = [1, 2, 3];
arr.some((x) => x > 2); // true
```

---

### 3.9 `every(callback)`

- Returns `true` if **all** elements satisfy condition.

```js
const arr = [2, 4, 6];
arr.every((x) => x % 2 === 0); // true
```

---

## 4. Other Useful Methods

### 4.1 `join(separator?)`

- Joins all elements into a string separated by `separator` (default `','`).

```js
const arr = ["a", "b", "c"];
const str = arr.join("-"); // "a-b-c"
```

---

### 4.2 `flat(depth = 1)`

- Flattens nested arrays up to `depth` levels.

```js
const arr = [1, [2, [3, 4]]];
arr.flat(); // [1, 2, [3, 4]]
arr.flat(2); // [1, 2, 3, 4]
```

---

### 4.3 `flatMap(callback)`

- Maps each element and flattens the result by one level.

```js
const arr = [1, 2, 3];
arr.flatMap((x) => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
```

---

## Summary Table

| Method        | Type      | Modifies Array? | Returns                   | Description                         |
| ------------- | --------- | --------------- | ------------------------- | ----------------------------------- |
| `push`        | Mutator   | Yes             | New length                | Add elements to end                 |
| `pop`         | Mutator   | Yes             | Removed element           | Remove last element                 |
| `shift`       | Mutator   | Yes             | Removed element           | Remove first element                |
| `unshift`     | Mutator   | Yes             | New length                | Add elements to start               |
| `splice`      | Mutator   | Yes             | Array of removed elements | Insert/remove at arbitrary position |
| `sort`        | Mutator   | Yes             | Sorted array              | Sort elements                       |
| `reverse`     | Mutator   | Yes             | Reversed array            | Reverse elements                    |
| `concat`      | Accessor  | No              | New array                 | Concatenate arrays                  |
| `slice`       | Accessor  | No              | New array                 | Extract portion                     |
| `includes`    | Accessor  | No              | Boolean                   | Check existence                     |
| `indexOf`     | Accessor  | No              | Number                    | Find index                          |
| `lastIndexOf` | Accessor  | No              | Number                    | Find last index                     |
| `forEach`     | Iteration | No              | `undefined`               | Execute function                    |
| `map`         | Iteration | No              | New array                 | Transform elements                  |
| `filter`      | Iteration | No              | New array                 | Filter elements                     |
| `reduce`      | Iteration | No              | Single value              | Reduce to one value                 |
| `reduceRight` | Iteration | No              | Single value              | Reduce right-to-left                |
| `find`        | Iteration | No              | Element or undefined      | Find element                        |
| `findIndex`   | Iteration | No              | Index or -1               | Find element index                  |
| `some`        | Iteration | No              | Boolean                   | At least one matches                |
| `every`       | Iteration | No              | Boolean                   | All elements match                  |
| `join`        | Accessor  | No              | String                    | Join into string                    |
| `flat`        | Accessor  | No              | New flattened array       | Flatten nested arrays               |
| `flatMap`     | Iteration | No              | New flattened array       | Map + flatten by 1 level            |

---
