let count = 0;
while (count < 5) {
  console.log(`Count is: ${count}`);
  count++;
}


const nums = [12, 45, 67, 23, 89];
let i = 0;

while (i < nums.length) {
  if (nums[i] > 50) {
    console.log(`High score: ${nums[i]}`);
  }
  i++;
}


let password = "";
const correctPassword = "openSesame";
let attempts = 0;

while (password !== correctPassword && attempts < 3) {
  password = prompt("Enter password:");
  attempts++;
}

