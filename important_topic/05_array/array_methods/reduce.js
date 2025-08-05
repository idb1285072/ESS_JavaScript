const numbers = [1, 2, 3, 4, 5, 11, 2, 33];
const sum = numbers.reduce((acc, number) => acc + number, 0);
console.log(`Sum: ${sum}`);

const max = numbers.reduce((acc, number) => {
  if (acc > number) {
    return acc;
  } else {
    return number;
  }
}, numbers[0]);
console.log(`Max: ${max}`);

const nested = [[1, 2], [3, 4], [5], 6];
// Output: [1, 2, 3, 4, 5]
const faltten = nested.reduce((acc, number) => {
  if (Array.isArray(number)) acc.push(...number);
  else acc.push(number);
  return acc;
}, []);
console.log(`Flatten: ${faltten}`);

const words = ["apple", "banana", "kiwi"];
// Output: 16
const countAllCharacter = words.reduce((acc, word) => (acc += word.length), 0);
console.log(`All characters in an array of strings: ${countAllCharacter}`);

const names = ["Alice", "Bob", "Charlie"];
// Output: "Alice, Bob, Charlie"
const commaSeparatedString = names.reduce(
  (acc, name) => (acc ? acc.concat(",", name) : acc.concat(name)),
  ""
);
console.log(commaSeparatedString);

const pairs = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];
// Output: { a: 1, b: 2, c: 3 }
const arrayToObject = pairs.reduce((acc, pair) => {
  acc[pair[0]] = pair[1];
  return acc;
}, {});
console.log(arrayToObject);

const pets = ["cat", "dog", "cat", "bird", "dog", "dog"];
// Output: { cat: 2, dog: 3, bird: 1 }
const petCounter = pets.reduce((acc, pet) => {
  acc[pet] = (acc[pet] || 0) + 1;
  return acc;
}, {});
console.log(petCounter);

const nums = [1, 2, 3, 4, 5, 6];
// Output: { even: [2, 4, 6], odd: [1, 3, 5] }
const evenOdd = nums.reduce(
  (acc, num) => {
    num % 2 === 0 ? acc.even.push(num) : acc.odd.push(num);
    return acc;
  },
  { even: [], odd: [] }
);
console.log(evenOdd);

const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Eve", role: "admin" },
  { name: "Dave", role: "user" },
];
/*
{
  admin: [{ name: 'Alice', role: 'admin' }, { name: 'Eve', role: 'admin' }],
  user:  [{ name: 'Bob', role: 'user' }, { name: 'Dave', role: 'user' }]
}
*/
const userGroupByRole = users.reduce((acc, user) => {
  acc[user.role] = acc[user.role] || [];
  acc[user.role].push(user.name);
  return acc;
}, {});
console.log(userGroupByRole);

const posts = [
  { id: 1, user: "Alice" },
  { id: 2, user: "Bob" },
  { id: 3, user: "Alice" },
  { id: 4, user: "Eve" },
  { id: 5, user: "Alice" },
];
/*
{ Alice: 3, Bob: 1, Eve: 1 }
*/
const countPost = posts.reduce((acc, post) => {
  acc[post.user] = (acc[post.user] || 0) + 1;
  return acc;
}, {});
console.log(countPost);

const articles = [
  { title: "Post 1", tags: ["js", "web"] },
  { title: "Post 2", tags: ["css", "web"] },
  { title: "Post 3", tags: ["js", "react"] },
];
/*
['js', 'web', 'css', 'react']
*/
const uniqueTags = Array.from(
  new Set(articles.flatMap((article) => article.tags))
);
console.log(uniqueTags);

const expenses = [
  { item: "Lunch", amount: 10, category: "Food" },
  { item: "Coffee", amount: 4, category: "Food" },
  { item: "Book", amount: 20, category: "Education" },
  { item: "Pen", amount: 3, category: "Stationery" },
];
/*
{
  Food: 14,
  Education: 20,
  Stationery: 3
}
*/
const sumUpByCategory = expenses.reduce((acc, { category, amount }) => {
  acc[category] = (acc[category] ?? 0) + amount;
  return acc;
}, {});
console.log(sumUpByCategory);

/*
const grouped = groupBy(users, 'role');
{
  admin: [
    { id: 1, name: 'Alice', role: 'admin' },
    { id: 3, name: 'Charlie', role: 'admin' }
  ],
  user: [
    { id: 2, name: 'Bob', role: 'user' },
    { id: 4, name: 'Diana', role: 'user' }
  ],
  guest: [
    { id: 5, name: 'Eve', role: 'guest' }
  ]
}
*/
const persons = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "user" },
  { id: 3, name: "Charlie", role: "admin" },
  { id: 4, name: "Diana", role: "user" },
  { id: 5, name: "Eve", role: "guest" },
];
const groupBy = (arr, key) =>
  arr.reduce((acc, currentValue) => {
    const groupKey = currentValue[key];
    acc[groupKey] = acc[groupKey] || [];
    acc[groupKey].push(currentValue);
    return acc;
  }, {});
console.log(groupBy(persons, "role"));
