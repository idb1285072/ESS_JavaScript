/*
^   : start of string
$   : end of string
\b  : word boundary
\B  : Not a word boundary
*/

console.log(/^Hello/.test("Hello World"));
console.log(/^World/.test("Hello World"));
console.log(/^017\d{8}$/.test("01798569857")); //phone number
console.log(/\.pdf$/.test("question.pdf")); // file extension

console.log(/\bcat\b/.test('a cat is here')); // → true
console.log(/\bcat\b/.test('concatenate')); // → false
console.log(/\Bcat\B/.test('a cat is here'));   // → false
console.log(/\Bcat\B/.test('concatenate'));   // → true