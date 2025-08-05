# Template Literal

## Why Template Literal?

- Dynamic HTML or Text Templates
- More readable code
- Easier String interpolation
- Multi-line strings

## Syntax

```js
const name = "Alice";
const greeting = `Hello, ${name}!`; // → "Hello, Alice!"
```

- Use backticks `` ` ``, not quotes.
- Use `${expression}` to interpolate variables or expressions.

## Expression Interpolation

```js
const a = 5;
const b = 10;
console.log(`Sum: ${a + b}`); // → "Sum: 15"
```

- You can use any JS expression inside `${...}` including:

  - Function calls
  - Ternary expressions
  - Object/array access
  - Template literals themselves (nested)

## Multiline Strings

```js
const multiline = `
Line 1
Line 2
Line 3
`;
```

- No need for `\n` or string concatenation with `+`.

---

## Tagged Templates

A Tagged Template Literal is a special form of template literal where you can call a function (called a tag) on a template literal.

```js
function tag(strings, ...values) {
  console.log(strings); // Array of string literals (fixed value)
  console.log(values); // Array of interpolated values (dynamic value)
  return "Processed output";
}

const result = tag`Hello ${name}, today is ${new Date().toDateString()}.`;
```

- Custom string formatting
- Escaping unsafe HTML (auto-escape user input)
- Useful for **security**
- CSS-in-JS libraries (Styled-components in React)
- Can be used for **custom DSLs** (Domain-Specific Languages)
- Markdown or custom templating (Parse text to generate rich content)

---

## Escaping and Raw Strings

```js
const escaped = `\n\t\"Hello\"`; // includes escaped characters

// Tagged templates with raw strings
function rawTag(strings) {
  console.log(strings.raw); // Raw string content
}

rawTag`Line 1\nLine 2`; // raw → ["Line 1\\nLine 2"]
```

- `.raw` gives you the original text including backslashes.

---

## Use Cases to Practice

- **Dynamic HTML generation**
- **Styled Components (React)**
- **SQL query builders (e.g., sql-template-strings)**
- **Markdown parsers**
- **Tagged templates for safe user input handling**

---

## Pitfalls and Gotchas

- Interpolation only works in **template literals**, not single/double quotes.
- Don’t forget you can interpolate complex expressions – but keep them readable.
- Be cautious when using tagged templates for security — escaping must be handled correctly.
