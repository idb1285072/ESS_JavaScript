# Web Storage API
```js
localStorage.setItem("userName", "Murad");
localStorage.setItem("age", 32); // {"age":32, "userName": "Murad"}
localStorage.getItem("userName");
localStorage.age;
localStorage.key(1); // "age"
localStorage.key(2); // "userName"
localStorage.length;
localStorage.removeItem("userName");
localStorage.clear();
```

# 🗂️ Web Storage API: `localStorage` vs `sessionStorage`

The **Web Storage API** provides mechanisms to store key-value pairs in a web browser. It includes two storage types:

* **`localStorage`**
* **`sessionStorage`**

Both are part of the browser’s `window` object and allow client-side persistent or session-based data storage.

---

## 📌 Overview

| Feature           | `localStorage`                       | `sessionStorage`                              |
| ----------------- | ------------------------------------ | --------------------------------------------- |
| Scope             | Per origin (protocol + host + port)  | Per origin and per browser tab                |
| Lifespan          | Persistent (until manually cleared)  | Temporary (cleared when tab or window closes) |
| Storage Capacity  | Typically 5–10 MB                    | Typically 5–10 MB                             |
| Accessible From   | Any tab or window with same origin   | Only from the tab that created it             |
| Use Case Examples | Theme preferences, saved login state | Form draft, page state during navigation      |

---

## 🛠️ Syntax and Usage

Both `localStorage` and `sessionStorage` expose the same API and are used with identical syntax.

### Set Item

```javascript
localStorage.setItem('key', 'value');
sessionStorage.setItem('key', 'value');
```

### Get Item

```javascript
const data = localStorage.getItem('key');
const data = sessionStorage.getItem('key');
```

### Remove Item

```javascript
localStorage.removeItem('key');
sessionStorage.removeItem('key');
```

### Clear All Items

```javascript
localStorage.clear();
sessionStorage.clear();
```

---

## 🔍 Detailed Comparison

### 1. Storage Scope

* **`localStorage`** is shared across all browser tabs and windows under the same origin (protocol, domain, and port).
* **`sessionStorage`** is unique to the tab or window where it was created. It is not shared across tabs or windows.

### 2. Storage Duration

* **`localStorage`** persists even after the browser is closed and reopened. It remains until explicitly deleted using JavaScript or browser settings.
* **`sessionStorage`** lasts only for the duration of the page session. Once the tab is closed, the data is automatically cleared.

### 3. Use Cases

| `localStorage`                                     | `sessionStorage`                                 |
| -------------------------------------------------- | ------------------------------------------------ |
| Remembering user preferences (e.g., theme)         | Retaining data only during tab activity          |
| Storing tokens for client-side-only authentication | Managing temporary form inputs                   |
| Keeping shopping cart contents between visits      | Avoiding data loss during a multi-step form flow |

---

## ⚠️ Limitations and Security

* **Storage Limit:** Both provide \~5–10MB, but this varies by browser and user settings.
* **Data Type Support:** Only strings are stored. You must use `JSON.stringify()` and `JSON.parse()` for objects.
* **Security Considerations:**

  * Data is stored in plain text.
  * Not suitable for storing sensitive or confidential data.
  * Accessible via JavaScript—vulnerable to XSS if not properly protected.

---

## 📄 Example: JSON Storage in `localStorage`

```javascript
// Storing an object
const user = { name: 'Alice', age: 30 };
localStorage.setItem('user', JSON.stringify(user));

// Retrieving the object
const retrievedUser = JSON.parse(localStorage.getItem('user'));
console.log(retrievedUser.name); // "Alice"
```

---

## ✅ Summary Table

| Feature             | `localStorage`                       | `sessionStorage`                  |
| ------------------- | ------------------------------------ | --------------------------------- |
| Scope               | All tabs from same origin            | Single tab or window only         |
| Lifespan            | Until explicitly cleared             | Until tab or window is closed     |
| Capacity            | \~5–10 MB                            | \~5–10 MB                         |
| Data Sharing        | Shared across same-origin tabs       | Not shared between tabs           |
| Suitable For        | Persistent data (e.g., theme, token) | Temporary data (e.g., form steps) |
| Auto-clear Behavior | No                                   | Yes (on tab/window close)         |
| Storage Format      | String (must stringify objects)      | String (must stringify objects)   |

---

## 📚 Best Practices

* Use `localStorage` for **long-lived data** that doesn't change often and doesn’t contain sensitive information.
* Use `sessionStorage` for **temporary state** specific to the current tab session.
* Always serialize non-string data using `JSON.stringify()` before storing.
* Avoid using either for sensitive data such as passwords or tokens unless securely encrypted.

---
