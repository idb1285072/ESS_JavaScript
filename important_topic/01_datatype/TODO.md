# Corner Cases

## 🧠 1. **Type Coercion & Implicit Conversion**

### 🔸 `[] + []`

- Returns `""` (empty string) — arrays are coerced to strings and concatenated.

### 🔸 `[] + {}`

- Returns `"[object Object]"` — array becomes `""`, object becomes `"[object Object]"`.

### 🔸 `{}` + \[]

- Can be interpreted as block + expression: result is `0`.

### 🔸 `[] == ![]`

- True!

  - `![]` → `false`
  - `[] == false` → `true` due to coercion

### 🔸 `null == undefined`

- `true` — they’re considered loosely equal by design.

### 🔸 `null === undefined`

- `false` — different types.

---

## 🧠 2. **Equality (`==`) vs Strict Equality (`===`)**

### 🔸 `0 == false` → `true`

### 🔸 `"" == 0` → `true`

### 🔸 `"" == false` → `true`

### 🔸 `[] == false` → `true`

### 🔸 `[0] == false` → `true`

### 🔸 `[null] == 0` → `true`

- These happen because `==` performs **type coercion** (abstract equality), while `===` doesn't.

---

## 🧠 3. **Objects and String Coercion**

### 🔸 `[1,2] + [3,4]`

- Returns `"1,23,4"` — both arrays are coerced to strings: `'1,2' + '3,4'`

### 🔸 `{a: 1} + {b: 2}`

- Often returns `"[object Object][object Object]"`, but may behave differently depending on context (expression vs block).

---

## 🧠 4. **Falsy Truthy Confusions**

### 🔸 `false == ''` → `true`

### 🔸 `false == []` → `true`

### 🔸 `false == undefined` → `false`

> Anything **falsy** (`0`, `''`, `null`, `undefined`, `NaN`, `false`) might behave **truthy** or equal to something due to coercion.

---

## 🧠 5. **NaN Corner Cases**

### 🔸 `NaN == NaN` → `false`

### 🔸 `NaN === NaN` → `false`

- Only `Number.isNaN(NaN)` returns true.

---

## 🧠 6. **Infinity & Division Quirks**

### 🔸 `1 / 0` → `Infinity`

### 🔸 `-1 / 0` → `-Infinity`

### 🔸 `0 / 0` → `NaN`

- JavaScript doesn't throw division-by-zero errors — it returns IEEE-754 values.

---

## 🧠 7. **typeof Pitfalls**

### 🔸 `typeof null` → `'object'`

- Legacy bug that still exists for backward compatibility.

### 🔸 `typeof NaN` → `'number'`

- Because `NaN` is still a number (Not-A-Number is ironically a number).

---

## 🧠 8. **Array & Object Confusion**

### 🔸 `typeof []` → `'object'`

- Arrays are technically objects.

### 🔸 `typeof function() {}` → `'function'`

- Only functions get their own type result from `typeof`.

### 🔸 `[] instanceof Object` → `true`

### 🔸 `[] instanceof Array` → `true`

---

## 🧠 9. **Empty Values & JSON**

### 🔸 `JSON.stringify(undefined)` → `undefined`

### 🔸 `JSON.stringify([undefined])` → `[null]`

- In arrays, `undefined` is serialized as `null`; in objects, it's dropped.

---

## 🧠 10. **Autoboxing Pitfalls**

### 🔸 `'hello'.length` → `5`

- JS automatically wraps strings in `String` object temporarily.

### 🔸 `new Boolean(false)` is truthy

- Because it’s an object, not a primitive `false`.

---

## 🧠 11. **Function vs Object Confusion**

### 🔸 `typeof class A {}` → `'function'`

- Classes are technically special functions.

---

## 🧠 12. **Edge Comparison**

### 🔸 `[] == ![]` → `true`

- You wouldn’t expect an empty array to be equal to its negation.

### 🔸 `{} + []` vs `[] + {}`

- Highly context-sensitive depending on where it's placed (statement vs expression)

---

## 🧠 Summary: What to Take Away

| Corner Case Type       | Why It’s Tricky                       |
| ---------------------- | ------------------------------------- |
| Implicit coercion      | Automatic, hard to debug              |
| Equality rules (`==`)  | Counterintuitive behavior             |
| `typeof` quirks        | Legacy issues, special cases          |
| JSON serialization     | Drops or transforms data              |
| Array/Object confusion | Similar structure, different behavior |
