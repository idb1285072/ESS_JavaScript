/*
literal characters
dot           .       singleCharacter
character set [abc]   any one of a, b, c
negated set   [^abc]  except a, b, c
range         [a-e]   from a to e
*/

console.log(/cat/.test("concatenate")); // true
console.log(/cat/.test("dog"));

console.log(/c.t/.test("cut"));
console.log(/c.t/.test("coat"));
console.log(/c.t/.test("c t"));

console.log(/[abc]/.test("apple"));
console.log(/[abc]/.test("dog"));

console.log(/[^abc]/.test("ac"));
console.log(/[^abc]/.test("adoc"));

console.log(/[a-e]/.test("fog"));
