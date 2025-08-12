## **1. DOM (Document Object Model) APIs**

* **Select & manipulate elements**:
  `document.querySelector`, `querySelectorAll`, `getElementById`
  `.classList`, `.style`, `.setAttribute`
* **Create & insert nodes**:
  `document.createElement`, `.append`, `.prepend`, `.remove`
* **Read & write content**:
  `.textContent`, `.innerHTML`
* **DOM traversal**:
  `.parentNode`, `.children`, `.nextElementSibling`
* **Event handling**:
  `addEventListener`, event object (`event.target`, `preventDefault`)

---

## **2. BOM (Browser Object Model) Essentials**

* `window` (global context)
* `location` (URL manipulation)
* `history` (`pushState`, `replaceState`)
* `navigator` (browser/device info)

---

## **3. Networking**

* **`fetch()` API** (GET/POST requests, JSON handling, error handling)
* **WebSocket** (real-time updates) — optional but important for interactive apps

---

## **4. Storage**

* **localStorage** & **sessionStorage** (small key-value storage)
* **IndexedDB** (structured data, offline apps) — more advanced but crucial for PWAs

---

## **5. Multimedia & Graphics**

* **Canvas API** (2D rendering) — for custom visuals/animations
* **HTMLMediaElement** controls for `<audio>` / `<video>`

---

## **6. Performance & Animation**

* **`requestAnimationFrame`** (smooth animations)
* **Performance API** (`performance.now()`) for measuring runtime
* **Page Visibility API** to optimize background tab behavior

---

## **7. Workers**

* **Web Workers** (offload CPU-heavy tasks without freezing UI)
* **Service Workers** (offline caching, background sync, push notifications) — core for PWAs

---

## **8. Device & User Interaction**

* **Geolocation API** (maps/location-based features)
* **Clipboard API** (copy/paste programmatically)
* **Drag & Drop API**

---

## **9. Notifications & Background Tasks**

* **Notifications API** (desktop/mobile browser notifications)
* **Push API** (server-pushed updates — needs Service Workers)

---

✅ **If you master these**, you can build:

* Interactive UIs with dynamic DOM updates
* Data-driven apps that fetch/update in real time
* Offline-capable PWAs
* Apps with device integration (camera, geolocation, clipboard)
* Optimized, smooth, responsive experiences

---
