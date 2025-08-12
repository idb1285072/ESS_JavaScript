const name = "Alice";
const age = 30;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);
// Output: Hello, my name is Alice and I am 30 years old.

const message = `This is line 1
This is line 2
This is line 3`;
console.log(message);

const a = 10;
const b = 5;
console.log(`Sum: ${a + b}`); // Sum: 15

function getTime() {
  return new Date().toLocaleTimeString();
}
const log = `Current time: ${getTime()}`;
console.log(log);
