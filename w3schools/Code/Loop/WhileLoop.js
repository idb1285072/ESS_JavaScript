const cars = ["car1", "car2", "car3", "car4"];
let i = 0;
while (i < cars.length) {
  console.log(cars[i]);
  i++;
}

i = 0;
do {
  console.log(cars[i]);
  i++;
} while (i < cars.length);
