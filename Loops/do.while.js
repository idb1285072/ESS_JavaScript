let i = 0;
do {
  console.log(`Index: ${i}`);
  i++;
} while (i < 5);


let attempts = 0;
let success = false;

do {
  // Simulate login attempt
  console.log(`Attempt ${attempts + 1}`);
  success = Math.random() > 0.7; // 30% chance of success
  attempts++;
} while (!success && attempts < 5);

console.log(success ? "Login successful!" : "Too many attempts.");

let num;
do {
  num = Math.floor(Math.random() * 10);
  console.log(`Generated: ${num}`);
} while (num !== 7);


const data = [10, 0, 25, 0, 40];
let index = 0;

do {
  if (data[index] === 0) {
    index++;
    continue;
  }
  console.log(`Valid data: ${data[index]}`);
  index++;
} while (index < data.length);