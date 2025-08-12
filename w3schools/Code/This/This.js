"use strict";
const person = {
  firstName: "Murad",
  lastName: "Hossen",
  age: 28,
  fullName: function () {
    // console.log(this);
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(person.fullName());

console.log(this); // Window or global Object

function myFunction() {
  console.log(this);
}
myFunction(); // Window or undefined

function handler(element){
  console.log(this); // undefined or Window
  console.log(element); // <button></button>
}
