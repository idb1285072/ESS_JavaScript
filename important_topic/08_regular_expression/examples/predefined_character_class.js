/*
\d  : digit                 [0-9]
\D  : non-digit             [^0-9]
\w  : word character        [a-zA-Z0-9_]
\W  : non-word character    [^a-zA-Z0-9_]
\s  : whitespace            [ \t\r\n\f] space, tab, newline, carraige return, form feed
\S  : non-whitespace        [^ \t\r\n\f]
*/

console.log("Year2025".match(/\d+/)); // 2025
console.log("Year2025".match(/\D+/)); // Year
console.log("hello_world123".match(/\w+/g)); // hello_world123
console.log("hello@world!".match(/\W+/g)); // @, !
console.log("Hello World\t2025".match(/\s+/g)); // " ", \t
console.log("Hello    World\t2025".match(/\S+/g)); // " ", \t
