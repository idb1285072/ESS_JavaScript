const fruits = ["apple", "banna", "cherry"];
const result = fruits.join();
console.log(result);
// By default separator is comma
const sentence = fruits.join(" ");
console.log(sentence);

const chars = ["J", "S", "1", "0", "1"];
const code = chars.join("");
console.log(code); // string concatenate

const nested = [['a', 'b'], ['c', 'd'], ['e']];
const flatJoined = nested.flat().join('-');
console.log(flatJoined); // "a-b-c-d-e"

const users = [
  { name: 'Alice' },
  { name: 'Bob' },
  { name: 'Charlie' },
];
const names = users.map(user => user.name).join(', ');
console.log(names); // "Alice, Bob, Charlie"

const lines = ['First line', 'Second line', 'Third line'];
const multiline = lines.join('\n');
console.log(multiline);


