const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);

// short and reversed without change the original array
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
const reversed = months.toReversed();
console.log(months);

// short NUMBER
const points = [40, 100, 1, 5, 25, 10];
points.sort(); // Not working
console.log(points);
points.sort((a, b) => a - b); // Assending Order
console.log(points);
points.sort((a, b) => b - a); // Dessending Order
console.log(points);
points.sort(() => 0.5 - Math.random()); // Random Order
console.log(points);
// Fisher Yates Method or Fisher Yates shuffle (1938, Data Science)
for (let i = points.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}
console.log(points);

// Sorting Object Array
const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];
cars.sort((a, b) => a.year - b.year);
console.log(cars);

cars.sort((a, b) => {
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x > y) return 1;
  if (x < y) return -1;
  return 0;
});
console.log(cars);

// const points = [40, 100, 1, 5, 25, 10];
// console.log(Math.max(...points))
// console.log(Math.min(...points))