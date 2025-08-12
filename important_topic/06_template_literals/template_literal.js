const firstName = "Murad";
const lastName = "Hossen";
const birthYear = 1998;
const year = 2025;
const job = "teacher";
const user =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(user);

const userByTemplateLiteral = `I'm ${firstName}, a ${year - birthYear} \
years old ${job}!`;

console.log(userByTemplateLiteral);

// Multiline string
console.log("Line 1\n\
Line 2\n\
Line 3");

console.log(`Line 1
Line 2
Line 3`);