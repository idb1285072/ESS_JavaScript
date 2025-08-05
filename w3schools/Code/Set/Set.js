const letters = new Set(["a", "b", "c"]);

const numbers = new Set();
numbers.add(1);
numbers.add(10);
numbers.add(10);
numbers.add(10);
numbers.add(100);
console.log(numbers);

for (const number of numbers) {
  console.log(number);
}
numbers.forEach((x) => console.log(x));
for(const entry of numbers.values()){
  console.log(entry)
}
for(const x of numbers.keys()){
  console.log(x)
}
for(const x of numbers.entries()){
  console.log(x)
}
for(const [key, value] of numbers.entries()){
  console.log(`${key}: ${value}`)
}

console.log(typeof numbers);
console.log(numbers instanceof Set);

console.log(numbers.has(10));
console.log("size", numbers.size);
