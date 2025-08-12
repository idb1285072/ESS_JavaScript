# Typed Array
- Designed for handling raw binary data.
- fixed length
- fixed typed elements
- Typed Arrays are highly suitable for
   - WebGL and Canvas
   - File APIs
   - Media APIs
   - WebSockets
- Introduced in ES6
---

### What does "clamped format" mean?

**Clamping** means that when you assign a value to an element of the array, it will automatically:
1. **Be converted to a number (if it's not already).**
2. **Be rounded to the nearest integer.**
3. **Be limited to the range 0–255:**
   * Values **less than 0** are clamped to **0**.
   * Values **greater than 255** are clamped to **255**.
   * Values **in between** are rounded to the nearest integer.

---
## Typed Array Types

| Name              | Min                  | Max                    | Bytes | Type                |
|-------------------|----------------------|-------------------------|--------|---------------------|
| `Int8Array`       | -128                 | 127                     | 1      | byte                |
| `Uint8Array`      | 0                    | 255                     | 1      | octet               |
| `Uint8ClampedArray` | 0                  | 255                     | 1      | octet               |
| `Int16Array`      | -32,768              | 32,767                  | 2      | short               |
| `Uint16Array`     | 0                    | 65,535                  | 2      | unsigned short      |
| `Int32Array`      | -2,147,483,648       | 2,147,483,647           | 4      | long                |
| `Uint32Array`     | 0                    | 4,294,967,295           | 4      | unsigned long       |
| `BigInt64Array`   | -2⁶³                 | 2⁶³ − 1                 | 8      | bigint              |
| `BigUint64Array`  | 0                    | 2⁶⁴ − 1                 | 8      | unsigned bigint     |
| `Float16Array`    | -65,504              | 65,504                  | 2      | unrestricted half   |
| `Float32Array`    | ~-3.4×10³⁸           | ~3.4×10³⁸               | 4      | unrestricted float  |
| `Float64Array`    | ~-1.8×10³⁰⁸          | ~1.8×10³⁰⁸              | 8      | unrestricted double |

---

### Example: `Uint8ClampedArray` vs `Uint8Array`

```javascript
const clamped = new Uint8ClampedArray(1);
clamped[0] = 300;     // → 255 (clamped to max)
clamped[0] = -50;     // → 0   (clamped to min)
clamped[0] = 123.7;   // → 124 (rounded)
clamped[0] = 123.3;   // → 123 (rounded)

const regular = new Uint8Array(1);
regular[0] = 300;     // → 44  (300 % 256)
regular[0] = -50;     // → 206 (-50 % 256)
regular[0] = 123.7;   // → 123 (truncated, not rounded)

const int8 = new Int8Array(1);
int8[0] = 300;     // → 44  (300 % 256)
int8[0] = -50;     // → -50
int8[0] = 123.7;   // → 123 (truncated, not rounded)
```

### Why does this exist?

`Uint8ClampedArray` is especially useful in **image processing**, like with the **Canvas API**, where pixel values (R, G, B, A) must stay within \[0, 255]. It prevents accidental overflow or underflow that could corrupt color data.

---

### Summary

| Feature          | `Uint8ClampedArray`       | `Uint8Array`         | `Int8Array`                |
| ---------------- | ------------------------- | -------------------- | -------------------------- |
| **Value range**  | 0 to 255                  | 0 to 255             | **−128 to 127**            |
| **Values < min** | Clamped to **0**          | Wrapped (modulo 256) | Wrapped (two's complement) |
| **Values > max** | Clamped to **255**        | Wrapped (modulo 256) | Wrapped (two's complement) |
| **Float values** | **Rounded**               | Truncated (floored)  | Truncated (floored)        |
| **Signed?**      | ❌ No (Unsigned)         | ❌ No (Unsigned)     | ✅ Yes (Signed)            |
| **Use case**     | Image data (e.g., Canvas) | General-purpose data | Compact signed data        |

---

## Floating Numbers

| Typed Array     | Precision Level                     | Value Range                |
|------------------|--------------------------------------|-----------------------------|
| `Float16Array`   | Half precision – ~3 significant digits | -65,504 to 65,504          |
| `Float32Array`   | Normal precision – ~7 significant digits | ~-3.4×10³⁸ to ~3.4×10³⁸  |
| `Float64Array`   | Double precision – ~15 significant digits | ~-1.8×10³⁰⁸ to ~1.8×10³⁰⁸ |


