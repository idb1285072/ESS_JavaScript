const scores = [88, 92, 75, 63, 99];
for (const score of scores) {
  if (score >= 90) {
    console.log(`Excellent: ${score}`);
  }
}

const word = "JavaScript";
for (const char of word) {
  console.log(char.toUpperCase());
}

const userMap = new Map([
  ["Amina", 25],
  ["Rahim", 30],
  ["Lina", 22],
]);
for (const [name, age] of userMap) {
  console.log(`${name} is ${age} years old.`);
}

const uniqueNumbers = new Set([1, 2, 3, 2, 1]);
for (const num of uniqueNumbers) {
  console.log(num);
}

const colors = ["red", "green", "blue"];
for (const index in colors) {
  console.log(`Index ${index}`);
}
for (const color of colors) {
  console.log(`Color: ${color}`);
}

// for...in -> index
// for...of -> value
