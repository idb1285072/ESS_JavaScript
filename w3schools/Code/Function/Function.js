function toCelcius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

let value = toCelcius;

console.log(value(40));
