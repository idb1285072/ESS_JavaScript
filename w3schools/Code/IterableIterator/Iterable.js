// String
const useName = "MURAD HOSSEN";
for (const x of useName) {
  console.log(`${x}`);
}

// Array
const numbers = [2, 4, 6, 8];
for (const number of numbers) {
  console.log(number);
}

// Set
const letters = new Set(["a", "b", "c"]);
for (const letter of letters) {
  console.log(letter);
}

// Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
for (const fruit of fruits) {
  console.log(fruit);
}

// Iterable
function myNumbers() {
  let n = 0;
  return {
    next: function () {
      n += 10;
      return { value: n, done: false };
    },
  };
}
// Run the Iterable
const n = myNumbers();
n.next(); // Returns { value: 10, done: false }
n.next(); // Returns { value: 20, done: false }
n.next(); // Returns { value: 30, done: false }
console.log(n.next()); //{ value: 40, done: false }

// Fully Iterable Iterator

function myNumbers() {
  let n = 0;
  return {
    next: function() {
      n += 10;
      return { value: n, done: false };
    },
    [Symbol.iterator]() {
      return this;
    }
  };
}
for (const val of myNumbers()) {
  console.log(val);
  if (val >= 30) break;
}
