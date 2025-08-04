# Object in JavaScript
KEYS in JavaScript Objects
- All keys in objects are strings (or symbols).
- If you use anything else (like a number or object), JavaScript automatically converts it to a string.

```js
const obj = {
  name: "Alice",   // key is 'name'
  42: "Answer",    // key becomes '42'
  true: "Yes",     // key becomes 'true'
};

const sym = Symbol("id");
const obj = {
  [sym]: 123
};
console.log(obj[sym]); // 123
```