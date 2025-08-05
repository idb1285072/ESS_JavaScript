# 📘 Fetch API

## Overview

The **Fetch API** provides a modern, promise-based interface for making HTTP requests in JavaScript. It replaces older methods like `XMLHttpRequest` with a cleaner and more powerful syntax, supporting a wide range of use cases such as RESTful APIs, form submission, and file uploads.

---

## ✅ Key Features

- Promise-based and asynchronous
- Native browser support
- Stream-based response handling
- Supports CORS (Cross-Origin Resource Sharing)

---

## 📄 Syntax

```javascript
fetch(input, init)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // or .text(), .blob(), .arrayBuffer()
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
```

### Parameters

| Parameter | Type                  | Description                                  |
| --------- | --------------------- | -------------------------------------------- |
| `input`   | `string` or `Request` | URL or Request object                        |
| `init`    | `object`              | Optional settings like method, headers, body |

---

## 📦 Common Options (`init` Object)

| Option           | Type                                           | Description                                     |
| ---------------- | ---------------------------------------------- | ----------------------------------------------- |
| `method`         | `string`                                       | HTTP method (`GET`, `POST`, `PUT`, etc.)        |
| `headers`        | `object` or `Headers`                          | HTTP headers to include in the request          |
| `body`           | `string` / `FormData` / `Blob` / `ArrayBuffer` | Request body (for methods like `POST`)          |
| `mode`           | `string`                                       | `cors`, `same-origin`, or `no-cors`             |
| `credentials`    | `string`                                       | `omit`, `same-origin`, or `include` for cookies |
| `cache`          | `string`                                       | `default`, `no-store`, `reload`, `force-cache`  |
| `redirect`       | `string`                                       | `follow`, `error`, `manual`                     |
| `referrerPolicy` | `string`                                       | `no-referrer`, `origin`, `same-origin`, etc.    |

---

## 📥 Response Object

After a successful `fetch()`, a **Response** object is returned.

### Common Methods

| Method                   | Returns               | Description                     |
| ------------------------ | --------------------- | ------------------------------- |
| `response.text()`        | Promise\<string>      | Reads response as plain text    |
| `response.json()`        | Promise\<object>      | Parses response as JSON         |
| `response.blob()`        | Promise\<Blob>        | Reads response as binary `Blob` |
| `response.arrayBuffer()` | Promise\<ArrayBuffer> | For binary data (e.g., files)   |
| `response.formData()`    | Promise\<FormData>    | Parses multipart/form-data      |

### Common Properties

| Property     | Type      | Description                              |
| ------------ | --------- | ---------------------------------------- |
| `status`     | `number`  | HTTP status code                         |
| `ok`         | `boolean` | `true` if status is in the 200–299 range |
| `statusText` | `string`  | Status message (e.g., "OK")              |
| `headers`    | `Headers` | Response headers                         |
| `url`        | `string`  | Final response URL                       |
| `redirected` | `boolean` | `true` if response was redirected        |

---

## 🔐 Example: GET Request

```javascript
fetch("https://api.example.com/data")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("Error:", err));
```

---

## 📝 Example: POST Request with JSON

```javascript
fetch("https://api.example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "john_doe",
    email: "john@example.com",
  }),
})
  .then((res) => res.json())
  .then((data) => console.log("User created:", data))
  .catch((error) => console.error("Error:", error));
```

---

## 📤 Uploading Files

```javascript
const formData = new FormData();
formData.append("file", fileInput.files[0]);

fetch("/upload", {
  method: "POST",
  body: formData,
})
  .then((res) => res.json())
  .then((data) => console.log("Uploaded:", data))
  .catch((err) => console.error(err));
```

---

## 🧪 Error Handling

- **Network errors** reject the promise.
- **HTTP errors (e.g., 404)** do not reject; you must check `response.ok`.

```javascript
fetch("/bad-url")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => console.error("Fetch error:", error));
```

---

# Examples

## 1. 📥 **GET Request – Fetch Data from Public API**

**Use Case**: Load data from a RESTful API (e.g., product list, user profiles, dashboard stats).

```javascript
async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const users = await response.json();
    console.log("Users:", users);
  } catch (error) {
    console.error("Fetch failed:", error.message);
  }
}
```

---

## 2. 📝 **POST Request – Send JSON Data to Server**

**Use Case**: Submitting a registration or login form.

```javascript
async function registerUser(data) {
  try {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Server Error: ${response.status}`);
    }

    const result = await response.json();
    console.log("Registration Success:", result);
  } catch (error) {
    console.error("Registration failed:", error.message);
  }
}

// Usage
registerUser({
  username: "john_doe",
  password: "securePass123",
  email: "john@example.com",
});
```

---

## 3. 📤 **Uploading Files – POST with FormData**

**Use Case**: File uploads (profile photo, document attachments, etc.)

```javascript
async function uploadFile(file) {
  const formData = new FormData();
  formData.append("avatar", file);

  try {
    const response = await fetch("/api/upload-avatar", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    console.log("Upload response:", result);
  } catch (error) {
    console.error("Upload failed:", error.message);
  }
}

// Usage (example from input element)
document.getElementById("fileInput").addEventListener("change", (event) => {
  uploadFile(event.target.files[0]);
});
```

---

## 4. ✅ **Handling Authentication – with Credentials and Tokens**

**Use Case**: Sending cookies (e.g., for session-based auth) or bearer tokens.

### A. With Cookies

```javascript
fetch("/api/profile", {
  method: "GET",
  credentials: "include", // Include cookies with request
})
  .then((res) => res.json())
  .then((profile) => console.log(profile))
  .catch((err) => console.error("Auth fetch failed:", err));
```

### B. With Bearer Token (Header)

```javascript
async function fetchSecureData(token) {
  const res = await fetch("/api/secure-data", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  console.log("Secure Data:", data);
}
```

---

## 5. 🔁 **PUT / PATCH – Update Resource**

**Use Case**: Update a user's settings or edit a comment.

```javascript
async function updateUser(userId, updates) {
  const res = await fetch(`/api/users/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  });

  const result = await res.json();
  console.log("Update result:", result);
}

// Usage
updateUser(42, { email: "new@example.com" });
```

---

## 6. ❌ **DELETE – Remove a Resource**

**Use Case**: Delete a record like a post, user, or item.

```javascript
async function deletePost(postId) {
  const res = await fetch(`/api/posts/${postId}`, {
    method: "DELETE",
  });

  if (res.status === 204) {
    console.log("Post deleted successfully");
  } else {
    const msg = await res.text();
    console.error("Deletion failed:", msg);
  }
}
```

---

## 7. 🌐 **Handling CORS**

**Use Case**: Access external APIs hosted on different domains.

```javascript
fetch("https://api.example.com/data", {
  method: "GET",
  mode: "cors",
})
  .then((res) => res.json())
  .then((data) => console.log("External Data:", data))
  .catch((err) => console.error("CORS issue:", err));
```

---

## 8. 📄 **Download File as Blob**

**Use Case**: Download image, PDF, or any binary file and trigger download in browser.

```javascript
async function downloadReport(
  filename = "report.pdf",
  endpoint = "/api/download/report.pdf"
) {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(
        `Download failed: ${response.status} ${response.statusText}`
      );
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading report:", error);
    // Optional: Show user-friendly notification (toast/snackbar/modal)
  }
}
```

---

## 9. 📶 **Concurrent Fetches with `Promise.all`**

**Use Case**: Fetch multiple resources in parallel (e.g., loading dashboard widgets).

```javascript
async function fetchDashboard() {
  const [users, stats, posts] = await Promise.all([
    fetch("/api/users").then((res) => res.json()),
    fetch("/api/stats").then((res) => res.json()),
    fetch("/api/posts").then((res) => res.json()),
  ]);

  console.log("Users:", users);
  console.log("Stats:", stats);
  console.log("Posts:", posts);
}
```

---

## 🧠 Tips & Best Practices

- Always check `response.ok` or `status` to catch server-side HTTP errors.
- Use `try...catch` with `async/await` for cleaner error handling.
- Use `AbortController` for timeout logic and cancelable fetches.
- Prefer `application/json` for APIs and `FormData` for file uploads.
- Avoid sending sensitive tokens in query params – use headers.
