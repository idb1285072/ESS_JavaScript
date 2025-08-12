In JavaScript, both `>>` and `>>>` are **bitwise shift operators**, but they behave differently when it comes to **signed vs. unsigned numbers**.

---

## 🔹 `>>` — **Signed Right Shift**

* Keeps the **sign bit (leftmost bit)** intact.
* Shifts bits to the right.
* **Preserves negative numbers**.

```js
console.log(8 >> 2);   // 2   → 1000 >> 2 = 0010
console.log(-8 >> 2);  // -2  → sign is preserved
```

✅ Good for signed integers (positive and negative).

---

## 🔹 `>>>` — **Unsigned Right Shift**

* **Fills with zeros** from the left.
* **Does not preserve sign**.
* Converts result to **unsigned 32-bit integer**.

```js
console.log(8 >>> 2);   // 2   → same as >>
console.log(-8 >>> 2);  // 1073741822 → huge positive number
```

✅ Used when you want to treat numbers as **unsigned**.

---

### 📘 Binary Visualization

```js
//  8 in 32-bit binary: 00000000 00000000 00000000 00001000
// ~8 in 32-bit binary: 11111111 11111111 11111111 11110111 (1's complement)
//                                                       +1
// -8 in 32-bit binary: 11111111 11111111 11111111 11111000 (2's complement)

console.log(-8 >> 2);   // -2
// After >> : 11111111 11111111 11111111 11111110  (Still negative)

console.log(-8 >>> 2);  // 1073741822
// After >>>: 00111111 11111111 11111111 11111110  (Now positive)
```

---

## 📊 Summary Table

| Operator | Name                 | Sign Bit Preserved | Result Type         | Example (`-8`) |
| -------- | -------------------- | ------------------ | ------------------- | -------------- |
| `>>`     | Signed Right Shift   | ✅ Yes              | Signed 32-bit int   | `-2`           |
| `>>>`    | Unsigned Right Shift | ❌ No (fills 0s)    | Unsigned 32-bit int | `1073741822`   |

---

## ✅ Use Cases

| Operator | When to Use                                                                   |
| -------- | ----------------------------------------------------------------------------- |
| `>>`     | Working with signed integers (positive/negative)                              |
| `>>>`    | Bit-level manipulation, hash codes, cryptography, treating values as unsigned |

---
