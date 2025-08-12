Scope in JavaScript
- Block scope
- Function scope
- Global scope

---

### Block Scope
- ES6
- `let`, `const` are block scope
- Variables declared inside a `{}` block cannot be accessed from outside the block

```js
{
  let x = 2;
  var y = 3;
}
// x cannot be accessed here
// y can be accessed here
```

---

### Function Scope
- `let`, `const`, `var` are behaved same.
- Variables defined inside a function are not accessible (visible) from outside the function.

---

### Global Scope
- In "Strict Mode", undeclared variables are not automatically global.
- In HTML, the global scope is the window object.
- Global variables defined with the var keyword belong to the window object
- Global variables defined with the let keyword do not belong to the window object

```js
var userName = "Murad Hossen";
console.log(window.userName);
```