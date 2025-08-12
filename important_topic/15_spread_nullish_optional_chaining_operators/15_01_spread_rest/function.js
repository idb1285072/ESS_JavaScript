// Variadic Function -> any number of arguments
function sum(...numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}
console.log(sum(1, 2, 3));

// arguments object -> array like
function avg() {
  const len = arguments.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += arguments[i];
  }
  let average = sum / len;
  return average;
}
console.log(avg(2, 3, 4, 6));
console.log(avg(2, 3, 4));
/*
arguments object
  - not support array method
  - arrow function have no arguments
*/