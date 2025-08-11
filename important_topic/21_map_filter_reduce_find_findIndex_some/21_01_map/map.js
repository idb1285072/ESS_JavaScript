// const numbers = [1, 2, 3, 4];
// const doubles = numbers.map((number) => number * 2);
// console.log(doubles);

const users = [
  { name: "Ada Lovelace", email: "ada@example.com" },
  { name: "Grace Hopper", email: "grace@example.com" },
];

const usersWithMeta = users.map((u, i) => {
  const initials = u.name
    .split(/\s+/)
    .map((s) => s[0])
    .join("")
    .toUpperCase();
  return {
    id: `user-${i + 1}`,
    ...u,
    initials,
    username: u.email.split("@")[0],
  };
});
console.log(usersWithMeta);

const numbers = [1, 2, 3, 4];
const doubles = numbers.map((number) => number * 2);
console.log(doubles);

// implement map function like map method
const map = (array, callback) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array));
  }
  return newArray;
};
const d = map(numbers, (number, index) => ({i:index,num:number * 2}));
console.log(d);
