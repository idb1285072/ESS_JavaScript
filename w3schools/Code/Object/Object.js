const personByObjectLiteral = {
  firstName: "Murad",
  lastName: "Hossen",
  age: 27,
};

// object literals are also called object initializers.

const personByNewKeyword = new Object();
personByNewKeyword.firstName = "Murad";
personByNewKeyword.lastName = "Hossen";
personByNewKeyword.age = 29;

console.log(personByNewKeyword.firstName);
console.log(personByNewKeyword["lastName"]);

// personByNewKeyword.fullName = () => `${this.firstName} ${this.lastName}`;
personByNewKeyword.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
console.log(personByNewKeyword.fullName());

console.log(typeof null);

/*
- `const x = person` here the object x is not a copy of person. The object x **is** person.
- The object x and the object person share the same memory address.
*/
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
// Try to create a copy
const x = person;
// This will change age in person:
x.age = 10;
console.log(person.age);

// add a new property
person.nationality = "English";

// delete a property
delete person.age; // delete person["age"];

// method
person.name = function () {
  return `${this.firstName} ${this.lastName}`.toUpperCase();
};
console.log(person.name());
console.log(person.name);

// display object
console.log(person);
console.log(person.firstName);

for (let x in person) {
  if (typeof person[x] !== "function") console.log(person[x]);
  else console.log(person[x]());
}

console.log(Object.values(person));
console.log(JSON.stringify(person));

for (let [key, value] of Object.entries(person)) {
  console.log(`${key} : ${value}`);
}

/*
  Constructor Function
*/
function Person(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");
const mySelf = new Person("Johnny", "Rally", 22, "green");

Person.nationality = "English"; // not adding
Person.prototype.nationality = "English";
console.log(Person)

// Built-in JS Constructor
new Object()   // A new Object object
new Array()    // A new Array object
new Map()      // A new Map object
new Set()      // A new Set object
new Date()     // A new Date object
new RegExp()   // A new RegExp object
new Function() // A new Function object
// Math is a global object. with static methods and properties
// object literals {}
// array literals []
// pattern literals /()/
// function literals (){}