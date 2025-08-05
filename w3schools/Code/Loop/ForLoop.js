for (let i = 0; i < 5; i++) {
  console.log(i);
}

const cars = ["car1", "car2", "car3", "car4"];
let j = 0;
for (;;) {
  console.log(cars[j]);
  j++;
  if (j >= cars.length) break;
}

let i = 5;
for (let i = 0; i < 10; i++) {
  // some code
}
// Here i is 5 but for var it will be 10
