function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

function sum(n) {
  if (n === 0) return 0;
  return n + sum(n - 1);
}
console.log(sum(4));

function countdown(n) {
  if (n === 0) return "Done";
  return n + " " + countdown(n - 1);
}
console.log(countdown(3));

function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(6));

function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.substr(1)) + str[0];
}
console.log(reverseString("cat"));

function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}
console.log(power(2, 3));

function evenOdd(n) {
  if (n === 0) return "Even";
  if (n === 1) return "Odd";
  return evenOdd(n - 2);
}
console.log(evenOdd(7));

function product(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * product(arr.slice(1));
}
console.log(product([2, 3, 4]));

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}
console.log(gcd(48, 18));

function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
}
console.log(isPalindrome("madam"));

function sumDigits(n) {
  if (n === 0) return 0;
  return (n % 10) + sumDigits(Math.floor(n / 10));
}
console.log(sumDigits(1234));

function binary(n) {
  if (n === 0) return "";
  return binary(Math.floor(n / 2)) + (n % 2);
}
console.log(binary(6));

function flatten(arr) {
  if (arr.length === 0) return [];
  if (Array.isArray(arr[0])) {
    return flatten(arr[0]).concat(flatten(arr.slice(1)));
  }
  return [arr[0]].concat(flatten(arr.slice(1)));
}
console.log(flatten([1, [2, [3, 4]], 5]));
console.log([1, [2, [3, 4]], 5].flat(Infinity));

function minArr(arr) {
  if (arr.length === 1) return arr[0];
  let restMin = minArr(arr.slice(1));
  return arr[0] < restMin ? arr[0] : restMin;
}
console.log(minArr([7, 2, 8, 3]));

function isPrime(n, i = 2) {
  if (n <= 2) return n === 2;
  if (n % i === 0) return false;
  if (i * i > n) return true;
  return isPrime(n, i + 1);
}
console.log(isPrime(29));

function sumArray(arr, i = 0) {
  if (i === arr.length) return 0;
  return arr[i] + sumArray(arr, i + 1);
}
console.log(sumArray([2, 4, 6, 8]));

function isPowerOfTwo(n) {
  if (n === 1) return true;
  if (n % 2 !== 0 || n === 0) return false;
  return isPowerOfTwo(n / 2);
}
console.log(isPowerOfTwo(16));

function trib(n) {
  if (n < 3) return n === 0 ? 0 : 1;
  return trib(n - 1) + trib(n - 2) + trib(n - 3);
}
console.log(trib(5));
// 7

function paths(m, n) {
  if (m === 1 || n === 1) return 1;
  return paths(m - 1, n) + paths(m, n - 1);
}
console.log(paths(3, 3));
// 6
