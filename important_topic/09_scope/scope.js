// global scope
var globalVar = "I am global";
function showGlobal() {
  console.log(globalVar); // Accessible
}
showGlobal();
console.log(globalVar); // Accessible everywhere

// function scope
function greet() {
  var message = "Hello!";
  console.log(message); // Accessible here
}
greet();
console.log(message); // Error: message is not defined

// block scope
{
  let blockVar = "I'm block-scoped";
  console.log(blockVar); // Accessible here
}
console.log(blockVar); // Error: blockVar is not defined

// lexical scope
function outer() {
  let outerVar = "Outer";
  function inner() {
    console.log(outerVar); // Inner has access to outerVar
  }
  inner();
}
outer();
