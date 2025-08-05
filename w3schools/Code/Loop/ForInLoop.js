const user = { name: "Alice", age: 30, role: "admin" };
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

const arr = ["a", "b", "c"];
for (let index in arr) {
  console.log(index, arr[index]); // Outputs: "0 a", "1 b", etc.
}

// Best Practice: Use for...in only for plain objects, not for arrays.
// Do not use for in over an Array if the index order is important.

const numbers = [45, 4, 9, 16, 25];
numbers.forEach((value, index, array) => console.log(value));
numbers.forEach((value) => console.log(value));

// for in loop can use for array. but should not use.