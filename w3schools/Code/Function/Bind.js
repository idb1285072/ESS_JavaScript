// With the bind() method, an object can borrow a method from another object
const person = {
  firstName: "Murad",
  lastName: "Hossen",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

console.log(person.fullName.bind(member)());

// Sometimes the bind() method has to be used to prevent losing this
const user = {
  firstName: "Murad",
  lastName: "Hossen",
  display: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};
user.display();
setTimeout(user.display, 3000);

const display = user.display.bind(user);
setTimeout(display, 3000);
