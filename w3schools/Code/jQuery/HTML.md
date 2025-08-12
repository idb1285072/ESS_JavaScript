### 🔧 Common DOM Content Operations

| Operation    | jQuery Syntax                      | JavaScript Syntax                                     |
| ------------ | ---------------------------------- | ----------------------------------------------------- |
| **Set Text** | `myElement.text("Hello Sweden!");` | `myElement.textContent = "Hello Sweden!";`            |
| **Get Text** | `myText = $("#02").text();`        | `myText = document.getElementById("02").textContent;` |
| **Set HTML** | `myElement.html("<p>Hello</p>");`  | `myElement.innerHTML = "<p>Hello</p>";`               |
| **Get HTML** | `content = myElement.html();`      | `content = myElement.innerHTML;`                      |

---

### 🧠 Key Notes

* `text()` (jQuery) ⇔ `textContent` (JS): Plain text without HTML parsing.
* `html()` (jQuery) ⇔ `innerHTML` (JS): Parses HTML inside the element.
* Native JavaScript avoids jQuery overhead, making it faster and leaner.

---

