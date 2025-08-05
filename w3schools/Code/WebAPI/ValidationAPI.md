# Validation API

## 1. Overview

The HTML5 Constraint Validation API provides DOM methods and properties on form elements to:

* Check input validity.
* Customize validation behavior.
* Display context-specific error messages.
* Handle specific validation failures (e.g., range, type, pattern mismatch).

---

## 2. Methods

### 2.1 `checkValidity()`

**Description:**
Checks whether an input element meets all validation constraints defined in its attributes (e.g., `required`, `min`, `max`, `pattern`, etc.).

**Syntax:**

```javascript
element.checkValidity();
```

**Returns:**

* `true` if the element's value is valid.
* `false` if any constraint fails.

**Example:**

```html
<input id="quantity" type="number" min="1" max="10" required>
<button onclick="validateInput()">Submit</button>
<p id="result"></p>

<script>
function validateInput() {
  const input = document.getElementById("quantity");
  if (!input.checkValidity()) {
    document.getElementById("result").textContent = input.validationMessage;
  } else {
    document.getElementById("result").textContent = "Input is valid.";
  }
}
</script>
```

---

### 2.2 `setCustomValidity(message)`

**Description:**
Sets a custom validation error message. When a non-empty message is set, the element is considered invalid until the message is cleared.

**Syntax:**

```javascript
element.setCustomValidity("Custom error message");
```

**Example:**

```javascript
const input = document.getElementById("quantity");
if (input.value < 1) {
  input.setCustomValidity("Value must be at least 1.");
} else {
  input.setCustomValidity(""); // Clear error
}
```

---

## 3. Properties

### 3.1 `validity`

**Description:**
Returns a `ValidityState` object containing multiple boolean properties that describe the reason for an element’s invalid state.

**Syntax:**

```javascript
element.validity;
```

**Common Sub-properties:**

| Property          | Description                                                    |
| ----------------- | -------------------------------------------------------------- |
| `valueMissing`    | `true` if the field is required but empty.                     |
| `typeMismatch`    | `true` if the value is not valid for the specified input type. |
| `patternMismatch` | `true` if the value does not match the regex in `pattern`.     |
| `rangeUnderflow`  | `true` if the value is less than the `min` attribute.          |
| `rangeOverflow`   | `true` if the value exceeds the `max` attribute.               |
| `stepMismatch`    | `true` if the value does not align with the `step` attribute.  |
| `tooLong`         | `true` if the input exceeds `maxlength`.                       |
| `customError`     | `true` if a custom error message is set.                       |
| `valid`           | `true` if the element is valid.                                |

**Example:**

```javascript
if (input.validity.rangeOverflow) {
  console.log("The value is too large.");
}
```

---

### 3.2 `validationMessage`

**Description:**
Returns the message that will be shown to the user if the input is invalid. This could be the browser’s default message or a custom message set via `setCustomValidity()`.

**Syntax:**

```javascript
element.validationMessage;
```

**Example:**

```javascript
if (!input.checkValidity()) {
  alert(input.validationMessage);
}
```

---

### 3.3 `willValidate`

**Description:**
Indicates whether the element will be validated when the form is submitted. Disabled elements and some unsupported input types return `false`.

**Syntax:**

```javascript
element.willValidate;
```

---

## 4. Use Cases & Examples

### Example: Handling `rangeOverflow`

```html
<input id="score" type="number" max="100">
<button onclick="checkRange()">Check</button>
<p id="feedback"></p>

<script>
function checkRange() {
  const input = document.getElementById("score");
  const output = document.getElementById("feedback");
  if (input.validity.rangeOverflow) {
    output.textContent = "Value too high.";
  } else {
    output.textContent = "Value is acceptable.";
  }
}
</script>
```

### Example: Handling `rangeUnderflow`

```html
<input id="score" type="number" min="10">
<button onclick="checkRange()">Check</button>
<p id="feedback"></p>

<script>
function checkRange() {
  const input = document.getElementById("score");
  const output = document.getElementById("feedback");
  if (input.validity.rangeUnderflow) {
    output.textContent = "Value too low.";
  } else {
    output.textContent = "Value is acceptable.";
  }
}
</script>
```

---

## 5. Summary

| Method / Property     | Purpose                                                  |
| --------------------- | -------------------------------------------------------- |
| `checkValidity()`     | Checks if an input is valid according to constraints     |
| `setCustomValidity()` | Sets or clears a custom validation error message         |
| `validity`            | Object containing boolean flags for each validation rule |
| `validationMessage`   | Returns the current validation message                   |
| `willValidate`        | Indicates whether the input will be validated            |

---

## 6. Notes

* Always include `required`, `min`, `max`, and `pattern` attributes where applicable to define constraints declaratively.
* `checkValidity()` is often used in custom form validation before programmatic submission.
* Always provide user-friendly and localized messages using `setCustomValidity()` when possible.
* Use `validity` properties to provide detailed validation feedback.

---
