const power = (a, n) => {
  if (n === 0) return 1;
  else return a * power(a, n - 1);
};
console.log(power(3, 4));
console.log(power(2, 3));
/**
  a^0 => 1
  a^1 => a*1
  a^2 => a*a => a*power(2)
 */
