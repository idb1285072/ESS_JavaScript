/*
*       : zero or more
+       : one or more/ at least one
?       : zero or one (optional)
{n}     : exactly n times
{n,}    : at least n times
{n, m}  : n to m times
*/

console.log("aaab".match(/a*/)); // "aaa" matched
console.log("bcd".match(/a*/)); // "" matched

console.log("aaab".match(/a+/)); // "aaa" matched
console.log("bcd".match(/a+/)); // null

console.log("aaab".match(/a?/)); // null
console.log("bcd".match(/a?/)); // "" matched
console.log("bacd".match(/a?/)); // "" matched
console.log("color".match(/colou?r/)); // "color" matched
console.log("colour".match(/colou?r/)); // "colour" matched

console.log("aaa".match(/a{3}/)); // "aaa" matched
console.log("aaaa".match(/a{3}/)); // "aaa" first 3
console.log("aaaa".match(/a{3,}/)); // "aaa"
console.log("aaaa".match(/a{3,4}/)); // "aaa"
console.log("2024".match(/\d{2,4}/));
