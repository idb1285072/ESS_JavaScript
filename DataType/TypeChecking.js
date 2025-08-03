// typeof - best for simple primitive
console.log(typeof 42); // number
console.log(typeof "hello"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object ❗
console.log(typeof Symbol()); // symbol
console.log(typeof 45434343433534353n); // bigint
console.log(typeof {}); // object
console.log(typeof []); // object ❗
console.log(typeof function () {}); // function ✅
console.log(typeof new Map()); // object
console.log(typeof new Set()); // object
console.log(typeof new Promise(() => {})); // object

// undefined and null
console.log(null == undefined); // true
console.log(null === undefined); // false

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);

// instanceof - Object instance detection
console.log([] instanceof Array); // true
console.log({} instanceof Object); // true
console.log(new Date() instanceof Date); // true
console.log();

// Array.isArray() - best for Array
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("text")); // false

// prototype - Deep and reliable type checking
console.log(Object.prototype.toString.call([]));
console.log(Object.prototype.toString.call({}));
console.log(Object.prototype.toString.call(null));
console.log(Object.prototype.toString.call(undefined));
console.log(Object.prototype.toString.call(123));
console.log(Object.prototype.toString.call(true));
console.log(Object.prototype.toString.call(new Date()));

// constructor property - Used for known types, but not safe always
console.log((123).constructor === Number); // true
console.log("a".constructor === String); // true
console.log([].constructor === Array); // true