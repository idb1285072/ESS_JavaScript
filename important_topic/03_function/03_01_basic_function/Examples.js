// function declaration
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("Murad"));

// function expression
const greetByFunctionExpression = function (name) {
  return `Hello, ${name}`;
};
console.log(greetByFunctionExpression("Murad"));

// arrow function
const greetByArrowFunction = (name) => `Hello, ${name}`;
console.log(`Hello, ${name}`);

// Lexical this
function Timer() {
  this.seconds = 0;

  setInterval(() => {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
}
new Timer();


// arrow function cannot use as constructor. cannot use with new keyword
const Person = (name) => {
  this.name = name;
};
const p = new Person("Alice"); // TypeError: Person is not a constructor

// No own argument object. must use rest parameters
const showArgs = (...args) => {
  console.log(args);
};
console.log(showArgs(1, 2, 3));


function welcome(name) {
  console.log(`Welcome, ${name}`);
}

["Alice", "Bob"].forEach(welcome);

// Parameters
function greet(name = "Guest") {
  return `Hello, ${name}`;
}
greet(); // "Hello, Guest"

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
sum(1, 2, 3, 4); // 10


function createUser({ name, age, email }) {
  return `${name} is ${age} years old. Email: ${email}`;
}
createUser({ name: "Alice", age: 28, email: "alice@example.com" });
// "Alice is 28 years old. Email: alice@example.com"
