const factorial = (n) => {
  const stack = [];
  let result = 1n;
  while (n > 0n) {
    stack.push(n);
    n--;
  }
  while (stack.length > 0) {
    result *= stack.pop();
  }
  return result;
};
console.log(factorial(10000n))