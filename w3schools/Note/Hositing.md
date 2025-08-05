- Hoisting is JavaScript's default behavior of moving declarations to the top.
- In JavaScript, a variable can be used before it has been declared.
- JavaScript in strict mode does not allow variables to be used if they are not declared.
- Variables defined with `let` and `const` are hoisted to the top of the block, but not initialized.


```js
x = 5;
console.log(x, y);
var x;
var y;
```


```js
userName = "Murad"
let userName; // ReferenceError

pi = 3.141596;
const pi; // SyntaxError
```