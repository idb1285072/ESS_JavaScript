const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
];
// 15% tax
const productsWithTax = products.map((product) => {
  product.priceWithTax = product.price * 1.15;
  return product;
});
console.log(productsWithTax);

const users = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" },
];
const fullNameOfUsers = users.map(
  (user) => `${user.firstName} ${user.lastName}`
);
console.log(fullNameOfUsers);

const codes = ["404", "200", "500"];
const messages = {
  404: "Not Found",
  200: "OK",
  500: "Server Error",
};
const readableMessages = codes.map((code) => messages[code]);
console.log(readableMessages);
// ➜ ["Not Found", "OK", "Server Error"]

const persons = [
  { name: "A", age: 18 },
  { name: "B", age: 25 },
  { name: "C", age: 30 },
];

// Names of users over 20
const personOver20 = persons.filter((u) => u.age > 20).map((u) => u.name);
console.log(personOver20);
