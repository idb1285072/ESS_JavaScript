const users = [
  { id: 1, name: "Alice", role: "user" },
  { id: 2, name: "Bob", role: "admin" },
  { id: 3, name: "Charlie", role: "user" },
];
console.log(users.findIndex((user) => user.role === "admin"));

const list = ["A", null, "B", undefined, "C"];
const index = list.findIndex((l) => l === null || l === undefined);
list.splice(index, 1);
console.log(list); // find and remove first null or undefined
