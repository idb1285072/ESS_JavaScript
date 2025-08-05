const person = {
  firstName: "Murad",
  lastName: "Hossen",
  age: 50
};

// let {firstName, lastName} = person;
// let {lastName, firstName} = person; // Order doesn't matter
// let {firstName, lastName, country = "US"} = person; // default value
// let {lastName : name} = person; // Alias

// String Destructuring
let useName = "MURAD";
let {a1, a2, a3, a4, a5} = useName;
// Destructuring can be used with any iterables.

// Array Destructuring
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
// let [fruit1, fruit2] = fruits;
// let [fruit1,,,fruit2] = fruits; // Skipping
// let {[0]:fruit1, [2]:fruit2} = fruits; // Position
// let [a, b, ...rest] = fruits; // rest

// Map Destructuring
const fruitMap = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
let text = "";
for (const [key, value] of fruitMap) {
  text += key + " is " + value;
}

// Swapping Variables
let firstName = "Murad";
let lastName = "Hossen";
[firstName, lastName] = [lastName, firstName]