# 📘 JSONP (JSON with Padding)

## 📖 Overview

**JSONP (JSON with Padding)** is a technique used to **bypass the Same-Origin Policy** in web browsers, allowing a web page to request data from a server in a **different domain** than its own. It was widely used before the advent of modern alternatives like **CORS (Cross-Origin Resource Sharing)**.

JSONP works by exploiting the fact that `<script>` tags are **not restricted by the same-origin policy**. Origin means `protocol + hostname + port`

---

## 🎯 Purpose

To allow **cross-domain HTTP requests** in environments where **CORS is not supported**, particularly for **GET** requests.

---

## ⚙️ How It Works

1. The client creates a `<script>` tag dynamically with the URL of the cross-domain API.
2. The URL includes a **callback parameter** (function name).
3. The server wraps the JSON response inside the specified callback function.
4. The browser executes the script and invokes the callback function with the data.

### 🔁 Request

```html
<script src="https://api.example.com/user?id=123&callback=handleResponse"></script>
```

### 🔁 Server Response

```javascript
handleResponse({
  id: 123,
  name: "John Doe",
  email: "john@example.com",
});
```

### 🧠 Callback Function

```javascript
function handleResponse(data) {
  console.log(data.name); // "John Doe"
}
```

---

## 🔐 JSONP vs CORS

| Feature            | JSONP                             | CORS                          |
| ------------------ | --------------------------------- | ----------------------------- |
| **HTTP Methods**   | GET only                          | GET, POST, PUT, DELETE, etc.  |
| **Security**       | Less secure                       | More secure (uses headers)    |
| **Implementation** | Requires server support for JSONP | Server sets response headers  |
| **Error Handling** | Difficult (no `onerror` reliably) | Full control over HTTP status |
| **Modern Usage**   | Deprecated/legacy                 | Preferred standard             |

---

## 🧱 Structure & Requirements

### Client Side:

- Must define a global function as a **callback**.
- Must inject a `<script>` tag dynamically or statically.

### Server Side:

- Must detect the `callback` parameter and wrap the JSON data accordingly.

---

## ⚠️ Limitations

- **GET requests only** (cannot send POST or PUT with body).
- **No HTTP error codes**: script tags cannot detect 4xx/5xx errors.
- **No authentication**: cannot securely handle tokens or cookies.
- **Vulnerable to XSS** if not properly sanitized.
- **Global namespace pollution** (callback must be global).

---

## 🚫 Deprecated Practice

JSONP is now considered a **legacy technique** and is discouraged in favor of:

- **CORS (Cross-Origin Resource Sharing)**
- **Server-side proxies**
- **JSON over Fetch/AJAX**

Modern browsers and APIs support **CORS headers**, making JSONP mostly obsolete.

---

## 📌 Summary

| Key Element            | Description                                             |
| ---------------------- | ------------------------------------------------------- |
| **What**               | Technique for cross-domain data access using `<script>` |
| **When to Use**        | Legacy systems or when CORS is unavailable              |
| **Data Format**        | JavaScript code (JSON wrapped in function)              |
| **Security**           | Vulnerable to XSS and limited in scope                  |
| **Modern Alternative** | CORS                                                    |

---