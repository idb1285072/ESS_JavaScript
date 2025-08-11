# Event Delegation

**Event delegation** is a technique where you attach a single event listener to a parent element instead of multiple listeners on individual child elements. Because of **event bubbling**, that one listener on the parent can catch events triggered by any of its child elements.

---

### Why use Event Delegation?

- **Performance:** Instead of adding many listeners, just add one.
- **Dynamic content:** Works for elements added to the DOM later on.
- **Cleaner code:** Easier to manage and maintain.

---

### How it works

When an event happens on a child, it bubbles up to the parent. The parent’s event handler can check which child triggered the event and act accordingly.

---

### Example 1: Click events on list items

Suppose we have a list of items:

```html
<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

Instead of adding click listeners to each `<li>`, add one listener to `<ul>`:

```js
const list = document.getElementById("myList");

list.addEventListener("click", function (event) {
  if (event.target && event.target.nodeName === "LI") {
    console.log("Clicked on:", event.target.textContent);
  }
});
```

Now, clicking on any `<li>` inside `<ul>` will log the text of that item.

---

### Example 2: Handling dynamically added elements

You can add new items later, and the same listener still works:

```js
const newItem = document.createElement("li");
newItem.textContent = "Item 4";
list.appendChild(newItem);
```

Clicking “Item 4” triggers the event handler without adding any new listeners.

---

### Key points:

- The event listener is on the **parent** (`<ul>`), not the children (`<li>`).
- Use `event.target` inside the handler to find out which child triggered the event.
- Works great for lists, tables, menus, or any container with many interactive children.
