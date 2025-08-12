// Create new Array
const persons = ["Raj", "Raja", "Rana"];

const cars = [];
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";

const employees = new Array("Raj", "Raja", "Rana");

// Access and Chang Array Elements
console.log(cars[0]);
cars[0] = "Opel";
console.log(cars);

// Convert array to string
console.log(cars.toString());

// Access the full array
console.log(cars);

// Arrays are a special type of objects
const personArray = ["Murad", "Hossen", 28];
const personObject = { firstName: "Murad", lastName: "Hossen", age: 28 };
console.log(typeof personArray, "array");
console.log(typeof personObject, "object");
console.log(personArray[0]);
console.log(personObject["firstName"]);

// You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array
const arrayOfObjectFunctionArray = [
  Date.now,
  () => console.log("Hello"),
  [1, 2, 3],
  { firstName: "Murad", lastName: "Hossen", age: 28 },
];
console.log(arrayOfObjectFunctionArray);
console.log(arrayOfObjectFunctionArray[1]()); // ?

// length of array
console.log(cars.length);
// first and last element of array
console.log(
  `First element is ${cars[0]} and last element is ${cars[cars.length - 1]}`
);

// Looping array elements
for (let i = 0; i < cars.length; i++) {
  console.log(`car ${i + 1} is ${cars[i]}`);
}
cars.forEach((car) => console.log(`${car}`));

// Add array elements
const fruits = ["Banana", "Orange", "Apple"];
console.log(fruits);
fruits.push("Lemon");
console.log(fruits);
fruits[fruits.length] = "Mango";
console.log(fruits);
// Adding elements with high indexes can create undefined "holes" in an array
fruits[10] = "Bilberry";
console.log(fruits);

// Array with named index are called associative array or hash. JS does not support named index. In JS, array always use numbered index.
// If you use named indexes, JavaScript will redefine the array to an object.
// After that, some array methods and properties will produce incorrect results.
// Array use numbered index and Object use named index.
// Arrays are special kind of objects, with numbered index.

// new Array()
const array1 = new Array(10, 20, 30); // 3 elements
const array2 = new Array(10, 20); // 2 elements
const array3 = new Array(10); // but not 1 element. 10 elements with undefined
console.log(array3.length);

// How to Recognize an Array
console.log(typeof fruits); // Object
console.log(Array.isArray(fruits)); // true
console.log(fruits instanceof Array); // true

// Nested Arrays and Objects
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};

for(let i in myObj.cars){
  let x = myObj.cars[i].name+": ";
  for(let j in myObj.cars[i].models){
    x += myObj.cars[i].models[j] + " ";
  }
  console.log(x)
}