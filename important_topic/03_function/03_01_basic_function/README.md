# Functions

## Why function?

- Code Reusability and Avoid Code Duplication
- Code Maintainability & Testing
- Code Organization

## Function Declarations

- A function declaration defines a named function that’s hoisted, meaning it's available before it's defined in the code
- Good for **top level utility/helper** functions

## Function Expressions

- A function expression is a function **assigned to a variable**. It can be **anonymous or named**, and it is **not hoisted**
- Use function expressions when assigning functions to **variables** or passing them as **arguments**

## Arrow Functions

- An arrow function is a shorter syntax for writing function expressions, introduced in ES6.
- Lexical `this`
- No `arguments` object. Use rest parameter.
- Cannot be used as constructors. Arrow functions cannot be used with new — they throw an error.
- Arrow functions are ideal for functional programming style (map, filter, reduce, etc.).

```js
const double = (x) => x * 2; // single parameter
const add = (a, b) => a + b; // multiple parameter
const sayHi = () => console.log("Hi"); // no parameter
const multiply = (a, b) => {
  // Block body (return needed)
  const result = a * b;
  return result;
};
const getUser = () => ({ name: "Alice", age: 30 }); // without (), JavaScript thinks {} is a function block and won't return the object
```

## Parameters and Return Value

- Default Parameters: Set default values to avoid `undefined`. Use for config options, **fallbacks** or **optional arguments**
- Rest Parameters: Perfect for Variadic functions
- Destructuring in Parameters: Helps with readability and avoiding argument order dependency

## IIFE () - Immediately Invoked Function Expression

- Executes immediately after creation.

```js
(function ($) {
  // Using jQuery safely within private scope
  $(document).ready(function () {
    console.log("DOM is ready using jQuery");
  });
})(jQuery);
```

- Here, jQuery is passed as $ to avoid conflicts if $ is used by another library globally

```js
(function (window, document) {
  const appName = "ScopedApp";
  console.log(`Initializing ${appName}`);

  window.addEventListener("load", function () {
    console.log("Page fully loaded");
  });
})(window, document); // Pass global objects as parameters
```

- Improves performance slightly because local variables are faster to access than globals.
- Isolates scope, ensuring no accidental overwriting of global properties
