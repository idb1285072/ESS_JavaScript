const numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.forEach((number) => console.log(number));

// update array element
const users = [
  { name: "Alice", isActive: false },
  { name: "Bob", isActive: false },
];
users.forEach((user) => (user.isActive = true));
console.log(users);

const tasks = [
  { title: "Fix bug", priority: "high", done: false },
  { title: "Write docs", priority: "low", done: false },
];
tasks.forEach((task) => {
  if (task.priority === "high") {
    task.done = true;
  }
});
console.log(tasks);

// format data for display
const books = [
  { title: "1984", author: "Orwell" },
  { title: "Dune", author: "Herbert" },
];
let summary = "";
books.forEach(
  (book, index) =>
    (summary += `${index + 1}. ${book.title} by ${book.author}\n`)
);
console.log(summary);

// count frequencies
// const tags = ["js", "html", "css", "js", "css", "js"];
// const count = {};
// tags.forEach((tag) => {
//   count[tag] = (count[tag] || 0) + 1;
// });
// console.log(count);

const tags = ["js", "html", "css", "js", "css", "js"];
const result = tags.reduce((acc, tag) => {
acc[tag]=(acc[tag]||0)+1
return acc;
}, {});
console.log(result);
/*
acc = {}
acc["js"] = acc["js"]
*/