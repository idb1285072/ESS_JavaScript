// case-insensitive search
let userName = "Md. Murad Hossen";
console.log(userName.search(/murad/)); // -1
console.log(userName.search(/murad/i)); // 4
console.log(userName.match(/murad/i)); // [ 'Murad', index: 4, input: 'Md. Murad Hossen', groups: undefined ]
console.log(userName.match(/murad/)); // null
console.log(userName.replace(/murad/i, "Rana"));
console.log(userName);

/**
 * search() match() replace()
 * 
  flag
    /i        case-insensitive
    /g        global
    /m        multiline

  Character Class
    [A] [AEIOU] [^AEIOU] [A-E] (A|E|I|O|U)

  Metacharacter
    \d digit
  
    \b begging and ending of a word
    \s space
    \uhhhh unicode hex

  Quantifier
    n+  1 or more n
    n*  0 or more n
    n?  0 or 1 n


 */
console.log(userName.match(/M/)); // [ 'M', index: 0, input: 'Md. Murad Hossen', groups: undefined ]
console.log(userName.match(/M/g)); // [ 'M', 'M' ]
console.log(userName.match(/m/g)); // null
console.log(userName.replace(/M/, "R")); // Rd. Murad Hossen
console.log(userName.replace(/M/g, "R")); // Rd. Rurad Hossen

console.log(userName.match(/[MH]/g)); // M, M, H
console.log(userName.match(/[a-e]/gi)); // d, a, d, e
console.log(userName.match(/(a|e|i|o|u)/gi)); // [ 'u', 'a', 'o', 'e' ]
console.log(userName.replace(/(a|e|i|o|u)/gi, "*")); // Md. M*r*d H*ss*n

console.log(userName.replace(/\bMu/, "Ra")); // Md. Rarad Hossen
console.log(userName.replace(/\s/, "*"));
console.log(userName.replace(/\s/g, "*"));
