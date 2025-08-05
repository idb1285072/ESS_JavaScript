const person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    const parts = name.trim().split(" ");
    this.firstName = parts[0] || "";
    this.lastName = parts.slice(1).join(" ") || "";
  },
};

console.log(person.fullName); // "John Doe"
person.fullName = "Murad Hossen";

console.log(person.firstName); // "Murad"
console.log(person.lastName); // "Hossen"
console.log(person.fullName); // "Murad Hossen"
