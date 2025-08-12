const users = [
  { name: "Alice", role: "admin", age: 30 },
  { name: "Bob", role: "user", age: 20 },
  { name: "Charlie", role: "admin", age: 22 },
  { name: "Diana", role: "user", age: 27 },
];
// admin user greater than 25 years
const result = users.filter((user) => user.role === "admin" && user.age > 25);
console.log(result);

const events = [
  { name: "Conference", date: "2025-09-15" },
  { name: "Workshop", date: "2024-11-22" },
  { name: "Webinar", date: "2025-01-10" },
];
const event25 = events.filter(
  (event) => new Date(event.date).getFullYear() === 2025
);
console.log(event25);

const products = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
];
const productResults = products.filter(
  (product) => product.price < 100 && product.inStock
);
console.log(productResults);

const emails = [
  { from: "boss@example.com", subject: "Work", read: true },
  { from: "friend@example.com", subject: "Hangout?", read: false },
  { from: "newsletter@news.com", subject: "Your Daily Digest", read: false },
];
const unreadEmails = emails.filter((email) => !email.read);
console.log(unreadEmails);

const students = [
  { name: "Alice", grades: [80, 90, 100] },
  { name: "Bob", grades: [70, 60, 75] },
];
const topStudents = students.filter((student) => {
  const total = student.grades.reduce((sum, grade) => sum + grade, 0);
  const average = total / student.grades.length;
  return average > 80;
});
console.log(topStudents);
