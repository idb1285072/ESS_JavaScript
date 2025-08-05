const person1 = {
  firstName: "Murad",
  lastName: "Hossen",
  age: 28,
};

const person2 = {
  firstName: "Raj",
  lastName: "Khan",
};

Object.assign(person1, person2); // Object.assign(target, source);
console.log(person1);
console.log(person2);

console.log(Object.entries(person1)); // return Array of arrays [key, value]
console.log(Object.entries(person1) instanceof Array); // true
for (let [key, value] of Object.entries(person1)) {
  console.log(`${key}: ${value}`);
}
console.log(Object.values(person1));
console.log(Object.keys(person1));

for(let key in person1){
  console.log(`${key}: ${person1[key]}`)
}

const fruitsArray = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500],
];
console.log(Object.fromEntries(fruitsArray)); // return Object
console.log(Object.fromEntries(fruitsArray) instanceof Array);

const fruitsObjectList = [
  { name: "apples", quantity: 300 },
  { name: "bananas", quantity: 500 },
  { name: "oranges", quantity: 200 },
  { name: "kiwi", quantity: 150 },
];

const result = Object.groupBy(fruitsObjectList, (fruitsObjectList) =>
  fruitsObjectList.quantity > 200 ? "OK" : "LOW"
);
console.log(result);

