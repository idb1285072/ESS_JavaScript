const nums = [1, 2, 3, 4, 5];
nums.reverse();
console.log(nums); // [5, 4, 3, 2, 1]

const original = [543, 645, 3543, 64, 6455];
const reverseCopy = [...original].reverse();
console.log(reverseCopy);
console.log(original);

// reverse arr
const orders = [
  { id: 1, item: "book" },
  { id: 2, item: "pen" },
  { id: 3, item: "notebook" },
];
orders.reverse();
console.log(orders);

// Reverse to Undo a Prior Reverse
const numbers = [4, 35, 56, 54];
numbers.reverse();
numbers.reverse();
console.log(numbers);

// .reverse() modifies original array and returns it.
