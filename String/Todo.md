## **Foundational Concepts**

* **Immutability**: Strings cannot be changed — every method returns a new string.
* **Unicode & UTF-16 encoding**: Understand surrogate pairs, combining characters.
* **String vs String Object**: `typeof "abc" === "string"` vs `typeof new String("abc") === "object"`

---

## 2. **Core String Methods (Full API Mastery)**

### 🔡 **Character Access**

* `.charAt(index)`
* `.charCodeAt(index)`
* `.codePointAt(index)` ← handles Unicode code points (e.g., emoji)

### ✂️ **Substring Extraction**

* `.slice(start, end)`
* `.substring(start, end)`
* `.substr(start, length)` ← legacy, but worth knowing

**Edge Cases**: Negative indices, order of parameters, out-of-bound indices.

### 🔄 **Concatenation & Modification**

* `.concat()`
* `.repeat(n)`
* `.padStart(targetLength, padString)`
* `.padEnd(targetLength, padString)`
* `.trim()`, `.trimStart()`, `.trimEnd()`

### 🔍 **Searching & Matching**

* `.indexOf(searchValue, fromIndex)`
* `.lastIndexOf(searchValue)`
* `.includes(searchValue)`
* `.startsWith(searchValue)`
* `.endsWith(searchValue)`
* `.match(regex)` ← **RegExp**
* `.matchAll(regex)` ← ES2020
* `.search(regex)`

### 🔧 **Replacement**

* `.replace(searchValue, replaceValue)`
* `.replaceAll(searchValue, replaceValue)` ← ES2021

🔸 **Mastery tip**: Use functions as the `replaceValue` argument in `.replace()` for powerful transformations.

### 🪓 **Splitting & Joining**

* `.split(separator, limit)`

**Use cases**: CSV parsing, tokenization, word extraction.

---

## 🧙 3. **Advanced Use Cases & Techniques**

### 🔁 **Chaining for Text Transformation**

```js
str.trim().toLowerCase().replace(/\s+/g, "-");
```

### 🔍 **Regex Mastery for `.match()` / `.replace()` / `.split()`**

* Lookaheads & lookbehinds
* Named capturing groups
* Flags like `/g`, `/i`, `/m`, `/u`
* Unicode property escapes (`/\p{L}/u`)
* Non-greedy vs greedy matches

### 📐 **Custom String Parsers**

* CSV parser (handling quoted strings)
* INI/JSON/XML parser using string methods and regex
* Template engines (`"Hello, {{name}}"` → inject variables)

---

## 🧰 4. **Performance & Edge Case Handling**

* Understand performance of `.split().join()` vs `.replace()`
* Unicode-aware operations (e.g., emoji with surrogate pairs)
* Line breaks: `\r\n` vs `\n` vs `\r`
* Normalization: `.normalize()` for accented characters

---

## 🌍 5. **Internationalization & Encoding**

* `.localeCompare()` ← Compare strings using locale-sensitive sort order
* `.toLocaleUpperCase(locale)`
* `.normalize(form)` ← NFD, NFC, NFKD, NFKC for Unicode normalization

---

## 📦 6. **Supplement with External Tools**

* Use **Lodash**, **XRegExp**, or **string.js** for extended functionality
* Learn **TextEncoder** / **TextDecoder** for encoding strings into UTF-8, etc.

---

## 🧠 7. **Practice Projects to Cement Mastery**

* ✅ Build a Markdown-to-HTML converter
* ✅ Write a syntax highlighter using regex/string methods
* ✅ Create a mini template engine
* ✅ Build a string-based diff tool
* ✅ Implement a string compression algorithm (e.g., Run Length Encoding)

---
