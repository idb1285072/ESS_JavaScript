/*
g : global flag
  find all matches, not just the first one
*/
console.log("aaba".match(/a/)); // a - only the first match
console.log("aaba".match(/a/g)); // a, a, a

/*
i : ignore case flag
  case insensitive
*/
console.log("JavaScript".match(/script/)); // null
console.log("JavaScript".match(/script/i)); // Script

/*
m : multiline flag
  change behavior of ^ and $ to match start/end of lines, not string
*/
console.log("first\nsecond".match(/^second/)); // null
console.log("first\nsecond".match(/^second/m)); // second
console.log("first\nsecond".match(/st$/)); // null
console.log("first\nsecond".match(/st$/m)); // st

/*
s : dotall
  allow . to match \n, \r
*/
console.log("lasjdfa\nbjflad".match(/a.b/)); // null
console.log("lasjdfa\nbjflad".match(/a.b/s)); // a\nb
console.log("adbfdl".match(/a.b/)); // a.b meaning [a single_char b]

/*
u : unicode flag [emogis or bangla]
*/
console.log("💖".match(/\u{1F496}/u));

/*
y : sticky flag
  match from the exact position in the string (lastIndex)
*/
const str = "a1 a2 a3";
const regexG = /\w\d/g;
const regexY = /\w\d/y;
regexG.lastIndex = 0;
console.log(regexG.exec(str)); // a1
regexG.lastIndex = 3;
console.log(regexG.exec(str)); // a2 (skipped space)

regexY.lastIndex = 0;
console.log(regexY.exec(str)); // a1
regexY.lastIndex = 3;
console.log(regexY.exec(str)); // null (because there’s a space at index 3)
regexY.lastIndex = 4;
console.log(regexY.exec(str)); // a2 (exact match at index 4)
