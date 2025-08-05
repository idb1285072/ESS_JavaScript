const numbers = [10, 5, 100, 1];
numbers.sort((a, b) => a - b);
console.log(numbers);

// sort numbers in decending order
numbers.sort((a, b) => b - a);
console.log(numbers);

// Object sort
const products = [
  { name: 'Keyboard', price: 25 },
  { name: 'Monitor', price: 200 },
  { name: 'Mouse', price: 10 },
];
products.sort((a, b) => a.price - b.price);
console.log(products);

// sort by date
const posts = [
  { id: 1, date: '2024-10-01' },
  { id: 2, date: '2024-01-01' },
];
posts.sort((a, b) => new Date(a.date) - new Date(b.date));
console.log(posts);

// Fallback
const users = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Alice', age: 22 },
];
users.sort((a, b) =>
  a.name.localeCompare(b.name) || a.age - b.age
);
console.log(users);
