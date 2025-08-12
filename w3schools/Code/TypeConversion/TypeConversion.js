// String to Number
console.log(Number("3.14")); // 3.14
console.log(Number("")); // 0
console.log(Number(" ")); // 0
console.log(Number("Murad")); // NaN
console.log(Number("99 88")); // NaN

console.log(+"5"); // unary + operator: string -> number
console.log(typeof +"5"); // number

console.log(Number(null)) // 0

console.log((123).toString());
console.log((100 + 23).toString());

// Date to Number
console.log(Number(new Date()));
// Date to String
console.log(String(Date()));
console.log(Date().toString());

// Boolean to Number
console.log(Number(false)); // 0
console.log(Number(true)); // 1

// Boolean to String
console.log(String(false));
console.log(String(true));
console.log(false.toString());
console.log(true.toString());

console.log(5 + null); // returns 5         because null is converted to 0
console.log("5" + null); // returns "5null"   because null is converted to "null"
console.log("5" + 2); // returns "52"      because 2 is converted to "2"
console.log("5" - 2); // returns 3         because "5" is converted to 5
console.log("5" * "2"); // returns 10        because "5" and "2" are converted to 5 and 2
