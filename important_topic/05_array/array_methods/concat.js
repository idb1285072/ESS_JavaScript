// Classic flatten pattern before .flat() was available
const arrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattened = arrays.reduce((acc, cur) => acc.concat(cur), []);
console.log(flattened); // [1, 2, 3, 4, 5, 6]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8];
const arr4 = arr1.concat(arr2, arr3);
console.log(arr4);
