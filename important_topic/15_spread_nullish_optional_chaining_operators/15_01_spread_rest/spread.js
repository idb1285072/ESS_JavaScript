const arr1 = [1, 2];
const arr2 = [...arr1, 3]; // [1, 2, 3]

const obj = { a: 1 };
const newObj = { ...obj, b: 2 }; // {a: 1, b: 2}

// function arguments
const numbers = [1, 2, 3];
console.log(Math.max(...numbers));

// array copy
const original = [1, 2, 3];
const copy = [...original];
console.log(copy);

// array concatenation
const a = [1, 2];
const b = [3, 4];
const combined = [...a, ...b];
console.log(combined);

// object copy
const user = { name: "Alice" };
const clone = { ...user };

// object merge
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = { ...obj1, ...obj2 };

// string to array
const chars = [..."hello"]; // ['h', 'e', 'l', 'l', 'o']

// Spread does not deep clone:
const nestedObject = { nested: { x: 1 } };
const shallowCopyedObject = { ...nestedObject };
shallowCopyedObject.nested.x = 99; // nestedObject also changes!
console.log(nestedObject);
console.log(shallowCopyedObject);
