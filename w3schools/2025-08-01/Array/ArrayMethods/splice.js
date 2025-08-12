const numbers = [1, 2, 3, 4];
console.log(numbers.splice(1, 0, 55, 44, 33));
console.log(numbers);
console.log(numbers.splice(1, 2)); // delete two items from a specific index
console.log(numbers);
console.log(numbers.splice(1, 1, 100));
console.log(numbers);

// splice(start, deleteCount, ...addElements)
// return a array that contains deleted elements
// delete from a specific index
// replace elements


const paginate = (array, pageNumber, pageSize) => {
  const start = (pageNumber - 1) * pageSize;
  const end = pageNumber * pageSize;
  return array.slice(start, end);
};
const pages = Array.from({ length: 20 }, (_, i) => i + 1);
console.log(paginate(pages, 3, 4));

