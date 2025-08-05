const person = {
  firstName: "John",
  lastName: "Doe",
  language: "EN",
};

// Add a Property
Object.defineProperty(person, "year", { value: "2008" });
// Change a Property
Object.defineProperty(person, "language", { value: "NO" });
/*
Meta Data
  writable : true      // Property value can be changed
  enumerable : true    // Property can be enumerated
  configurable : true  // Property can be reconfigured
*/
Object.defineProperty(person, "language", {
  writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyNames(person)); // return all properties
console.log(Object.keys(person)); // return all enumerable properties

// add getter
Object.defineProperty(person, "fullName", {
  get: function () {
    return this.firstName + " " + this.lastName;
  },
});
console.log(person.fullName);
