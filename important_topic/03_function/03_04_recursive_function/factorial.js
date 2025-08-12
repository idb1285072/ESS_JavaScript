const factorial = (n) => {
  if (n === 1) return 1;
  else return factorial(n - 1) * n;
};

console.log(factorial(1000n));
// 100000000000 -> RangeError: Maximum call stack size exceeded
// 1000 -> Infinity

const factorialTail = (n, acc=1) => {
  if (n === 0) return acc;
  else return factorialTail(n - 1, acc*n);
};
console.log(factorialTail(1000n));
// TCO -> Tail Call Optimization




function factorialAsync(n) {
  if (n <= 1) return Promise.resolve(1);
  return new Promise((resolve) => {
    setTimeout(() => {
      factorialAsync(n - 1).then((result) => {
        resolve(n * result);
      });
    }, 0);
  });
}

// Example usage:
factorialAsync(1000).then((result) => {
  console.log('Factorial:', result); // Output: 120
});