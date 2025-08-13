# Fetch API

- The fetch API is a modern built-in browser interface for making HTTP requests from browser to server (replace older **XMLHttpRequest**).
- returns a **Promise** - always asynchronous

### Syntax

```js
fetch(url, options?)
  .then(response=>{
    if(!response.ok) throw new Error("Network response was not ok");
    return response.json();
  })
  .then(data=>console.log(data))
  .catch(error=>console.log(error));
```

**Examples**

```js
fetch("https://api.example.com/data")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

const fetchData = async (url) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
```

```js
fetch("https://api.example.com/data", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "John" }),
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

```js
const postDataAsync = async () => {
  try {
    const response = await fetch("https://api.example.com/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "John" }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

postDataAsync();
```

## Common `options`

### 1. **method**

- HTTP request method: `"GET"`, `"POST"`, `"PUT"`, `"DELETE"`, `"PATCH"`, etc.

```js
fetch(url, { method: "POST" });
```

### 2. **headers**

- HTTP headers as an object.
- Example: setting content type or authorization.

```js
headers: {
  "Content-Type": "application/json",
  "Authorization": "Bearer TOKEN"
}
```

**Content-Type:**

- `application/json`
- `application/x-www-form-urlencoded`
- `multipart/form-data`
- `text/plain`
- `application/octet-stream`
- `application/xml`

### 3. **body**

- Data sent with the request (for POST, PUT, PATCH).
- Must be a **string, FormData, Blob, or URLSearchParams**.

```js
body: JSON.stringify({ name: "John" });
```

### 4. **mode**

- Controls **CORS behavior**. Options:

  - `"cors"` → default, allows cross-origin requests if server permits
  - `"no-cors"` → limited access to response
  - `"same-origin"` → only same-origin requests allowed

```js
mode: "cors";
```

### 5. **credentials**

- Controls cookies and authentication. Options:

  - `"same-origin"` → send cookies for same-origin only
  - `"include"` → send cookies for all requests
  - `"omit"` → never send cookies

```js
credentials: "include";
```

### 6. **cache**

- How the request interacts with the browser cache. Options:

  - `"default"` → browser default
  - `"no-store"` → bypass cache completely
  - `"reload"` → fetch from network
  - `"no-cache"` → validate with server before using cache
  - `"force-cache"` → use cache if available

```js
cache: "no-cache";
```

### 7. **redirect**

- How redirects are handled. Options:

  - `"follow"` → follow redirects automatically (default)
  - `"manual"` → manual handling
  - `"error"` → throw error on redirect

```js
redirect: "follow";
```

### 8. **referrer**

- The referrer URL sent with the request.

```js
referrer: "https://example.com";
```

### 9. **referrerPolicy**

- Controls **what referrer info is sent**. Options: `"no-referrer"`, `"origin"`, `"strict-origin-when-cross-origin"`, etc.

### 10. **integrity**

- Subresource Integrity (SRI) hash to verify content hasn’t been tampered.

```js
integrity: "sha256-abc123...";
```

### 11. **keepalive**

- `true` allows request to continue in the background even if the page unloads.

### 12. **signal**

- Allows **abortable requests** using `AbortController`.

```js
const controller = new AbortController();
fetch(url, { signal: controller.signal });
controller.abort(); // cancels the fetch
```

### 13. **window** (browser-specific)

- Reserved; always `null` in modern browsers.

---

### **Example: Full Fetch Options**

```js
fetch("https://api.example.com/data", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer TOKEN",
  },
  body: JSON.stringify({ name: "John" }),
  mode: "cors",
  credentials: "include",
  cache: "no-cache",
  redirect: "follow",
  referrer: "https://example.com",
  referrerPolicy: "no-referrer",
  integrity: "sha256-abc123...",
  keepalive: true,
});
```
