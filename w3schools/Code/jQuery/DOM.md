### 🔧 Removing HTML Elements

| Task               | jQuery Syntax          | JavaScript Syntax                           |
| ------------------ | ---------------------- | ------------------------------------------- |
| **Remove Element** | `$("#id02").remove();` | `document.getElementById("id02").remove();` |

> ✅ In modern JavaScript, `.remove()` is a native method available on any DOM element (since ES5+), making it just as simple as jQuery.

---

### 🔍 Getting Parent Element

| Task                          | jQuery Syntax                         | JavaScript Syntax                                    |
| ----------------------------- | ------------------------------------- | ---------------------------------------------------- |
| **Get Parent Node Name**      | `$("#02").parent().prop("nodeName");` | `document.getElementById("02").parentNode.nodeName;` |
| **Get Actual Element Object** | `$("#02").parent();`                  | `document.getElementById("02").parentElement;`       |

> 🔸 `parentNode` can return text/comment nodes; prefer `parentElement` if you're targeting only HTML elements.

---
