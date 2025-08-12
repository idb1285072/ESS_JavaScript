// Array
const original = [1, 2, 3];
const copy = [...original]; // copy
console.log(copy);

const a = [1, 2, 3];
const b = [4, 5];
const c = [...a, ...b]; // concatenate
console.log(c);

const [first, ...rest] = [1, 2, 3, 4];
console.log(rest); // destructure

const userName = "Murad";
const chars = [...userName]; // string to array
console.log(chars);
