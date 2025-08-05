// Local variable: inside function
// Global variable: outside function
// Global and local variables with the same name are different variables
// Undeclared variables (created without a keyword var, let, const), are always global, even if they are created inside a function.
// Global variable can be made local with Closure
// A function can access all variables in the global scope

// If an inner function accesses variables from an outer function's scope, then a closure is formed

function createCounter() {
  let count = 0;
  return {
    increment() {
      count++;
      console.log(`Count: ${count}`);
    },
    decrement() {
      count--;
      console.log(`Count: ${count}`);
    },
    reset() {
      count = 0;
      console.log("Counter reset.");
    },
    display() {
      console.log(`Count: ${count}`);
    },
  };
}

const counter = createCounter();

counter.increment(); //  Count: 1
counter.increment(); //  Count: 2
counter.decrement(); //  Count: 1
counter.reset(); //  Counter reset.
counter.display(); // Counter: 0
// No direct access to count
console.log(counter.count); //  undefined
