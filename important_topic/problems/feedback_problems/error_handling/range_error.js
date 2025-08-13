let arr1 = new Array(-1); // Invalid array length
let arr2 = new Array(2**32); // Invalid array length
/* 
MAX_SAFE_INT is 2^53 - 1, which is 9007199254740991.
Max Array length is 2^32 - 1, which is 4294967295.
*/

let str = "Hello";
str.length = -5; // Invalid string length

const recurse = () => {
  recurse(); 
}
recurse(); // Maximum call stack size exceeded

