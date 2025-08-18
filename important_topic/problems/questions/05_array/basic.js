let arr = [1, [2, [3, [4]]]];
console.log(arr.flat(2));

let numbers = [1, 2, 3, 4];
console.log(numbers.reduceRight((a, b) => a - b));

// let arr = [1, 2, 3, 4, 5];
// arr.copyWithin(1, 3);
// console.log(arr);

// let arr = [0, 0, 0, 0, 0];
// arr.fill(7, 1, 4);
// console.log(arr);

// let arr = [10, 20, 30, 40];
// console.log(arr.findIndex(x => x > 25));

// let arr = [[1,2], [3,4], [5,6]];
// let [[a, b], , [c, d]] = arr;
// console.log(a, b, c, d);

// let arr = Array.from("hello", ch => ch.toUpperCase());
// console.log(arr);

// let arr = [1, 2, 3, 4];
// let [x, , ...rest] = arr;
// console.log(x, rest);

// let arr = [1,2,3,4,5];
// let result = arr.find(n => n % 2 === 0) + arr.findLast(n => n % 2 === 0);
// console.log(result);
