const pi = 3.141596;
let age = 33;
let scientificNumber1 = 123e5;
let scientific2 = 123e-5;

console.log(0.2 + 0.1); //0.30000000000000004

let firstNumber = 10;
let secondNumber = 20;
let result = "The result is " + firstNumber + secondNumber;
console.log(result);

let x = "10";
let y = "3";
let z = x / y;
console.log(z); // 3.3333333333333335
z = x * y;
console.log(z); // 30
z = x - y;
console.log(z); // 7
z = x + y;
console.log(z); // 103

console.log(100 / "Apple"); //NaN
console.log(isNaN(100 / "Apple")); // true
console.log(NaN + 5); // NaN
console.log(NaN + "5"); // NaN5

console.log(typeof NaN); // number
console.log(typeof Infinity); // number
console.log(2 / 0); // Infinity
console.log(-2 / 0); // -Infinity

let myNumber = 32;
console.log(myNumber.toString(32));
console.log(myNumber.toString(16));
console.log(myNumber.toString(12));
console.log(myNumber.toString(10));
console.log(myNumber.toString(8));
console.log(myNumber.toString(2));
myNumber = 0xff;
console.log(myNumber); // 255

/**
 * BigInt
 */
console.log(999999999999999)
console.log(9999999999999999)
console.log(9999999999999999n)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

let bitIntNumber1 = 123456789123454534n;
let bitIntNumber2 = BigInt(35253254352345423453443544)
console.log(typeof bitIntNumber1)

console.log(Number.isInteger(123))
console.log(Number.isSafeInteger(123.04))

/**
 * Number Methods
 */
console.log((123).toString())
console.log((123.534).toExponential(2))
console.log((123.534).toExponential(5))
console.log((123.534).toFixed(2))
console.log((123.534).toFixed(5))
console.log((123.534).toPrecision(2))
console.log((123.534).toPrecision(5))
console.log((123.534).toPrecision(10))
console.log((123.543).valueOf()) // return number type
console.log((new Number(123.543)).valueOf()) // return number type
console.log(("123.543").valueOf()) // return string type

console.log(Number(true));
console.log(Number(false));
console.log(Number("10"));
console.log(Number("  10"));
console.log(Number("10  "));
console.log(Number(" 10  "));
console.log(Number("10.33"));
console.log(Number("10,33"));
console.log(Number("10 33"));
console.log(Number("John"));
console.log(Number(new Date("1970-01-01"))); //0
console.log(Number(new Date("1970-01-02"))); //0

console.log(parseInt("-10"));
console.log(parseInt("-10.33"));
console.log(parseInt("10"));
console.log(parseInt("10.33"));
console.log(parseInt("10 20 30"));
console.log(parseInt("10 years"));
console.log(parseInt("years 10"));

console.log(parseFloat("10"));
console.log(parseFloat("10.33"));
console.log(parseFloat("10 20 30"));
console.log(parseFloat("10 years"));
console.log(parseFloat("years 10"));

console.log(Number.EPSILON)
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.NaN)
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)