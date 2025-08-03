# ✅ Type Conversion in JavaScript

**Type Conversion** in JavaScript refers to changing a value from one data type to another.

There are two types:

1. **Implicit Conversion** (Type Coercion)
2. **Explicit Conversion** (Manual)

---

## 🔹 1. Implicit Conversion (Type Coercion)

JavaScript **automatically converts types** when needed, especially in expressions.

### ✅ Examples:

#### 👉 Numbers + Strings

```javascript
'5' + 2     // '52'  (Number → String)
'5' - 2     // 3     (String → Number)
'5' * '2'   // 10    (String → Number)
```

#### 👉 Boolean Conversion

```javascript
true + 1    // 2
false + 1   // 1
'5' == 5    // true   (Loose equality uses coercion)
0 == false  // true
null == undefined // true
```

### ⚠️ Problems with Implicit Conversion:

* Can be **unpredictable** and cause **bugs**
* Prefer **strict comparison** (`===`) to avoid coercion

---

## 🔹 2. Explicit Conversion (Manual Type Casting)

You **manually convert** values using JavaScript global functions or operators.

---

### 🔸 To **String**

| Method           | Example            | Result  |
| ---------------- | ------------------ | ------- |
| `String(value)`  | `String(123)`      | `'123'` |
| `.toString()`    | `(123).toString()` | `'123'` |
| Template Literal | `` `${123}` ``     | `'123'` |

```javascript
String(true);         // 'true'
(42).toString();      // '42'
`${null}`;            // 'null'
```

---

### 🔸 To **Number**

| Method             | Example              | Result |
| ------------------ | -------------------- | ------ |
| `Number(value)`    | `Number("123")`      | `123`  |
| Unary `+` operator | `+"456"`             | `456`  |
| `parseInt()`       | `parseInt("42px")`   | `42`   |
| `parseFloat()`     | `parseFloat("3.14")` | `3.14` |

```javascript
Number(true);         // 1
Number(false);        // 0
Number("abc");        // NaN
parseInt("100abc");   // 100
parseFloat("3.14px"); // 3.14
+"10" + 5;            // 15
```

---

### 🔸 To **Boolean**

| Method           | Example      | Result |
| ---------------- | ------------ | ------ |
| `Boolean(value)` | `Boolean(1)` | `true` |
| Double `!!`      | `!!"text"`   | `true` |

#### ✅ Truthy Values:

Everything except: `false`, `0`, `-0`, `""`, `null`, `undefined`, `NaN`

```javascript
Boolean("Hello");     // true
Boolean("");          // false
!!123;                // true
!!null;               // false
```

---

## 🔹 3. Type Conversion Table

| Value        | `Number()` | `String()`          | `Boolean()` |
| ------------ | ---------- | ------------------- | ----------- |
| `undefined`  | `NaN`      | `'undefined'`       | `false`     |
| `null`       | `0`        | `'null'`            | `false`     |
| `true`       | `1`        | `'true'`            | `true`      |
| `false`      | `0`        | `'false'`           | `false`     |
| `''` (empty) | `0`        | `''`                | `false`     |
| `'123'`      | `123`      | `'123'`             | `true`      |
| `'abc'`      | `NaN`      | `'abc'`             | `true`      |
| `[]`         | `0`        | `''`                | `true`      |
| `[123]`      | `123`      | `'123'`             | `true`      |
| `{}`         | `NaN`      | `'[object Object]'` | `true`      |

---

## 🔹 4. Best Practices

✅ Use **strict comparison (`===`)** to avoid implicit coercion.

✅ Use **explicit conversion** to make code predictable.

✅ Watch out for `null`, `undefined`, `NaN` — they often behave unexpectedly.

---

## ✅ Summary

| Conversion Type | Method                              | Best For                |
| --------------- | ----------------------------------- | ----------------------- |
| Implicit        | Automatic (e.g., `'5' - 2`)         | Short expressions       |
| Explicit        | `String()`, `Number()`, `Boolean()` | Clarity and reliability |
| Reliable Checks | Use `===` instead of `==`           | Preventing bugs         |
