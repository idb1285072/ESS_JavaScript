// indexOf(item, start) -> (return -1 if not found)
const fruits = ["Apple", "Orange", "Apple", "Mango"];
console.log(fruits.indexOf("Apple")); // 0
console.log(fruits.indexOf("Apple", 1)); // 2
console.log(fruits.indexOf("Apple", 3)); // -1
console.log(fruits.lastIndexOf("Apple")); // 2
console.log(fruits.lastIndexOf("Apple", 1)); // 0

console.log(fruits.includes("Apple")); // true or false

const numbers = [4, 9, 16, 36, 25, 29];
let first = numbers.find((value, index, array) => value > 18);
console.log(first);
first = numbers.find((x) => x > 18);
console.log(first);
first = numbers.findIndex((value, index, array)=> value>18);
console.log(first)
// find, findIndex, findLast, findLastIndex
const temp = [27, 28, 30, 40, 42, 35, 30];
let pos = temp.findLastIndex(x => x > 40);
console.log(pos)