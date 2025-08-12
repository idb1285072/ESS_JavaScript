const arr1 = [1, 2, 3]; // Literal syntax
const arr2 = new Array(3); // Constructor (less common)
const arr3 = Array.of(1, 2, 3); // Creates array from arguments
const arr4 = Array.from("String"); // Create from iterable or array like
console.log(arr4); // [ 'S', 't', 'r', 'i', 'n', 'g' ]
console.log(Array.isArray(arr1));
console.log(arr1 instanceof Array);

console.log(arr4.length);
console.log(arr4[0]);
console.log(arr4[arr4.length - 1]);
console.log(arr4.at(0));
console.log(arr4.at(-1)); // negative index
// with(index, value)

// Change the Original Array
const numbers = [1, 10, 100];
console.log(numbers.push(5));
console.log(numbers.push(17, 27));
console.log(numbers);
console.log(numbers.pop());
console.log(numbers);
console.log(numbers.unshift(3));
console.log(numbers.unshift(54, 52));
console.log(numbers);
console.log(numbers.shift());
console.log(numbers); //  [52, 3,  1, 10, 100, 5, 17]
console.log(numbers.splice(2, 0, 44, 55)); // [52, 3, 44, 55, 1, 10, 100, 5, 17]
numbers.sort((a, b) => a - b);
console.log(numbers);
numbers.reverse();
console.log(numbers);
numbers.fill(0, 3, 6);
console.log(numbers);
numbers.copyWithin(2, 0, 4); // 100, 55, 100, 55, 52, 0, 5,  3, 1
console.log(numbers);

// Save Version
console.log(numbers.toReversed());
console.log(numbers);
console.log(numbers.toSorted((a, b) => a - b));
console.log(numbers.toSpliced(3, 1, 44, 55));

const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");
console.log(myMonths);
console.log(months); // without change the original array

/* Mutator Methods
  push(...items) -> add elements to end and return the new array length
  pop() -> remove element from end and return the removed element
  unshift(...items) -> add elements to start and return the new array length
  shift() -> remove element from start and return the removed element
  splice(start, deleteCount, ...items) -> add/remove at specific index and return []
  short(callback) -> 
  reverse()
  fill(value, start?, end?)
  copyWithin(target, start, end)
*/

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7];
const array3 = [8, 9, 10, 11];
const array4 = array1.concat(array2, array3, 12, 13, 7);
console.log(array4);
console.log(array4.slice(3, 11));
console.log(array4.includes(7));
console.log(array4.indexOf(7));
console.log(array4.indexOf(7, 9));
console.log(array4.lastIndexOf(7));
console.log(array4.lastIndexOf(7, 9));
console.log(array4.join(","));
console.log(array4.toString());

const array5 = [1, 2, [3, [4, 5], 6], [[7, [8]]]];
console.log(array5.flat());
console.log(array5.flat(3));
/*
flat(depth)
flatMap(fn)
*/
const sentences = ["JavaScript is great", "flatMap is useful"];
const words = sentences.flatMap((sentence) => sentence.split(" "));
//const words = sentences.map(s => s.split(" ")).flat();
console.log(words); // ["JavaScript", "is", "great", "flatMap", "is", "useful"]

// Iteration/Functional Methods
const marks = [43, 42, 5, 66, 32, 75, 94];
marks.forEach((mark) => console.log(mark));
const mappedResult = marks.map((mark) => mark + 5);
console.log(mappedResult);
const filteredResult = marks.filter((mark) => mark % 2 === 0);
console.log(filteredResult);
const findedResult = marks.find((mark) => mark > 50);
console.log(findedResult);
const findIndexedResult = marks.findIndex((mark) => mark > 50);
console.log(findIndexedResult);
const isSomeoneFailed = marks.some((mark) => mark <= 33);
console.log(isSomeoneFailed);
const isEveryonePassed = marks.every((mark) => mark >= 33);
console.log(isEveryonePassed);
const reducedResult = marks.reduce((mark, total) => mark + total, 0);
console.log(reducedResult);

/*
arr.some(callback) -> return true if any match
arr.every(callback) -> return true if all match
arr.find(callback) -> first matching value
arr.findIndex(callback) -> first matching index
arr.filter(callback) -> filter
arr.map(callback) -> transforms and return a new array. for modify data
arr.forEach(callback) -> iterate, no return
arr.reduce(callback, init) -> aggregate to a single value. sum, avg
*/

// keys(), values(), entries()
const users = ["Raj", "Raja", "Rana"];
for (let [key, value] of users.entries()) {
  console.log(`key: ${key} value: ${value}`);
}
