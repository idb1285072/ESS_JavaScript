const fibonacci = (n) => {
  if (n === 1) return 0;
  else if (n === 2) return 1;
  else return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(fibonacci(10));

const fibonacciTail = (n, a = 0, b = 1) => {
  if (n === 1) return a;
  else return fibonacciTail(n - 1, b, a + b);
};
console.log(fibonacciTail(1000));