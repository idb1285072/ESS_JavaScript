// trampoline
function trampoline(fn) {
  while (typeof fn === 'function') {
    fn = fn();
  }
  return fn;
}

function factorialThunk(n, acc = BigInt(1)) {
  return () => {
    if (n <= 1) return acc;
    return factorialThunk(n - 1, acc * BigInt(n));
  };
}

const result = trampoline(factorialThunk(1000));
console.log(result.toString());