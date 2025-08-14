# DOM Traverse

DOM traversal = navigating the DOM tree to move between related nodes (**parents**, **children**, **siblings**, etc.) or search for specific elements.

### Types of Traversal

#### **A. Tree Navigation (Structural)**

- `parentNode` / `parentElement` → Go to parent.
- `childNodes` → All child nodes (including text/comments).
- `children` → Element children only.
- `firstChild` / `firstElementChild` → First child node/element.
- `lastChild` / `lastElementChild` → Last child node/element.
- `nextSibling` / `nextElementSibling` → Next sibling node/element.
- `previousSibling` / `previousElementSibling` → Previous sibling node/element.

#### **B. Searching the DOM**

- `document.getElementById(id)` → Find by ID.
- `document.getElementsByClassName(class)` → Find by class (live HTMLCollection).
- `document.getElementsByTagName(tag)` → Find by tag name (live HTMLCollection).
- `document.querySelector(selector)` → First match by CSS selector.
- `document.querySelectorAll(selector)` → All matches (static NodeList).

#### **C. Special Traversal APIs**

- `element.closest(selector)` → Find nearest ancestor matching selector.
- `element.matches(selector)` → Check if element matches selector.

### Notes & Best Practices

- **Element vs Node**: Use `*Element*` versions (e.g., `children`, `firstElementChild`) to avoid text/comment nodes.
- **Static vs Live Lists**: `querySelectorAll` returns static lists, `getElementsBy*` returns live lists.
- **Performance**: Use more specific selectors to reduce search time.
- **Readability**: Chain methods sparingly; store references in variables.

---

# DOM Manipulation

DOM manipulation = using JavaScript to **read, add, remove, or change** HTML elements, attributes, styles, and content in the Document Object Model.

### Core Operations

#### **A. Selecting Elements**

- `document.getElementById(id)`
- `document.getElementsByClassName(class)` _(live)_
- `document.getElementsByTagName(tag)` _(live)_
- `document.querySelector(selector)` _(first match)_
- `document.querySelectorAll(selector)` _(NodeList)_

#### **B. Reading/Changing Content**

- `element.textContent` → Set/get plain text.
- `element.innerHTML` → Set/get HTML markup.
- `element.innerText` → Visible text only (respecting styles).

#### **C. Changing Attributes**

- `element.setAttribute(name, value)`
- `element.getAttribute(name)`
- `element.removeAttribute(name)`
- Direct property access: `element.id = "newId"`

#### **D. Changing Styles**

- Inline: `element.style.color = "red"`
- Multiple:

  ```js
  Object.assign(element.style, { color: "red", background: "yellow" });
  ```

- Class manipulation:

  - `element.classList.add("class")`
  - `element.classList.remove("class")`
  - `element.classList.toggle("class")`
  - `element.classList.contains("class")`

#### **E. Creating/Adding Elements**

- `document.createElement(tag)` → Create element.
- `parent.appendChild(child)` → Append at end.
- `parent.insertBefore(newEl, refEl)` → Insert before a node.
- Modern:

  - `parent.append(newEl)` → Append node or text.
  - `parent.prepend(newEl)` → Insert at start.

#### **F. Removing Elements**

- `element.remove()`
- `parent.removeChild(child)`

#### **G. Event Handling**

- `element.addEventListener("click", handler)`
- `element.removeEventListener("click", handler)`
- Inline (not recommended): `<button onclick="fn()">`

#### **H. Changing Structure**

- `element.cloneNode(true|false)` → Duplicate nodes.
- `element.replaceChild(newChild, oldChild)`
- `element.replaceWith(newEl)`

### Best Practices

- Avoid excessive DOM changes inside loops → batch updates.
- Prefer `textContent` over `innerHTML` for safety/performance when adding plain text.
- Use `classList` for style changes instead of inline styles.
- Cache DOM selections to avoid repeated queries.

---

Life Project
[dom](https://idb1285072.github.io/ESS_JavaScript/important_topic/26_dom_manipulation_traversal/)
