# Clipboard API

The **Clipboard API** is a modern **Browser API** that lets web apps read from and write to the system clipboard.
It replaces older, hacky methods (`document.execCommand('copy')`) with a cleaner, **promise-based** API.

---

## Core Methods

### **a) Write Text**

```js
navigator.clipboard.writeText("Hello from Clipboard API!")
  .then(() => {
    console.log("Text copied to clipboard!");
  })
  .catch(err => {
    console.error("Failed to copy: ", err);
  });
```

* Returns a Promise that resolves on success.
* Works for plain text only.

---

### **b) Read Text**

```js
navigator.clipboard.readText()
  .then(text => {
    console.log("Clipboard contains:", text);
  })
  .catch(err => {
    console.error("Failed to read clipboard: ", err);
  });
```

* Returns a Promise with clipboard text.
* May show a **browser permission prompt**.

---

### **c) Write Rich Content (Advanced)**

You can write images, HTML, or custom formats using `ClipboardItem`:

```js
const blob = new Blob(["<b>Bold HTML Text</b>"], { type: "text/html" });
const item = new ClipboardItem({ "text/html": blob });

navigator.clipboard.write([item])
  .then(() => console.log("HTML copied!"))
  .catch(err => console.error("Error copying HTML:", err));
```

* This allows **copying formatted HTML**, images, etc.
* Browser support is more limited for non-text formats.

---

### **d) Read Rich Content (Advanced)**

```js
navigator.clipboard.read()
  .then(items => {
    for (const item of items) {
      for (const type of item.types) {
        item.getType(type).then(blob => {
          console.log("Clipboard item type:", type);
          // You can process the blob here (e.g., images)
        });
      }
    }
  })
  .catch(err => console.error("Read failed:", err));
```

* Returns `ClipboardItem[]` objects.
* You can loop through formats and read blobs.

---

## Permissions

Clipboard API permissions are managed through the **Permissions API**:

```js
navigator.permissions.query({ name: "clipboard-read" }).then(result => {
  console.log("Clipboard read permission:", result.state);
});
```

Possible states:

* `granted`
* `denied`
* `prompt`

---

## Practical Example: Copy & Paste UI

```html
<input id="inputText" class="form-control" placeholder="Type something...">
<button id="copyBtn">Copy</button>
<button id="pasteBtn">Paste</button>

<script>
document.getElementById("copyBtn").addEventListener("click", () => {
  const text = document.getElementById("inputText").value;
  navigator.clipboard.writeText(text)
    .then(() => alert("Copied!"))
    .catch(err => alert("Copy failed: " + err));
});

document.getElementById("pasteBtn").addEventListener("click", () => {
  navigator.clipboard.readText()
    .then(text => {
      document.getElementById("inputText").value = text;
    })
    .catch(err => alert("Paste failed: " + err));
});
</script>
```

---

