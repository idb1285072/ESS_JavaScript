// without default parameters skip arguments
const fun1 = (a, b, c, d) => {
  console.log(`fun1: a=${a}, b=${b}, c=${c}, d=${d}`);
};
fun1(1, 2, undefined, 4);
fun1(...[1, 2, , 4]); // empty slot in the array spreads as undefined

// Named Parameters with object destructuring
const fun2 = ({ a, b, c, d }) => {
  console.log(`fun2: a=${a}, b=${b}, c=${c}, d=${d}`);
};
fun2({ a: 3, b: 4, d: 5 });
fun2({ d: 5, a: 3, b: 4 });
/*
Benefits:
- can omit any parameter
- order does not matter
- clear code because parameter names explicit 
*/
