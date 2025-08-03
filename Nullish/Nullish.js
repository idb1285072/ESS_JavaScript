let userInput;
let userName = userInput ?? "Anonymous";
console.log(`Input: ${userInput} Name: ${userName}`);

let userAge = null;
userAge ??= 18;
console.log(userAge);

// || vs ??
console.log(`${0 || 23} ${0 ?? 23}`);
console.log(`${"" || 23} ${"" ?? 23}`);
console.log(`${NaN || 23} ${NaN ?? 23}`);
console.log(`${false || 23} ${false ?? 23}`);
console.log(`${undefined || 23} ${undefined ?? 23}`);
console.log(`${null || 23} ${null ?? 23}`);

// use parentheses
// const result1 = a || b ?? c; // SyntaxError
const result2 = (a || b) ?? c; // Currect