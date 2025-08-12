# Event Bubbling

**Event bubbling** is a way that events propagate (or travel) in the DOM tree. When an event happens on an element, it first runs the handlers on that element, then **bubbles up** to its parent, then the parent’s parent, and so on up to the root of the document.

This means the same event can be handled multiple times on different elements along the path from the target element to the root.

---

### How Event Bubbling Works:

1. You click on an element (the **target** element).
2. The event triggers any event listeners attached to that element.
3. Then the event bubbles up to the target’s parent element, triggering any listeners there.
4. It continues bubbling up through all ancestors until it reaches the root (`document` or `window`).

---

### Example:

```html
<div id="parent" style="padding:20px; background:lightblue;">
  Parent Div
  <button id="child">Click me</button>
</div>

<script>
  const parent = document.getElementById("parent");
  const child = document.getElementById("child");

  parent.addEventListener("click", () => {
    console.log("Parent clicked!");
  });

  child.addEventListener("click", () => {
    console.log("Child clicked!");
  });
</script>
```

**What happens when you click the button?**

- The **child's click listener** runs first → logs: `"Child clicked!"`
- Then the event **bubbles up** to the parent → parent's click listener runs → logs: `"Parent clicked!"`

---

### Stopping Event Bubbling

Sometimes you don’t want the event to bubble up and trigger parent handlers. You can stop it by calling:

```js
event.stopPropagation();
```

Example:

```js
child.addEventListener("click", (event) => {
  console.log("Child clicked!");
  event.stopPropagation(); // stops bubbling here
});
```

Now, clicking the child button will **only log** `"Child clicked!"` and **won't trigger** the parent listener.

---

## Capturing Listener

```js
<div id="outer">
  <div id="inner">
    <button id="btn">Click Me</button>
  </div>
</div>;

document.getElementById("outer").addEventListener(
  "click",
  () => {
    console.log("Outer DIV - Capturing");
  },
  true
); // Capturing

document.getElementById("outer").addEventListener(
  "click",
  () => {
    console.log("Outer DIV - Capturing");
  },
  { capture: true }
); // Capturing
```

> inner to outer: Bubbling
>
> outer to inner: Capturing

---

### Summary

- Event bubbling: event triggers on target element → then bubbles up through ancestors.
- Useful for event delegation.
- Can be stopped with `event.stopPropagation()`.
- `capture:true` 
