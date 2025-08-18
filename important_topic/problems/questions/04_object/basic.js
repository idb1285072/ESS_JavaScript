let person = { name: "Tom" };
Object.seal(person);
delete person.name;
console.log(person.name);

// seal can modify, cannot add or delete
// freeze cannot add, delete or modify

let obj1 = {a: 1};
let obj2 = {b: 2};
let result = Object.assign(obj1, obj2);
console.log(result);

let obj = {a: 10};
Object.defineProperty(obj, "b", {value: 20, writable: false});
obj.b = 30;
console.log(obj.b);

// let obj = {x: 1};
// let proto = {y: 2};
// Object.setPrototypeOf(obj, proto);
// console.log(obj.y);

// let proto = {z: 3};
// let obj = Object.create(proto);
// console.log(obj.z);

let obj = {x: 10};
console.log(obj.hasOwnProperty("x"));
console.log(obj.hasOwnProperty("toString"));
console.log("toString" in obj);

// let obj = {a: 1};
// Object.preventExtensions(obj);
// obj.b = 2;
// console.log(obj.b);

let obj = {x: 5, y: 10};
let clone = structuredClone(obj);
clone.x = 99;
console.log(obj.x);

// let obj = {value: 100};
// let handler = {
//   get: (target, prop) => prop in target ? target[prop] : "Not found"
// };
// let proxy = new Proxy(obj, handler);
// console.log(proxy.value, proxy.missing);
