let markMass = 78;
let johnMass = 92;
let markHeight = 1.69;
let johnHeight = 1.95;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;
console.log(`Mark's BMI: ${markBMI.toFixed(2)}`);
console.log(`John's BMI: ${johnBMI.toFixed(2)}`);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI.toFixed(2)}) is higher than John's!`);
} else {
  console.log(`John's BMI (${johnBMI.toFixed(2)}) is higher than Mark's!`);
}
