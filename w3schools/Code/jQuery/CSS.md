### 🔧 Visibility Controls

| Operation        | jQuery              | JavaScript                                       |
| ---------------- | ------------------- | ------------------------------------------------ |
| **Hide Element** | `myElement.hide();` | `myElement.style.display = "none";`              |
| **Show Element** | `myElement.show();` | `myElement.style.display = "";` *(or `"block"`)* |

> ℹ️ `.hide()` and `.show()` in jQuery toggle `display` style behind the scenes. JavaScript gives you full control over which display value to apply (`block`, `flex`, etc.).

---

### 🎨 Styling Elements

| Operation               | jQuery                                               | JavaScript                                                 |
| ----------------------- | ---------------------------------------------------- | ---------------------------------------------------------- |
| **Set font size**       | `$("#demo").css("font-size", "35px");`               | `document.getElementById("demo").style.fontSize = "35px";` |
| **Set multiple styles** | `$("#demo").css({ color: "red", fontSize: "20px" })` |                                                            |

```js
const el = document.getElementById("demo");
el.style.color = "red";
el.style.fontSize = "20px";
```

> ✅ In JavaScript, you must use **camelCase** style properties (`fontSize`, not `font-size`).

