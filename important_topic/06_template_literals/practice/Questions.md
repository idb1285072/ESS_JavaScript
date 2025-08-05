## 🧩 **Exercise 1: Basic Interpolation**

### ✅ Task:

Fill in the template literal to greet the user.

```js
const name = "Luna";

// TODO: Use template literal to output: Hello, Luna!
const greeting = /* your code here */;
console.log(greeting);
```

---

## 🧩 **Exercise 2: Inline Expressions**

### ✅ Task:

Use template literals to calculate and display the sum of `a` and `b`.

```js
const a = 7;
const b = 3;

// Expected: "7 + 3 = 10"
const result = /* your code here */;
console.log(result);
```

---

## 🧩 **Exercise 3: Multiline Strings**

### ✅ Task:

Create a string that prints a shopping list on multiple lines.

```js
// Expected output:
// Shopping List:
// - Milk
// - Bread
// - Eggs

const shoppingList = /* your code here */;
console.log(shoppingList);
```

---

## 🧩 **Exercise 4: Tagged Template – Custom Formatter**

### ✅ Task:

Write a tag function `emphasize` that uppercases all interpolated values.

```js
function emphasize(strings, ...values) {
  // TODO: Return a string with all values in UPPERCASE
}

// Should output: "Warning: SYSTEM OVERLOAD at 98%!"
const level = "system overload";
const percent = 98;

const message = emphasize`Warning: ${level} at ${percent}%!`;
console.log(message);
```

🧠 **Hint**: Use `values.map(v => String(v).toUpperCase())` and `strings.reduce(...)`.

---

## 🧩 **Exercise 5: Raw Strings**

### ✅ Task:

Print the raw content of a string containing escape sequences.

```js
function showRaw(strings) {
  console.log(strings.raw[0]);
}

// Expected to print: Hello\nWorld
showRaw`Hello\nWorld`;
```

---

## 🧩 **Exercise 6: Safe HTML Output (XSS Prevention)**

### ✅ Task:

Create a tagged template `safeHTML` that escapes HTML special characters.

```js
function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function safeHTML(strings, ...values) {
  return strings.reduce((acc, str, i) => {
    const val = values[i] !== undefined ? escapeHTML(String(values[i])) : "";
    return acc + str + val;
  }, "");
}

const userInput = `<script>alert('XSS')</script>`;
const html = safeHTML`<div>${userInput}</div>`;
console.log(html);
// Should print: <div>&lt;script&gt;alert(&#39;XSS&#39;)&lt;/script&gt;</div>
```

---
