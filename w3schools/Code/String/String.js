let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length);

// Comparing two JavaScript objects always returns false.
let x = new String("John");
let y = new String("John");
console.log(x == y); // false
console.log(x === y); // false

x = "John";
y = "John";
console.log(x == y); // true
console.log(x === y); // true

// access
console.log(text[1]);
console.log(text.at(1));
console.log(text.charAt(1));

console.log(text[-2]); // undefined
console.log(text.at(-2)); // Negative Indexing Possible
console.log(text.charAt(text.length - 2)); // Negative Indexing not possible

console.log(text[27]); // undefined
console.log(text.charAt(27)); // empty string
console.log(text.at(27)); // undefined

console.log(text.charCodeAt(1));
console.log(text.codePointAt(1));

// join
const text1 = "Hello";
const text2 = "World";
console.log(text1.concat(" ", text2));
console.log(text1 + " " + text2);
// All string methods return a new string. They don't modify the original string.

// Extract
console.log(text.slice(4, 9)); // EFGHI
console.log(text.slice(4)); // EFGHI...Z
console.log(text.slice(-3)); //XYZ
console.log(text.substring(4, 9)); // EFGHI
console.log(text.substring(9, 4)); // EFGHI
console.log(text.substring(4)); // EFGHI...Z
// slice vs substing -> negative indexing and swapping indexes


/*
String Search
*/
console.log(text.indexOf("EFG"))
console.log(text.indexOf("EFG", 10))
console.log(text.lastIndexOf("EFG"))
console.log(text.lastIndexOf("EFG", 10))
console.log(text.search("EFG"))
console.log(text.search(/EFG/))
// search vs indexOf -> number of argument, RegExp
console.log(text.match("EFG"))
console.log(text.match("EFG"))
// console.log(text.matchAll(/EFG/))
console.log(text.includes("EFG"))
console.log(text.startsWith("EFG"))
console.log(text.endsWith("EFG"))