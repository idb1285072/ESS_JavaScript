# Fetch API

The **Fetch API** is a modern JavaScript interface that allows you to **make HTTP requests** (GET, POST, PUT, DELETE, etc.) from the browser to a server.

It’s a **replacement for XMLHttpRequest** (XHR) and uses **Promises**, making code cleaner and easier to work with.

---

## Basic Syntax of `fetch`

```js
fetch(url, options)
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle errors
  });
```

* **`url`**: The URL you are fetching data from.
* **`options`** *(optional)*: An object to configure method, headers, body, etc.

---

## Example 1: Basic GET Request

```js
fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(data => {
    console.log(data); // JSON data from server
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
```

### Explanation:

* `fetch()` sends a GET request by default.
* `.json()` parses the JSON response.
* `.catch()` handles network or connection errors.

---

## Example 2: POST Request (Send Data)

```js
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com'
  })
})
  .then(response => response.json())
  .then(data => {
    console.log('User created:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

---

## Fetch Options Object

You can customize requests using the second argument of `fetch(url, options)`.

### Common Options:

| Key           | Description                                                   | Example Value                            |
| ------------- | ------------------------------------------------------------- | ---------------------------------------- |
| `method`      | HTTP method                                                   | `'GET'`, `'POST'`, `'PUT'`               |
| `headers`     | HTTP headers                                                  | `{ 'Content-Type': 'application/json' }` |
| `body`        | Payload for `POST`, `PUT`, etc.                               | `JSON.stringify({...})`                  |
| `mode`        | CORS setting (`cors`, `no-cors`, `same-origin`)               | `'cors'`                                 |
| `credentials` | Send cookies with request? (`omit`, `same-origin`, `include`) | `'include'`                              |

---

## Response Object Methods

After a fetch, the `.then(response => ...)` receives a **Response object** with methods like:

* `response.ok`: `true` if status is 200–299
* `response.status`: HTTP status code
* `response.json()`: Parse response body as JSON
* `response.text()`: Parse response body as plain text
* `response.blob()`: For files/images

---

### Example: Checking Status Before Parsing

```js
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP error ' + response.status);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Fetch error:', error));
```

---

## Example: PUT Request

```js
fetch('https://api.example.com/user/123', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Updated Name'
  })
});
```

---

## Example: DELETE Request

```js
fetch('https://api.example.com/user/123', {
  method: 'DELETE'
})
  .then(res => res.json())
  .then(data => console.log('Deleted:', data));
```

---

## Fetch with Authentication

### Example: Send token in headers

```js
fetch('https://api.example.com/secure-data', {
  headers: {
    'Authorization': 'Bearer your_token_here'
  }
});
```

---

## Fetch and CORS (Cross-Origin Requests)

If your front-end tries to fetch data from a different domain (API server), you'll run into **CORS** (Cross-Origin Resource Sharing) rules.

* **If server allows** it (via headers like `Access-Control-Allow-Origin`), the request works.
* If **not**, the browser **blocks the response**.

---

## Async/Await Version (Clean and Modern)

```js
async function loadData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Failed: ' + response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

---

## Fetching Files (e.g. image)

```js
fetch('image.jpg')
  .then(res => res.blob())
  .then(blob => {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(blob);
    document.body.appendChild(img);
  });
```