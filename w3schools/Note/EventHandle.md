# 🧩 (Nested) Event Handling in JavaScript

## 🔁 Event Bubbling

- **Default event flow** in the DOM.
- Event fires at the **target element** first, then **bubbles up** to ancestor elements.
- You can handle the event at the target and/or any parent.

### 🔍 Example:

```html
<div id="outer">
  <button id="btn">Click Me</button>
</div>

<script>
  document.getElementById("outer").addEventListener("click", () => {
    console.log("Outer clicked");
  });

  document.getElementById("btn").addEventListener("click", () => {
    console.log("Button clicked");
  });
</script>
```

### 🧪 Output when button is clicked:

```
Button clicked
Outer clicked
```

---

## 🔽 Event Capturing (Capture Phase)

- Event flows from the **root down to the target** before bubbling up.
- Use the `{ capture: true }` option to listen in this phase.

### 🔍 Example:

```html
<script>
  document.getElementById("outer").addEventListener(
    "click",
    () => {
      console.log("Outer capturing");
    },
    { capture: true }
  );
</script>
```

---

## 🧠 Event Delegation

- Instead of adding listeners to every child, you attach **one listener to a parent**.
- Use `event.target` to detect which child triggered the event.
- Efficient and ideal for **dynamically generated** content.

### 🔍 Example:

```html
<ul id="menu">
  <li data-id="1">Home</li>
  <li data-id="2">About</li>
  <li data-id="3">Contact</li>
</ul>

<script>
  document.getElementById("menu").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      console.log("Clicked item ID:", e.target.dataset.id);
    }
  });
</script>
```

---

## 🛑 Bonus: Stop Propagation

```js
element.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevents bubbling up
});
```

---

## ✅ Summary

| Concept        | Direction                    | Default? | Notes                                      |
| -------------- | ---------------------------- | -------- | ------------------------------------------ |
| **Bubbling**   | Target → Ancestors           | ✅ Yes   | Most common phase used                     |
| **Capturing**  | Root → Target                | ❌ No    | Must enable with `{ capture: true }`       |
| **Delegation** | Uses bubbling under the hood | ✅ Yes   | Great for performance and dynamic elements |

---

# 📚 HTMLCollection vs NodeList

## ✅ Key Differences

| Feature              | `HTMLCollection`                                                 | `NodeList`                               |
| -------------------- | ---------------------------------------------------------------- | ---------------------------------------- |
| Type                 | Array-like object                                                | Array-like object                        |
| Returned by          | `getElementsByTagName()`, `getElementsByClassName()`, `children` | `querySelectorAll()`, `childNodes`       |
| Live or static       | ✅ **Live** (updates with DOM changes)                           | ❌ **Static** (snapshot at time of call) |
| Access by            | Index, **name**, or **id** (in some cases)                       | Index only                               |
| Can use `.forEach()` | ❌ Not directly (convert to array)                               | ✅ Supported in modern browsers          |

## 🔍 HTMLCollection

- Live collection: changes when DOM updates
- Does **not** support array methods like `.map()`, `.filter()`
- Access by:

  - Index: `collection[0]`
  - Named item (rare): `collection["myElementId"]`

### Example:

```js
const divs = document.getElementsByTagName("div");
console.log(divs[0]);
```

## 🔍 NodeList

- Static collection: does **not** change with DOM updates
- Returned by:

  - `document.querySelectorAll()`
  - `element.childNodes` (includes text, comment, and element nodes)

- Supports `.forEach()` in most modern browsers

### Example:

```js
const items = document.querySelectorAll(".item");
items.forEach((item) => console.log(item));
```

## 🔁 Converting to Array

Both can be converted to a real array:

```js
const array = Array.from(collection); // or [...collection]
```

## 🧠 Summary

| Feature        | HTMLCollection         | NodeList                  |
| -------------- | ---------------------- | ------------------------- |
| Live           | ✅ Yes                 | ❌ No (static snapshot)   |
| Array methods  | ❌ No                  | ✅ Some (like `.forEach`) |
| Access by name | ✅ Yes (in some cases) | ❌ No                     |
| Common usage   | Legacy DOM APIs        | Modern CSS selector APIs  |

---

# HTMLCollection vs NodeList

- Both are Object (Array like but not Array)
- getElementsByTagName() return HTMLCollection
- querySelectorAll() and childNodes return NodeList
- HTMLCollection can access by Name, id and index number
- NodeList can access by index number
