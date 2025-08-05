const userName = "Murad Hossen Murad";
const matched = userName.match(/rad/);
console.log(matched);

console.log("abc".match(/x/));  // null
console.log("abc".match(/x/g)); // [] ← in some engines, can be null too
