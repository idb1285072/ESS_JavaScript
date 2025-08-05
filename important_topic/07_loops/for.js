const users = [
  { name: "Aisha", age: 25 },
  { name: "Rahim", age: 30 },
  { name: "Lina", age: 22 }
];

for (let i = 0; i < users.length; i++) {
  console.log(`${users[i].name} is ${users[i].age} years old.`);
}


const scores = [85, 42, 77, 90, 66];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] < 60) continue;
  console.log(`Passed: ${scores[i]}`);
}


const matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
  }
}


const numbers = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
  if (sum > 100) {
    console.log("Sum exceeded 100!");
    break;
  }
}