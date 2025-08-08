# Storage

- client side
- Types of storage
  - Local storage
  - Session storage
  - Cookie
  - IndexedDB
  - Cache Storage

---

### 1. **Local Storage**

**Use case:**

- Persist user preferences/settings across browser sessions.
- Examples:

  - Saving theme choice (dark/light mode) so it’s remembered on reload.
  - Remembering language selection on a website.
  - Caching form inputs to avoid data loss if user refreshes accidentally.

**Why use it:**

- Easy key-value storage.
- Data persists even if browser/tab closes.

---

### 2. **Session Storage**

**Use case:**

- Temporary data specific to a single tab session.
- Examples:

  - Auth Token
  - Storing multi-step form progress for current session only.
  - Keeping track of a user’s position in a wizard or quiz within one tab.
  - Temporary shopping cart data when user hasn’t logged in.

**Why use it:**

- Data cleared when tab/window is closed, avoiding stale info.
- Separate storage per tab.

---

### 3. **Cookies**

**Use case:**

- Cookies are small pieces of data (text strings) stored by the browser and associated with a particular domain. 
- Cookies are sent automatically with every HTTP request to the server for the matching domain and path.
- Examples:

  - Session cookie storing a logged-in user ID.
  - Tracking user consent (e.g., GDPR cookie consent).
  - Remembering small user preferences server can read (language, currency).

**Why use it:**

- Automatically sent with every HTTP request to server (needed for auth).
- Can set expiration dates and security flags (HttpOnly, Secure).

---

### 4. **IndexedDB**

**Use case:**

- Store large, complex, and structured data offline in web apps.
- Examples:

  - Offline-capable note-taking or document editors saving user content locally.
  - Storing cached API data for progressive web apps (PWA) that work offline.
  - Storing media files (images, videos) for fast local access.

**Why use it:**

- Supports complex objects and large amounts of data (MBs+).
- Asynchronous API prevents blocking UI.
- Indexed queries for efficient data access.

---

### 5. **Cache Storage (Service Worker Cache API)**

**Use case:**

- Caching HTTP responses for offline-first web apps.
- Examples:

  - Caching entire HTML, CSS, JS files so app loads instantly on repeat visits.
  - Caching API responses (like product lists) to serve when offline.
  - Implementing background sync or offline mode.

**Why use it:**

- Designed for caching network requests/responses.
- Can be controlled by service workers for fine-grained caching strategy.
