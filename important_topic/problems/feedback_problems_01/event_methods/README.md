# Common Event methods in JavaScript

Most used JavaScript event methods:

- `addEventListener()`
- `removeEventListener()`
- `preventDefault()`
- `stopPropagation()`
- `stopImmediatePropagation()`

---

## `addEventListener()`

syntax

```js
element.addEventListener(event, handler, options?);
```

- `addEventListener()` does not overwrite existing event handlers
- `options`
  - `capture`:`true` for capturing phase
  - `once`:`true` if the listener should be invoked at most once
  - `passive`:`true` will never call `preventDefault()`

> - For **scroll** and **touch** events, browsers normally wait to see if `preventDefault()` is called before scrolling.
> - With `passive: true`, the browser doesn’t wait, making scrolling smoother and faster.

```js
const button = document.querySelector("button");
button.addEventListener(
  "click",
  function handleClick(e) {
    console.log("Button clicked once in capture phase");
  },
  { once: true, capture: true }
);
```

---

## `removeEventListener()`

syntax

```js
element.removeEventListener(event, handler);
```

> - You must pass the same function reference used in `addEventListener`.
> - Anonymous functions cannot be removed directly.

---

## `preventDefault()`

syntax

```js
event.preventDefault();
```

Examples

```js
<form id="myForm">
  <input type="text" required>
  <button type="submit">Submit</button>
</form>

<script>
const form = document.getElementById('myForm');
form.addEventListener('submit', function(e) {
  e.preventDefault(); // stops form submission
  console.log('Form submission prevented');
});
</script>
```

## `stopPropagation()`
- stop bubbling
```html
<div id="navbar" style="padding:20px; border:1px solid black;">
  <button id="menuBtn">Menu</button>
  <div id="dropdown" style="display:none; border:1px solid blue; padding:10px; margin-top:5px;">
    <p>Option 1</p>
    <p>Option 2</p>
    <p>Option 3</p>
  </div>
</div>
```

```js
const menuBtn = document.getElementById('menuBtn');
const dropdown = document.getElementById('dropdown');

menuBtn.addEventListener('click', (e) => {
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  e.stopPropagation(); 
});

dropdown.addEventListener('click', (e) => {
  e.stopPropagation();
});

document.addEventListener('click', () => {
  dropdown.style.display = 'none';
});
```
---
# `stopImmediatePropagation()`
- stop bubbling
- stop other listeners on the same element
```js
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', (e) => {
  if (!validateForm()) {
    e.stopImmediatePropagation(); // Stop other listeners from firing
    alert("Form validation failed!");
  }
});

// Analytics tracking listener (won’t fire if validation fails)
submitBtn.addEventListener('click', () => {
  console.log("Form submitted for analytics tracking.");
});
```