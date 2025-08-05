// Arrow Function
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};
greet("Alice");

// no return keyword, no parentheses
const square = (num) => num * num;
console.log(square(5)); // 25

// return object with parentheses
const createUser = (name, age) => ({ name: name, age: age });
console.log(createUser("Bob", 30));
// When returning an object literal, wrap it in parentheses ({}) to avoid confusion with block syntax.

// arrow function in array method(map, filter, reduce)
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Arrow function with default parameters
const hello = (name = "Guest") => {
  console.log(`Hello, ${name}`);
};
hello(); // Hello, Guest
hello("Alice"); // Hello, Alice
