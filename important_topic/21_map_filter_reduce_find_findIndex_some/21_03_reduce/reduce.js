const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((sum, num) => sum + num);
console.log(total);

const reduce = (array, callback, initial) => {
  let accumulator = initial ?? array[0];
  for (let i = 1; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
};

console.log(reduce(numbers, (sum, num) => sum + num));
