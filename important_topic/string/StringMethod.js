console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));
console.log(Object.getOwnPropertyNames(Set.prototype));

let userName = "Murad Hossen";
console.log(userName.length);
console.log(userName.charAt(0));
console.log(userName.charCodeAt(0));
console.log(userName.codePointAt(0));

console.log(userName[0]);
console.log(userName[userName.length - 1]);
console.log(userName.at(0));
console.log(userName.at(-1));

// charCodeAt vs codePointAt
const str = "A💩B";
console.log(str.charCodeAt(1)); // 55357
console.log(str.codePointAt(1)); // 128169 correct Unicode

userName = "  Murad Hossen   ";
console.log(userName.trim());
console.log(userName.trimStart());
console.log(userName.trimEnd());

userName = "Murad";
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.padStart(15, "*"));
console.log(userName.padEnd(15, "*"));
console.log(userName.repeat(5));

let firstName = "Murad";
let lastName = "Hossen";
let fullName = firstName.concat(" ", lastName);
console.log(fullName);

let text = `Please visit Microsoft! 
and Microsoft give you will proper knowledge`;
console.log(text.replace("Microsoft", "ESS"));
console.log(text.replaceAll("Microsoft", "ESS"));
console.log(text.split(" "));
console.log(text.slice(13, 23));
console.log(text.substring(13, 23));
/*
slice(start, end) 
  -> Negative index - allow
substring(start, end) -> 
  -> negative index - 0
  -> if start>end, it swaps the two values automatically
*/

// string search
