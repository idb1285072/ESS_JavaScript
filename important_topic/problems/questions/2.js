const CONFIG = {};
Object.defineProperty(CONFIG, "API_KEY", {
  value: "abc123",
  writable: false,
  configurable: false,
  enumerable: true,
});
delete CONFIG.API_KEY; // cannot delete
CONFIG.API_KEY = "master"; // cannot change
console.log(CONFIG, Object.keys(CONFIG));

// shallow copy vs deep copy
const original = { nested: { value: 1 } };
const copy = Object.assign({}, original); // shallow copy
copy.nested.value = 99;
console.log(original.nested.value); // 99
const deepCopy = structuredClone(original); // deep copy
deepCopy.nested.value = 100;
console.log(original.nested.value);

const arr = [1, 2, 3];
arr.length = 5;
arr[7] = 10;
arr.forEach((x, i)=>{console.log(x, i)})