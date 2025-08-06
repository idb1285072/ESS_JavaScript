const str = "madam1";
const isPalindrome = (param) => {
  const arr = param.split("");
  arr.reverse();
  const reverseString = arr.join("");
  return param === reverseString;
};
console.log(isPalindrome(str));
