onmessage = function (e) {
  const limit = e.data;
  const primes = [];

  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) primes.push(i);
  }

  postMessage(primes);
};

function isPrime(n) {
  for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
}
