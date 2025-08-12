console.log(typeof "John"); // string
console.log(typeof ("John" + "Doe")); // string
console.log(typeof 3.14); // number
console.log(typeof 33); // number
console.log(typeof (33 + 66)); // number
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof 1234n); // bigint
console.log(typeof Symbol()); // symbol
console.log(typeof x); // undefined
console.log(typeof undefined); // undefined
console.log(typeof null); // object
// In JavaScript, null is a primitive value. However, typeof returns "object". This is a well-known bug in JavaScript and has historical reasons.

console.log(typeof { name: "John" }); // object
console.log(typeof [1, 2, 3, 4]); // object
console.log(typeof new Map()); // object
console.log(typeof new Set()); // object
console.log(typeof function () {}); // function

const fruitArray = ["apples", "bananas", "oranges"];
console.log(Array.isArray(fruitArray));
console.log(fruitArray instanceof Array);

const date = new Date();
const fruitMap = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
const fruitSet = new Set(["apples", "bananas", "oranges"]);
console.log(date instanceof Date);
console.log(fruitMap instanceof Map);
console.log(fruitSet instanceof Set);

// null vs undefined
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(null == undefined); // true
console.log(null === undefined); // false

// constructor property
console.log({ firstName: "Murad", lastName: "Hossen", age: 28 }.constructor); // [Function: Object]
console.log(
  { firstName: "Murad", lastName: "Hossen", age: 28 }.constructor.name
); // Object
console.log(
  { firstName: "Murad", lastName: "Hossen", age: 28 }.constructor.name ==
    "Object"
); // true
console.log(
  { firstName: "Murad", lastName: "Hossen", age: 28 }.constructor.name ===
    "Object"
); // true
console.log([1, 2, 3, 4].constructor.name === "Array");
console.log(new Date().constructor.name === "Date");
console.log(new Set().constructor.name === "Set");
console.log(new Map().constructor.name === "Map");
console.log(function () {}.constructor.name === "Function");
console.log(new Array().constructor === Array) // true
