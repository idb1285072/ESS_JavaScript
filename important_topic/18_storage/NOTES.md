# Storage

### 1. Local Storage

- **Capacity:** \~5–10 MB (varies by browser)
- **Expiration:** Persistent until explicitly cleared by script or user
- **Scope:** Same origin (protocol + host + port)
- **Access:** Only via JavaScript (client-side), synchronous API
- **Use case:** Long-term data caching, user preferences (like theme, language settings, UI layout), offline data storage

---

### 2. Session Storage

- **Capacity:** \~5 MB (varies by browser)
- **Expiration:** Cleared when the browser tab or window is closed
- **Scope:** Same origin **and** same browser tab/window (isolated per tab)
- **Access:** Only via JavaScript (client-side), synchronous API
- **Use case:** Temporary data for a single browsing session/tab

---

### 3. Cookies

- **Capacity:** \~4 KB per cookie (including name, value, attributes)
- **Expiration:** Configurable per cookie (session-only if no expiration, or persistent with expiration date)
- **Scope:** Same origin; can be restricted by domain and path attributes
- **Access:** Accessible via JavaScript unless `HttpOnly` flag is set; sent automatically with every HTTP request to matching domain/path
- **Use case:** Authentication tokens, session management, server-client data exchange, tracking

---

### 4. IndexedDB

- **Capacity:** Typically hundreds of MBs or more (depends on browser and user quota)
- **Expiration:** Persistent until cleared by script or user
- **Scope:** Same origin
- **Access:** Accessible via asynchronous JavaScript API (promises/events)
- **Use case:** Large, complex, or structured data storage; offline-capable web applications

---

### 5. Cache Storage

- **Capacity:** Varies, often large (depends on browser and quota)
- **Expiration:** Persistent until cleared programmatically or by the browser
- **Scope:** Same origin
- **Access:** Accessible via asynchronous JavaScript API (promises), primarily used with Service Workers
- **Use case:** Caching network requests/responses for offline support and performance improvements

---

### Overall:

- **Local Storage & Session Storage** are synchronous and key-value string stores with limited size.
- **Cookies** are small, sent with HTTP requests, suitable for server-side communication but limited in size.
- **IndexedDB & Cache Storage** provide asynchronous APIs for large data and offline capabilities.
