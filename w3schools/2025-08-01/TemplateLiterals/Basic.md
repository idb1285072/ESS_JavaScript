### 🔰 1. **Basic Syntax**

```js
const name = "Alice";
const greeting = `Hello, ${name}!`; // → "Hello, Alice!"
```

- Use backticks `` ` ``, not quotes.
- Use `${expression}` to interpolate variables or expressions.

---

### 🔄 2. **Expression Interpolation**

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

---

### 📏 3. **Multiline Strings**

```js
const multiline = `
Line 1
Line 2
Line 3
`;
```

- No need for `\n` or string concatenation with `+`.

---

### 🧠 4. **Tagged Templates (Advanced)**

This is where things get pro-level.

```js
function tag(strings, ...values) {
  console.log(strings); // Array of string literals
  console.log(values); // Array of interpolated values
  return "Processed output";
}

const result = tag`Hello ${name}, today is ${new Date().toDateString()}.`;
```

#### What to know:

- The `tag` function can transform the output (e.g., sanitize HTML, translate, escape).
- Can be used for **custom DSLs** (Domain-Specific Languages).
- Useful for **security** (preventing XSS), **internationalization**, or **styling** (e.g., styled-components).

---

### 🔐 5. **Escaping and Raw Strings**

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

### 💡 6. **Use Cases to Practice**

- **Dynamic HTML generation**
- **Styled Components (React)**
- **SQL query builders (e.g., sql-template-strings)**
- **i18n/l10n (translation)**
- **Markdown parsers**
- **Tagged templates for safe user input handling**

---

### 🧪 7. **Pitfalls and Gotchas**

- Interpolation only works in **template literals**, not single/double quotes.
- Don’t forget you can interpolate complex expressions – but keep them readable.
- Be cautious when using tagged templates for security — escaping must be handled correctly.

---

### 📚 8. **Explore Real-World Libraries That Use Tagged Templates**

- [`styled-components`](https://styled-components.com/) (CSS in JS)
- [`graphql-tag`](https://github.com/apollographql/graphql-tag)
- [`sql-template-strings`](https://github.com/felixfbecker/node-sql-template-strings)
- [`lit-html`](https://lit.dev/docs/v1/lit-html/introduction/) (web components templating)
