## Web History API

Core properties & methods on `window.history`:

* `history.length` — number of entries in the session history.
* `history.back()` — go one step back.
* `history.forward()` — go one step forward.
* `history.go(n)` — move `n` steps (negative for back, positive for forward).
* `history.state` — current history entry's state object.
* `history.pushState()` SPA
* `history.replaceState()`

Example:

```js
console.log(history.length);
history.go(-1); // same as back()
window.history.go(0); // reload current page
```