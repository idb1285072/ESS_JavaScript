// Array Length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);
fruits.length = 2;
console.log(fruits);

// Array toString() and join()
console.log(fruits.toString());
console.log(fruits.join(","));

// at()
console.log(fruits.at(0));
console.log(fruits[0]);
console.log(fruits.at(-1));
console.log(fruits[fruits.length - 1]);
/**
Negative indexing is not possible in JavaScript, because [] is used for accessing both arrays and objects. obj[-1] refers to the value of key -1, not to the last property of the object.
The at() method was introduced in ES2022 to solve this problem.
at() vs [] -> Negative Indexing
*/

// pop() push() shift() unshift()
console.log(fruits);
console.log(fruits.pop()); // delete the last element from the array and return the last element
console.log(fruits);
console.log(fruits.push("Kiwi")); // add in the last element and return the new length
console.log(fruits);
console.log(fruits.shift()); // delete the first element from the array and return the first element
console.log(fruits);
console.log(fruits.unshift("Lemon")); // add in the first element and return the new length
console.log(fruits);
delete fruits[0]; // undefined the first element
console.log(fruits); // [undefined, "Kiwi"]
console.log(fruits.length);

// concat()
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);
console.log(arr1);
const newArray = arr1.concat("Peter");
console.log(newArray)

// copyWithin()
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits1)
console.log(fruits1.copyWithin(2, 0))
console.log(fruits1)

const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"]
console.log(fruits2.copyWithin(2, 0, 2))
console.log(fruits2)

// flat() and flatMap()
const myArr = [[1,2],[3,4],[5,6]];
console.log(myArr.flat())
console.log(myArr)
const myArr2 = [1, 2, 3, 4, 5, 6];
console.log(myArr2.flatMap(x=>[x, x*10]));

// splice() and slice()
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.splice(2, 0, "Lemon", "Kiwi"); // splice(whereToStart, howManyRemove, addItems)
console.log(fruits4)
fruits4.splice(2, 2, "LEMON", "KIWI")
console.log(fruits4)
fruits4.splice(0, 1)
console.log(fruits4)
// splice() vs toSpliced() -> unchange the original array
const months = ["Jan", "Feb", "Mar", "Apr"];
console.log(months.toSpliced(0, 1))
console.log(months)

console.log(fruits4)
console.log(fruits4.slice(1))
console.log(fruits4.slice(1, 3))
console.log(fruits4)