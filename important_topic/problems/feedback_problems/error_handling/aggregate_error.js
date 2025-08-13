try {
  throw new AggregateError(
    [new Error("First error"), new Error("Second error")],
    "Multiple errors occurred"
  );
} catch (error) {
  console.log(error.message);
  console.log(error.name);
  error.errors.forEach((err, index) => {
    console.log(`Error ${index + 1}: ${err.message}`);
  });
}

const promise1 = Promise.reject("Promise 1 failed");
const promise2 = Promise.reject("Promise 2 failed");
Promise.any([promise1, promise2])
  .then((result) => console.log(result))
  .catch((error) => {
    console.log(error.message);
    console.log(error.name);
    error.errors.forEach((err, index) => {
      console.log(`Error ${index + 1}: ${err}`);
    });
  });
