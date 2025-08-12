const factorialTail = (n, acc=1n) => {
  if (n === 0) return acc;
  else return factorialTail(n - 1n, acc*n);
};
console.log(factorialTail(1000n));
// TCO -> Tail Call Optimization

