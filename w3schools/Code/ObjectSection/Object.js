/**
 * Create Object
 */
// Object Literal
const personByObjectLiteral = {
  firstName: "Murad",
  lastName: "Hossen",
  age: 28,
};

// new Object()
const personByNewObject = new Object();
personByNewObject.firstName = "Murad";
personByNewObject.lastName = "Hossen";
personByNewObject.age = 28;

// Constructor Function
function PersonConstructor(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.nationality = "Bangladeshi"; // default value
}
const personByConstructor = new PersonConstructor("Murad", "Hossen", 28);

// Object.create()
const proto = {
  greet: function () {
    console.log("Greetings!");
  },
};
const personByCreate = Object.create(proto);
personByCreate.firstName = "Murad";
personByCreate.lastName = "Hossen";

// class syntax
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person1 = new Person("Murad", "Hossen", 28);
console.log(person1);

// Object Literal and Class syntax are best.

