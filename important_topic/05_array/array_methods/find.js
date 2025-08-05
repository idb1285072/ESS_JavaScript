const users = [
  { id: 1, name: "Alice", role: "user" },
  { id: 2, name: "Bob", role: "admin" },
  { id: 3, name: "Charlie", role: "user" },
];
const firstAdmin = users.find((user) => user.role === "admin");
console.log(firstAdmin);

const books = [
  { title: "JS Basics", isbn: "123-456", author: "Tom" },
  { title: "Advanced JS", isbn: "789-101", author: "Jane" },
];
const findBookByISBN = (books, isbn) =>
  books.find((book) => book.isbn === isbn);
console.log(findBookByISBN(books, "789-101"));

const numbers = [23, 56, 77, 105, 133, 210];
console.log(numbers.find((number) => number % 7 === 0 && number > 100)); // divisible by 7 and greater than 100


