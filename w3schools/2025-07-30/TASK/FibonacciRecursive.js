function fibonacci(n) {
  if (n === 1) return 0;
  else if (n === 2) return 1;
  else return fibonacci(n - 1) + fibonacci(n - 2);
}
function printFirstNTerms(n) {
  for (let i = 1; i <= n; i++) {
    console.log(fibonacci(i));
  }
}
printFirstNTerms(100);
