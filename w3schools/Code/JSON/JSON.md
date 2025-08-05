# 📘 JSON (JavaScript Object Notation)

---

## ✅ Overview

**JSON** is a lightweight, language-independent, text-based format used for data exchange (especially in APIs, configurations, and NoSQL). It resembles JavaScript object syntax and is both human-readable and machine-parseable.

---

## 📐 Syntax & Data Types

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

## 📦 Example

```json
{
  "id": 1,
  "name": "Alice",
  "roles": ["admin", "user"],
  "profile": {
    "age": 30,
    "active": true
  }
}
```

---

## 🔄 JSON <-> JavaScript

### Parse JSON → JS object

```js
const obj = JSON.parse('{"name":"Alice"}');
```

### Stringify JS object → JSON

```js
const json = JSON.stringify({ name: "Alice" });
```

### Pretty Print

```js
JSON.stringify(obj, null, 2);
```

### Custom Serialization

```js
const user = {
  name: "Alice",
  password: "secret",
  toJSON() {
    return { name: this.name };
  },
};
```

---

## ⚖ JSON vs JavaScript Object

| Feature                             | JSON               | JS Object  |
| ----------------------------------- | ------------------ | ---------- |
| Key quotes                          | Required (`"key"`) | Optional   |
| Functions, date, undefined allowed  | ❌ No              | ✅ Yes    |
| Trailing commas                     | ❌ No              | ✅ Yes    |
| Comments allowed                    | ❌ No              | ✅ Yes    |

---

## 🔐 Best Practices

- Always use **double quotes**
- Use `try...catch` on `JSON.parse()`
- Avoid circular references
- Validate with tools like **AJV**
- Never embed JSON with `eval()` or expose sensitive data

---

## 🛠 Real-World Use Cases

- API responses (REST, GraphQL)
- Config files (`package.json`, `.babelrc`)
- Local storage (`localStorage.setItem`)
- Databases (MongoDB, Firebase)
- Data sharing between apps/languages

---

## 🌍 JSON in Other Languages

| Language | Parse         | Stringify     |
| -------- | ------------- | ------------- |
| Python   | `json.loads`  | `json.dumps`  |
| Java     | `Gson`        | `Gson`        |
| PHP      | `json_decode` | `json_encode` |

---

## 🆚 JSON vs XML vs YAML

| Feature      | JSON   | XML    | YAML      |
| ------------ | ------ | ------ | --------- |
| Readability  | High   | Low    | Very High |
| Size         | Small  | Large  | Small     |
| Native to JS | ✅ Yes | ❌ No  | ❌ No     |
| Comments     | ❌ No  | ✅ Yes | ✅ Yes    |

---
