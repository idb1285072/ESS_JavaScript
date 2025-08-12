# Event Handling

##

## Event Delegation

- attach a single event handler to a parent element to manage events of its children

```html
<ul id="menu">
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
</ul>
```

```js
document.getElementById("menu").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});
```

- fewer event listeners = better performance
- works with dynamically added elements
- cleaner, scalable code
