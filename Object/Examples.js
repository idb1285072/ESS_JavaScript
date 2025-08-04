const user = {
  firstName: "Murad",
  lastName: "Hossen",
  address: {
    city: "Dhaka",
    zip: 1216,
  },
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.address.city); // dot notation
console.log(user["address"]["city"]); // bracket notation
console.log(user.fullName()); // method

// add or update property
user.email = "alice@example.com";
user["phone"] = "123-456";

// delete property
delete user.phone;

console.log(user);

// property shorthand
const name = "Charlie";
const age = 28;
const newUser = { name, age }; // same as { name: name, age: age }
console.log(user); // { name: "Charlie", age: 28 }


