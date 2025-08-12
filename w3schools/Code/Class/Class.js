class Person {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }
  getAge() {
    const date = new Date();
    return date.getFullYear() - this.birthYear;
  }
}
const person1 = new Person("Murad", "Hossen", 1998);
console.log(`Hello, ${person1.firstName}. 
You are ${person1.getAge()} years old.`);
