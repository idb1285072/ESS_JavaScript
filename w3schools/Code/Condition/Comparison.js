console.log(5 == "5");
console.log(5 === "5");

// Ternary or Conditional Operator
let number = Math.floor(Math.random() * 100) + 1; //1 to 100 random number
let EvenOrOdd = number % 2 == 0 ? "Even" : "Odd";
console.log(`${number} is ${EvenOrOdd}`);

// When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison. An empty string converts to 0. A non-numeric string converts to NaN which is always false
console.log(2 < 12);
console.log(2 < "12");
console.log(2 < "John");
console.log(2 > "John");
console.log(2 == "John");
console.log("2" > "12");
console.log("2" < "12");
console.log("2" == "12");

// The ?? operator returns the first argument if it is not nullish (null or undefined)
let name = null;
let text = "missing";
let result = name ?? text; // null or undefined 
// The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).
const car = {type: "Fiat", model:"500", color: "white"}
console.log(car?.name) //?
