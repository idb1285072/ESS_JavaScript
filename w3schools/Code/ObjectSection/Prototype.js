// All JS Objects inherit properties and methods from a prototype
function Person(firstName, lastName, age){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const myFather = new Person("John", "Doe", 50);
const myMother = new Person("Sally", "Rally", 48);

// The JavaScript prototype property allows you to add new properties to object constructors
Person.prototype.nationality = "English";
Person.prototype.fullName = function(){
  return `${this.firstName} ${this.lastName}`;
}

console.log(Date.prototype) // in browser
