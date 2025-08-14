console.log(x); // Reference Error: x is not defined

console.log(a);
let a = 5; // Reference Error: Cannot access 'a' before initialization

const foo = () => {
  let message = "Hello, World!";
  console.log(message);
}
console.log(message); // Reference Error: message is not defined

printMessage(); // Reference Error: printMessage is not defined

const arrow = () => console.log(argumnets); // Reference Error: arguments is not defined in arrow functions