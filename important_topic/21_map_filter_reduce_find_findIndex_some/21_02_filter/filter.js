const numbers = [1, 2, 3, 4];
const evens = numbers.filter((number) => number % 2 === 0);
console.log(evens);

const filter = (array, callback) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

console.log(filter(numbers, (number) => number % 2 === 0));
