# Drag and Drop API

The **Drag and Drop API** is part of the **HTML5 Browser APIs** that lets you:

* Click & hold an element
* Move it somewhere else
* Drop it into a valid target and handle custom logic during this process.

It works with:

* **Mouse** (desktop browsers)
* **Touch events** (indirectly — needs extra handling)
* Both **text/data** and **DOM elements**

---

## Core Concepts

There are **two main actors**:

1. **Draggable Element** → the item you want to move (must have `draggable="true"`).
2. **Drop Target** → the area where it can be dropped (must handle certain events).

---

## Important Events

Here’s the **flow of drag-and-drop events**:

### **On the draggable element**

| Event       | Purpose                                      |
| ----------- | -------------------------------------------- |
| `dragstart` | Fires when dragging starts — set data here.  |
| `drag`      | Fires continuously while dragging.           |
| `dragend`   | Fires when drag stops (dropped or canceled). |

### **On the drop target**

| Event       | Purpose                                                                                 |
| ----------- | --------------------------------------------------------------------------------------- |
| `dragenter` | Fires when dragged item enters the target.                                              |
| `dragover`  | Fires repeatedly while hovering — must call `event.preventDefault()` to allow dropping. |
| `dragleave` | Fires when dragged item leaves the target.                                              |
| `drop`      | Fires when item is dropped — retrieve data here.                                        |


### **Common Methods:**

```js
event.dataTransfer.setData("text/plain", "Hello World"); // store
const text = event.dataTransfer.getData("text/plain");   // retrieve
event.dataTransfer.effectAllowed = "copyMove";           // allowed effects
event.dataTransfer.dropEffect = "move";                  // current drop effect
```

---

## Basic Example

```html
<div id="dragItem" draggable="true" style="width:100px;height:100px;background:red;"></div>
<div id="dropZone" style="width:200px;height:200px;border:2px dashed gray;margin-top:20px;"></div>

<script>
const dragItem = document.getElementById("dragItem");
const dropZone = document.getElementById("dropZone");

// DRAG START
dragItem.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", "This is my data");
  e.dataTransfer.effectAllowed = "move";
  dragItem.style.opacity = "0.5";
});

// DRAG END
dragItem.addEventListener("dragend", () => {
  dragItem.style.opacity = "1";
});

// DRAG OVER (must prevent default to allow drop)
dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropZone.style.background = "#eef";
});

// DRAG LEAVE
dropZone.addEventListener("dragleave", () => {
  dropZone.style.background = "";
});

// DROP
dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData("text/plain");
  console.log("Dropped data:", data);
  dropZone.style.background = "";
});
</script>
```

---

## **6. Best Practices**

* **Always set `draggable="true"`** on draggable elements.
* **Call `event.preventDefault()`** inside `dragover` to allow dropping.
* **Use CSS for visual feedback** (e.g., change border color when hovering).
* **Use `effectAllowed` and `dropEffect`** to indicate expected behavior.
* **Touch devices** need extra handling — native drag-and-drop isn’t consistent on mobile.
* **Avoid dragging sensitive data** without user awareness.


