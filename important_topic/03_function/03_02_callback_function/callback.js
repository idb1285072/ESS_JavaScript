// Synchronous callback
function greetUser(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

function afterGreeting() {
  console.log("Welcome to the system!");
}

greetUser("Alice", afterGreeting);

// Anonymous function as callback
function processNumber(num, callback) {
  let result = num * 2;
  callback(result);
}

processNumber(5, function (result) {
  console.log(`Result after processing: ${result}`);
});

// Callback in Array Methods
const numbers = [1, 2, 3, 4];

numbers.forEach(function (num) {
  console.log(`Number: ${num}`);
});

// Asynchronous callback
console.log("Start");

setTimeout(function () {
  console.log("Executed after 2 seconds");
}, 2000);

console.log("End");
