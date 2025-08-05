const numbers = [45, 4, 9, 16, 25];
numbers.forEach((value, index, array) => {
  console.log(`${index}: ${value}`);
});

const numbers2 = numbers.map((value, index, array) => value * 2);
console.log(numbers2);
const numbers3 = numbers.map((value) => value * 2);
console.log(numbers3);
const numbers4 = numbers.flatMap((value) => value * 2);
console.log(numbers4);
const over18 = numbers.filter((value, index, array) => value > 18);
console.log(over18);
let sum = numbers.reduce((total, value, index, array) => total + value);
console.log(sum);
sum = numbers.reduce((total, value, index, array) => total + value, 100);
console.log(sum);
// reduce(callBackFunction, optionalInitalValue)
// reduceRight()

let isAllOver18 = numbers.every((value, index, array) => value > 18);
console.log(isAllOver18);
let isSomeOver18 = numbers.some((value, index, array) => value > 18);
console.log(isSomeOver18);

let text = "ABCDEFG";
console.log(Array.from(text));
const myNumbers = [1, 2, 3, 4];
console.log(Array.from(myNumbers, (x) => x * 2));

const fruits = ["Banana", "Orange", "Apple", "Mango"];
for (let x of fruits.keys()) {
  console.log(`${x}: ${fruits[x]}`);
}
for (let [key, value] of fruits.entries()) {
  console.log(`${key}: ${value}`);
}

const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");
console.log(myMonths);
console.log(months); // without change the original array

// spread operator
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Des"];
const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);
const num = [23, 55, 21, 87, 56];
let minValue = Math.min(...num);
let maxValue = Math.max(...num);
console.log(`Min Value: ${minValue} Max Value: ${maxValue}`);

// array destructure
let a, b, rest;
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
[a, b, ...rest] = arr1;
console.log(`a: ${a} b: ${b} rest: ${rest}`);
