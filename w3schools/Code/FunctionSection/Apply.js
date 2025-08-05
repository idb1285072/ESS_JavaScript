const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  location: function (city, country) {
    return `${this.firstName} ${this.lastName} is in ${city}, ${country}`;
  },
};
const person1 = {
  firstName: "John",
  lastName: "Doe",
};
const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};
// With call(), an object can use a method belonging to another object.
console.log(person.fullName.apply(person1));
console.log(person.fullName.apply(person2));
console.log(person.location.apply(person1, ["Dhaka", "Bangladesh"]));

// The call() method takes arguments separately.
// The apply() method takes arguments as an array.
