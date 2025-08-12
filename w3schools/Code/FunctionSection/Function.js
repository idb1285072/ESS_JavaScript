// function declaration or function expression (anonymous function)
function add(a, b) {
  return a + b;
}
console.log(add(10, 3));

const multiplication = function (a, b) {
  return a + b;
};
console.log(multiplication(2, 5));

const square = (x) => x * x;
console.log(square(5));

// self-invoking function
(function () {
  console.log("Hello");
})();

// arguments
function argumentFunction(a, b, c) {
  console.log(arguments);
}
argumentFunction(2, 4, 6);
