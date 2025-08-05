// Rest parameter
const sum = (...args) => {
  let total = 0;
  for (let arg of args) {
    total += arg;
  }
  return total;
};

console.log(sum(1, 3, 6));
console.log(sum(1, 3, 6, 5, 6, 43, 654, 5));

// Destructuring with Rest
const [head, ...tail] = [1, 2, 3, 4];
console.log(head, tail);
const { a, ...rest } = { a: 1, b: 2, c: 3 };
console.log(a, rest);

// Rest should always be the last parameter in a function

// Spread Operator
const nums1 = [1, 2];
const nums2 = [3, 4];
const combined = [...nums1, ...nums2]; // [1, 2, 3, 4]
console.log(combined);
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 2 }
console.log(merged);

const chars = [..."Hello"]; // ['H', 'e', 'l', 'l', 'o']
console.log(chars);

// function calls
function sum(a, b, c) { return a + b + c; }
const nums = [1, 2, 3];
sum(...nums); // 6


// Spread vs Rest
// Spread: Unpack values
const arr = [1, 2, 3];
Math.max(...arr); // Spread turns [1,2,3] → 1, 2, 3

// Rest: Pack values
function sum(...args) {
  return args.reduce((a, b) => a + b, 0); // args = [1,2,3]
}
sum(1, 2, 3);

