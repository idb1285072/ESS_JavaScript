"use strict";
const person = { firstName: "John", lastName: "Doe" };
Object.preventExtensions(person);
// person.nationality = "English"; // no error but not extend
console.log(person); //
console.log(Object.isExtensible(person)); // false

const fruits = ["Banana", "Orange", "Apple", "Mango"];
Object.preventExtensions(fruits);
// This will throw an error
// fruits.push("Kiwi");

const person1 = { firstName: "Murad", lastName: "Hossen" };
Object.seal(person1);
// delete person1.firstName;
// person1.age = 28;
console.log(Object.isSealed(person1)); // true

const person2 = { firstName: "Murad", lastName: "Hossen" };
Object.freeze(person2);
// person2.firstName = "Raj";
// person2.age = 28;
// delete person2.firstName;
console.log(Object.isFrozen(person2)); // true


/**
Object.perventExtensions() -> cannot add property
Object.seal() -> cannot add or delete property
Object.freeze() -> cannot change property value 
*/