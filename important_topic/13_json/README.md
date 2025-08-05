# JSON (JavaScript Object Notation)

## Overview
**JSON** is a lightweight, language-independent, text-based format used for data exchange (especially in APIs, configurations, and NoSQL).

## Syntax & Data Types

- **Structure**: Objects (`{}`), Arrays (`[]`)
- **Keys**: Strings in double quotes
- **Values**:
  - String: `"text"`
  - Number: `42`, `3.14`
  - Boolean: `true`, `false`
  - null: `null`
  - Object: `{ "key": "value" }`
  - Array: `[1, 2, 3]`

> No comments, functions, undefined, or trailing commas
>
> String must be used in double quotes

---
* Data types supported (string, number, object, array, boolean, null)
* Valid Syntax (no trailing commas, double quotes only for keys/strings)
* Difference from JavaScript object literals (e.g., functions, undefined, symbols are invalid)
* Escaping characters inside JSON strings

## JSON <-> JavaScript

## Real World Use Cases
- API responses (REST, GraphQL)
- Config files (`package.js`, `.babelrc`)
- Local Storage (`localStorage.setItem`)
- Databases (MongoDB, Firebase)
- Data sharing between apps/languages

## Best Practices
- Always use **double quotes**
- Use `try...catch` on `JSON.parse()`
- Avoid circular references
- Never embed JSON with `eval()` or expose sensitive data

## JSON vs JavaScript Object
- JSON key in double quotes
- Trailing commas are not allowed
- Comments are not allowed
- Function, date, undefined not allowed