# Arrow Functions in JavaScript

### Syntax

```js
const func = (param1, param2) => expression;
```

- If only one parameter, parentheses are optional.
- If no parameters, use empty parentheses `()`.
- If function body is a single expression, it implicitly returns that value.
- For multiple statements, use braces `{}` and explicit `return`.

### Examples

```js
// No parameters
const greet = () => "Hello";

// Single parameter (no parentheses needed)
const square = x => x * x;

// Multiple parameters
const sum = (a, b) => a + b;

// Multiple statements (requires braces and explicit return)
const multiply = (a, b) => {
  const result = a * b;
  return result;
};
```

---

### Key Characteristics

- **No own `this`**: `this` is lexically inherited from the surrounding scope.
- **No `arguments` object**: Use rest parameters instead (`...args`).
- Cannot be used as constructors (`new` will throw error).
- Cannot use `yield` inside arrow functions (no generators).

```js
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // `this` refers to Person instance due to lexical binding
    console.log(this.age);
  }, 1000);
}
const p = new Person();
```

### Rest Parameters with Arrow Functions

```js
const sumAll = (...nums) => nums.reduce((acc, n) => acc + n, 0);
console.log(sumAll(1, 2, 3, 4)); // 10
```
