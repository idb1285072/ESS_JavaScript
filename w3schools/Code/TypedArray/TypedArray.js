const clamped = new Uint8ClampedArray(1);
clamped[0] = 300; // → 255 (clamped to max)
clamped[0] = -50; // → 0   (clamped to min)
clamped[0] = 123.7; // → 124 (rounded)
clamped[0] = 123.3; // → 123 (rounded)
console.log(clamped);

const regular = new Uint8Array(1);
regular[0] = 300; // → 44  (300 % 256)
regular[0] = -50; // → 206 (-50 % 256)
regular[0] = 123.7; // → 123 (truncated, not rounded)

const int8 = new Int8Array(1);
int8[0] = 300; // → 44  (300 % 256)
int8[0] = -50; // → -50
int8[0] = 123.7; // → 123 (truncated, not rounded)

console.log(Array.isArray(int8)); // false. because, typed array is not an array.
