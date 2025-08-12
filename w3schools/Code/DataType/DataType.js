// typeof operator
console.log(typeof "");
console.log(typeof "Murad");
console.log(typeof 0);
console.log(typeof -3.45);
console.log(typeof (3 + 5));
console.log(typeof true);
console.log(typeof false);
console.log(typeof (5 == 5));
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof (() => {})); // function

// Variable without a value, has the value undefined and The type is also undefined
let x;
console.log(x);
console.log(typeof x);

x = undefined;
console.log(x);
console.log(typeof x);

// JS is a Dynamic Typed Language. TS is not a dynamic typed language.
let y = 2;
console.log(y);
console.log(typeof y);
y = "OK";
console.log(y);
console.log(typeof y);

// string concatenation
const firstName = "Murad";
const lastName = "Hossen";
const fullName = firstName + " " + lastName;
console.log(fullName);

// implicit type conversion
const number1 = 12;
const number2 = "3";
const sum = number1 + number2;
console.log(sum);
console.log(typeof sum);

console.log(12 + 3 + "4"); //154
console.log("4" + 12 + 3); //4123

// Exponential Notation
console.log(123e5);
console.log(123e-5);

// Note: Javascript numbers are always one type: double (64-bit floating point)
let bigIntNumber = BigInt("123456789012345678901234567890");
console.log(bigIntNumber);
console.log(typeof bigIntNumber);
bigIntNumber = 534252546576545235423543634636345n;
console.log(bigIntNumber);
console.log(typeof bigIntNumber);
