# Cookie
A cookie is a small piece of data (text) stored by your browser. It’s associated with a website (domain) and sent automatically with every request to that website. Cookies help websites remember things about you — like if you’re logged in or your language preference.

- Cookies are small pieces of data (text strings) stored by the browser and associated with a particular domain.
- Cookies are sent automatically with every HTTP request to the server for the matching domain and path.

### Limitations

- Size limit per cookie is about 4 KB.
- Browsers limit the number of cookies per domain (~20-50).
- Cookies increase request size because they are sent with every HTTP request, so keep them minimal.

## Syntax
`name=value` pair with some optional settings
```js
name=value; expires=date; path=path; domain=domain; secure; samesite=strict|lax|none
```

```js
// Set cookie (expires in 7 days)
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const d = new Date();
    d.setTime(d.getTime() + days*24*60*60*1000);
    expires = "; expires=" + d.toUTCString();
  }
  document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

// Get cookie value by name
function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (const c of cookies) {
    const [key, val] = c.split('=');
    if (key === name) return decodeURIComponent(val);
  }
  return null;
}

// Delete cookie by setting expiry in the past
function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}

// Usage:
setCookie('theme', 'dark', 7);
console.log(getCookie('theme')); // dark
deleteCookie('theme');
```

---

## attributes

* **`expires` / `max-age`**: Control how long the cookie lasts. Without these, cookie expires at end of session (browser close).
* **`path`**: Limits cookie to a certain folder or page. Usually set to `/` to apply site-wide.
* **`domain`**: Usually not needed, but can share cookies across subdomains.
* **`secure`**: Cookie only sent on HTTPS, improving security.
* **`HttpOnly`**: Prevents JavaScript access, reducing XSS risk. Must be set by server.
* **`SameSite`**: Helps prevent CSRF attacks by controlling if cookie is sent with cross-site requests.

## **Security Best Practices (Advanced)**

* Use **`HttpOnly`** for cookies storing sensitive info (like session tokens) to block JS access.
* Use **`Secure`** to prevent cookie leaks over HTTP.
* Set **`SameSite=Strict` or `Lax`** to defend against CSRF attacks.
* Avoid storing sensitive info in cookies without encryption.
* Keep cookies small to avoid performance issues.

### **Parsing Cookies**

```js
function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}
```

