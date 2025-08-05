const myArr1 = Int16Array.from("1234567890"); // from string
console.log(myArr1);
const myArr2 = Int16Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // from array
console.log(myArr2);
const myArr3 = Int16Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 0); // argument
console.log(myArr3);
console.log(myArr3.constructor.name); // Int16Array
console.log(myArr3.BYTES_PER_ELEMENT) // 2
