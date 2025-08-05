// function parameters
function sum(...numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}
console.log(sum(1, 2, 3));

// array destructure
const [first, ...rest] = [1, 2, 3, 4]; 

// object destructure
const { name, ...details } = { name: "Alice", age: 25, city: "Paris" };

const { password, ...safeUser } = {
  name: "Alice",
  email: "alice@example.com",
  password: "secret"
};

