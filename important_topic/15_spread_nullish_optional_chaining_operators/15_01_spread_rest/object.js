const original = {
  firstName: "Murad",
  lastName: "Hossen",
  age: 39,
};
const clone = [...original]; // clone
console.log(clone);

const obj1 = { firstName: "Murad", lastName: "Hossen" };
const obj2 = { age: 33 };
const combined = { ...obj1, ...obj2 }; // merge

const { a, ...others } = { a: 1, b: 2, c: 3 }; // destructure
