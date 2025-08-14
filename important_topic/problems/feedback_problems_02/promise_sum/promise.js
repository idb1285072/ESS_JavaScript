const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 5000);
});

const promise3 = async () => {
  // const result1 = await promise1;
  // const result2 = await promise2;
  const [result1, result2] = await Promise.all([promise1, promise2]);
  return result1 + result2;
};

promise3()
  .then((result) => {
    console.log(`The sum of the two promises is: ${result}`);
  })
  .catch((error) => {
    console.error(`An error occurred: ${error}`);
  });
