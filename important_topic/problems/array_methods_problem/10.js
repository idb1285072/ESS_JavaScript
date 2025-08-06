const sentence = "I   love   JavaScript";
const wordCount = sentence.split(" ").length;
console.log(wordCount);
console.log(sentence.split(/ +/).length);
const s = sentence.split(" ").filter((word) => word !== "");
console.log(s.length);
